// ==========================================================================
// FLUX. APPLICATION LOGIC & ROLEPLAY STUDIO ENGINE
// ==========================================================================

let currentSelectedRole = 'all';
let isAutoPlaying = false;
let autoPlayIndex = 0;
let synth = window.speechSynthesis;
let currentUtterance = null;
let teleprompterInterval = null;
let teleprompterSpeed = 1; // 1x, 1.5x, 2x
let isTeleprompterScrolling = false;

// Voice Profiles for each character in Web Speech API
const CHARACTER_VOICE_CONFIG = {
  alex: { pitch: 0.9, rate: 0.95, gender: 'male' },    // IT Manager (Authoritative, composed)
  emily: { pitch: 1.2, rate: 1.05, gender: 'female' }, // Presenter (Fast, slightly stressed then confident)
  ben: { pitch: 1.0, rate: 1.0, gender: 'male' },      // IT Support (Friendly, direct)
  jane: { pitch: 1.1, rate: 0.98, gender: 'female' },   // SysAdmin (Analytical, calm)
  mike: { pitch: 0.85, rate: 1.0, gender: 'male' }     // PM (Encouraging, steady)
};

// Initialize app on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  renderScriptStream();
  startTopCountdown();
  setupSmoothScroll();
});

// Render the script stream into the DOM
function renderScriptStream(filterRole = 'all', searchQuery = '') {
  const container = document.getElementById('scriptStream');
  if (!container) return;

  const showThai = document.getElementById('toggleThai') ? document.getElementById('toggleThai').checked : true;
  const showNotes = document.getElementById('toggleNotes') ? document.getElementById('toggleNotes').checked : true;

  let filtered = MEETING_SCRIPT;

  // Search keyword filter
  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(item => 
      item.en.toLowerCase().includes(q) || 
      item.th.toLowerCase().includes(q) || 
      item.speakerName.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem; background: #f8f9fa; border-radius: 12px; border: var(--border-light);">
        <i class="fa-solid fa-file-circle-question" style="font-size: 2rem; color: #94a3b8; margin-bottom: 1rem; display: block;"></i>
        <h3 style="font-family: var(--font-display); font-size: 1.5rem;">No matching dialogue found</h3>
        <p style="color: #64748b; font-size: 0.9rem;">Try searching for another keyword like "vLAN", "LAN", "backup", or "cable".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((item, index) => {
    const roleMeta = MEETING_ROLES[item.speakerId] || {};
    const isSpotlighted = filterRole !== 'all' && item.speakerId === filterRole;
    const isDimmed = filterRole !== 'all' && item.speakerId !== filterRole;

    const phrasesHtml = (showNotes && item.keyPhrases && item.keyPhrases.length > 0) ? `
      <div class="dialogue-notes-box">
        <span class="notes-label"><i class="fa-solid fa-lightbulb"></i> KEY PHRASES:</span>
        ${item.keyPhrases.map(kp => `<span class="idiom-chip"><strong>${escapeHtml(kp.text)}</strong> (${escapeHtml(kp.note)})</span>`).join('')}
      </div>
    ` : '';

    const tipHtml = (showNotes && item.tip) ? `
      <div class="roleplay-tip-box">
        <i class="fa-solid fa-user-check"></i> <strong>Roleplay Cue:</strong> ${escapeHtml(item.tip)}
      </div>
    ` : '';

    return `
      <div class="dialogue-card ${isSpotlighted ? 'spotlighted' : ''} ${isDimmed ? 'dimmed' : ''}" id="dialogue-${item.id}" data-speaker="${item.speakerId}">
        <div class="card-top-meta">
          <div class="speaker-profile">
            <div class="speaker-avatar ${item.speakerId}">
              ${item.speakerName.charAt(0)}
            </div>
            <div>
              <span class="speaker-name-anton">${escapeHtml(item.speakerName)}</span>
              <span class="speaker-tag">${escapeHtml(roleMeta.tag || 'Role')}</span>
            </div>
          </div>
          <div class="card-actions-right">
            <span class="page-indicator-pill">PDF Page ${item.page}</span>
            <button class="btn-speaker-audio" onclick="playSpeech('${item.id}', '${item.speakerId}', event)" title="Listen in English">
              <i class="fa-solid fa-volume-high"></i>
            </button>
          </div>
        </div>

        <div class="dialogue-en">
          ${escapeHtml(item.en)}
        </div>

        ${showThai ? `
          <div class="dialogue-th">
            ${escapeHtml(item.th)}
          </div>
        ` : ''}

        ${phrasesHtml}
        ${tipHtml}
      </div>
    `;
  }).join('');
}

// Filter script by character role
function filterScriptRole(roleId) {
  currentSelectedRole = roleId;

  // Update pills UI
  const pills = document.querySelectorAll('.role-pill');
  pills.forEach(pill => pill.classList.remove('active'));

  const activePill = document.querySelector(`.role-pill.role-${roleId}`) || (roleId === 'all' ? pills[0] : null);
  if (activePill) activePill.classList.add('active');

  // Re-render
  const searchInput = document.getElementById('scriptSearch');
  const query = searchInput ? searchInput.value : '';
  renderScriptStream(roleId, query);

  // Update Teleprompter view if open
  updateTeleprompterContent();
}

// Search within script
function searchScript(query) {
  renderScriptStream(currentSelectedRole, query);
}

// Toggle Thai translation display
function toggleThaiTranslation() {
  const searchInput = document.getElementById('scriptSearch');
  const query = searchInput ? searchInput.value : '';
  renderScriptStream(currentSelectedRole, query);
  updateTeleprompterContent();
}

// Toggle key notes and idioms
function toggleKeyNotes() {
  const searchInput = document.getElementById('scriptSearch');
  const query = searchInput ? searchInput.value : '';
  renderScriptStream(currentSelectedRole, query);
}

// Web Speech API single line speaker
function playSpeech(dialogueId, speakerId, event) {
  if (event) event.stopPropagation();

  if (!synth) {
    alert("Speech Synthesis is not supported by your browser.");
    return;
  }

  synth.cancel(); // Stop ongoing speech

  const item = MEETING_SCRIPT.find(d => d.id === dialogueId);
  if (!item) return;

  const card = document.getElementById(`dialogue-${dialogueId}`);
  const btn = card ? card.querySelector('.btn-speaker-audio') : null;

  const utterance = new SpeechSynthesisUtterance(item.en);
  utterance.lang = 'en-US';

  const config = CHARACTER_VOICE_CONFIG[speakerId] || { pitch: 1, rate: 1 };
  utterance.pitch = config.pitch;
  utterance.rate = config.rate;

  // Visual cues
  if (btn) btn.classList.add('playing');

  utterance.onend = () => {
    if (btn) btn.classList.remove('playing');
  };

  utterance.onerror = () => {
    if (btn) btn.classList.remove('playing');
  };

  synth.speak(utterance);
}

// Sequential auto-play full conversation
function playFullScript() {
  if (!synth) return;
  synth.cancel();

  isAutoPlaying = true;
  autoPlayIndex = 0;
  speakNextLineInSequence();
}

function speakNextLineInSequence() {
  if (!isAutoPlaying || autoPlayIndex >= MEETING_SCRIPT.length) {
    isAutoPlaying = false;
    return;
  }

  const item = MEETING_SCRIPT[autoPlayIndex];
  
  // Highlight card
  const card = document.getElementById(`dialogue-${item.id}`);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.style.outline = "3px solid var(--color-gold)";
  }

  const utterance = new SpeechSynthesisUtterance(item.en);
  utterance.lang = 'en-US';
  const config = CHARACTER_VOICE_CONFIG[item.speakerId] || { pitch: 1, rate: 1 };
  utterance.pitch = config.pitch;
  utterance.rate = config.rate;

  utterance.onend = () => {
    if (card) card.style.outline = "none";
    autoPlayIndex++;
    setTimeout(() => {
      if (isAutoPlaying) speakNextLineInSequence();
    }, 600);
  };

  utterance.onerror = () => {
    if (card) card.style.outline = "none";
    isAutoPlaying = false;
  };

  synth.speak(utterance);
}

function stopAudio() {
  isAutoPlaying = false;
  if (synth) synth.cancel();

  document.querySelectorAll('.dialogue-card').forEach(c => c.style.outline = "none");
  document.querySelectorAll('.btn-speaker-audio').forEach(b => b.classList.remove('playing'));
}

// Teleprompter Modal Management
function toggleRoleplayTeleprompter() {
  const modal = document.getElementById('teleprompterModal');
  if (!modal) return;

  modal.classList.toggle('active');

  if (modal.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
    updateTeleprompterContent();
  } else {
    document.body.style.overflow = '';
    stopTeleprompterScroll();
  }
}

function updateTeleprompterContent() {
  const content = document.getElementById('teleprompterContent');
  const badge = document.getElementById('teleRoleBadge');
  if (!content) return;

  if (badge) {
    badge.innerText = currentSelectedRole === 'all' ? 'All 5 Characters' : `Role: ${MEETING_ROLES[currentSelectedRole]?.name || currentSelectedRole}`;
  }

  const showThai = document.getElementById('toggleThai') ? document.getElementById('toggleThai').checked : true;

  let filtered = MEETING_SCRIPT;
  if (currentSelectedRole !== 'all') {
    filtered = filtered.filter(item => item.speakerId === currentSelectedRole);
  }

  content.innerHTML = filtered.map(item => `
    <div class="tele-item" data-id="${item.id}">
      <div class="tele-speaker">${escapeHtml(item.speakerName)}</div>
      <div class="tele-en">${escapeHtml(item.en)}</div>
      ${showThai ? `<div class="tele-th">${escapeHtml(item.th)}</div>` : ''}
    </div>
  `).join('');
}

function toggleTeleprompterScroll() {
  const btn = document.getElementById('telePlayBtn');
  if (isTeleprompterScrolling) {
    stopTeleprompterScroll();
    if (btn) btn.innerHTML = `<i class="fa-solid fa-play"></i> Auto-Scroll`;
  } else {
    startTeleprompterScroll();
    if (btn) btn.innerHTML = `<i class="fa-solid fa-pause"></i> Pause`;
  }
}

function startTeleprompterScroll() {
  isTeleprompterScrolling = true;
  const container = document.getElementById('teleprompterContent');
  if (!container) return;

  clearInterval(teleprompterInterval);
  teleprompterInterval = setInterval(() => {
    container.scrollTop += 1.5 * teleprompterSpeed;
  }, 30);
}

function stopTeleprompterScroll() {
  isTeleprompterScrolling = false;
  clearInterval(teleprompterInterval);
}

function setTeleSpeed(speed, btnElement) {
  teleprompterSpeed = speed;
  const buttons = document.querySelectorAll('.tele-speed-btn');
  buttons.forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
}

// System Mockup Interactive Simulations
function simulateLANPlug() {
  const lanPill = document.getElementById('lanStatusPill');
  const pingMetric = document.getElementById('pingMetric');

  if (lanPill) {
    lanPill.innerHTML = `<i class="fa-solid fa-ethernet"></i> LAN: Active (1 Gbps Cat6 Verified)`;
    lanPill.style.backgroundColor = "rgba(34, 197, 94, 0.4)";
    setTimeout(() => { lanPill.style.backgroundColor = "rgba(34, 197, 94, 0.2)"; }, 1200);
  }

  if (pingMetric) {
    pingMetric.innerText = "Ping: 9ms (Wired Cat6 Super-Stable)";
    pingMetric.style.color = "#4ade80";
  }

  showFloatingToast("🔌 Ben (IT Support) plugged in direct Cat6 LAN cable to Emily's laptop!");
}

function simulateVLANSwitch() {
  const vlanPill = document.getElementById('vlanStatusPill');
  const pingMetric = document.getElementById('pingMetric');

  if (vlanPill) {
    vlanPill.innerHTML = `<i class="fa-solid fa-route"></i> IT vLAN #402: Isolated & Prioritized`;
    vlanPill.style.backgroundColor = "rgba(255, 225, 124, 0.4)";
    setTimeout(() => { vlanPill.style.backgroundColor = "rgba(255, 225, 124, 0.15)"; }, 1200);
  }

  if (pingMetric) {
    pingMetric.innerText = "vLAN 402 Active &bull; Zero Packet Loss";
  }

  showFloatingToast("⚡ Jane (SysAdmin) completed IT vLAN #402 isolation in 120 seconds!");
}

function showFloatingToast(msg) {
  const existing = document.getElementById('fluxToast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'fluxToast';
  toast.style.position = 'fixed';
  toast.style.bottom = '30px';
  toast.style.right = '30px';
  toast.style.backgroundColor = '#171e19';
  toast.style.color = '#ffe17c';
  toast.style.border = '2px solid #ffe17c';
  toast.style.borderRadius = '8px';
  toast.style.padding = '0.9rem 1.4rem';
  toast.style.fontSize = '0.9rem';
  toast.style.fontWeight = '700';
  toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
  toast.style.zIndex = '99999';
  toast.style.transition = 'all 0.3s ease';
  toast.innerText = msg;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// Hero Launch Form
function handleHeroSubmit(e) {
  e.preventDefault();
  const select = document.getElementById('heroRoleSelect');
  const val = select ? select.value.toLowerCase() : '';

  let matchedRole = 'all';
  if (val.includes('alex')) matchedRole = 'alex';
  else if (val.includes('emily')) matchedRole = 'emily';
  else if (val.includes('ben')) matchedRole = 'ben';
  else if (val.includes('jane')) matchedRole = 'jane';
  else if (val.includes('mike')) matchedRole = 'mike';

  filterScriptRole(matchedRole);
  scrollToScript();
}

function openScriptDrawer(role) {
  filterScriptRole(role);
  scrollToScript();
}

function scrollToScript() {
  const target = document.getElementById('script-section');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

function handleCtaJoin(e) {
  e.preventDefault();
  showFloatingToast("🚀 Access granted! Launching roleplay training workspace...");
  setTimeout(() => {
    scrollToScript();
  }, 1000);
}

// Countdown timer in top bar
function startTopCountdown() {
  let seconds = 48 * 60 + 15;
  const timerElem = document.getElementById('topCountdown');

  setInterval(() => {
    if (seconds > 0) {
      seconds--;
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      if (timerElem) {
        timerElem.innerHTML = `<i class="fa-solid fa-clock"></i> Client Call in: <strong>${m}:${s < 10 ? '0' : ''}${s}</strong>`;
      }
    }
  }, 1000);
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
