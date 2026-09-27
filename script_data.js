// Full Meeting Script Data transcribed verbatim from all 6 PDF pages
const MEETING_ROLES = {
  alex: {
    id: "alex",
    name: "Alex",
    title: "IT Manager (ประธานการประชุม)",
    badgeColor: "#ffe17c",
    textColor: "#171e19",
    avatarBg: "#ffe17c",
    tag: "Chairperson",
    description: "Leads the urgent meeting, directs strategy, asks for updates, and summarizes final action plans."
  },
  emily: {
    id: "emily",
    name: "Emily",
    title: "Marketing Employee (พนักงานการตลาด)",
    badgeColor: "#48bb78",
    textColor: "#ffffff",
    avatarBg: "#38a169",
    tag: "Presenter",
    description: "The main presenter experiencing laptop freezing and Wi-Fi connection issues before client call."
  },
  ben: {
    id: "ben",
    name: "Ben",
    title: "IT Support (เจ้าหน้าที่ไอที)",
    badgeColor: "#ed8936",
    textColor: "#ffffff",
    avatarBg: "#dd6b20",
    tag: "IT Support",
    description: "Assists with hardware, memory diagnostics, clearing cache, and physical LAN cable setup."
  },
  jane: {
    id: "jane",
    name: "Jane",
    title: "System Administrator (ผู้ดูแลระบบ)",
    badgeColor: "#9f7aea",
    textColor: "#ffffff",
    avatarBg: "#805ad5",
    tag: "System Admin",
    description: "Monitors server logs, diagnoses the Wi-Fi system bug, and switches traffic to dedicated IT VLAN."
  },
  mike: {
    id: "mike",
    name: "Mike",
    title: "Project Manager (ผู้จัดการโครงการ)",
    badgeColor: "#4299e1",
    textColor: "#ffffff",
    avatarBg: "#3182ce",
    tag: "Project Manager",
    description: "Manages presentation risks, ensures dual-track redundancy, downloads slides onto backup laptop."
  }
};

const MEETING_SCRIPT = [
  // ================= PAGE 1 =================
  {
    id: "p1-1",
    page: 1,
    speakerId: "alex",
    speakerName: "Alex (Chairperson)",
    en: "Good morning, everyone. Thanks for joining this urgent meeting. As you know, we have an important client presentation in less than an hour, but Emily is facing severe technical issues. Emily, could you tell us what’s happening?",
    th: "อรุณสวัสดิ์ทุกคน ขอบคุณที่เข้าร่วมการประชุมด่วนนี้นะครับ อย่างที่ทุกคนทราบ เรามีกำหนดนำเสนองานให้ลูกค้าสำคัญในอีกไม่ถึงหนึ่งชั่วโมง แต่ Emily กำลังเจอปัญหาเทคนิคที่รุนแรง Emily ช่วยบอกพวกเราหน่อยได้ไหมว่าเกิดอะไรขึ้น?",
    keyPhrases: [
      { text: "urgent meeting", note: "การประชุมด่วน" },
      { text: "in less than an hour", note: "ในอีกไม่ถึงหนึ่งชั่วโมง" },
      { text: "severe technical issues", note: "ปัญหาทางเทคนิคที่รุนแรง" }
    ],
    tip: "Alex sets a firm, professional, yet supportive tone to quickly understand the core issue."
  },
  {
    id: "p1-2",
    page: 1,
    speakerId: "emily",
    speakerName: "Emily",
    en: "Thank you, Alex. My computer keeps freezing and the network connection is unstable. I'm getting an error message every time I try to open the presentation file. Can someone check the Wi-Fi connection and help me fix this?",
    th: "ขอบคุณค่ะ Alex คอมพิวเตอร์ของฉันค้างอยู่เรื่อยๆ และสัญญาณอินเทอร์เน็ตก็ไม่เสถียรค่ะ ฉันได้รับข้อความแจ้งเตือนข้อผิดพลาดทุกครั้งที่พยายามเปิดไฟล์นำเสนองาน พอจะมีใครช่วยเช็กการเชื่อมต่อ Wi-Fi และช่วยฉันแก้ไขเรื่องนี้ได้บ้างไหมคะ?",
    keyPhrases: [
      { text: "keeps freezing", note: "ค้างอยู่เรื่อยๆ / อาการเครื่องหยุดทำงานซ้ำๆ" },
      { text: "network connection is unstable", note: "การเชื่อมต่อเครือข่ายไม่เสถียร" },
      { text: "error message", note: "ข้อความแจ้งเตือนข้อผิดพลาด" }
    ],
    tip: "Emily describes both local symptoms (computer freezing) and network symptoms (unstable Wi-Fi)."
  },
  {
    id: "p1-3",
    page: 1,
    speakerId: "mike",
    speakerName: "Mike (Project Manager)",
    en: "Oh no! We can't risk delaying the presentation. I think we should prepare a backup plan right now while IT is fixing the main laptop. Does anyone have any suggestions?",
    th: "แย่แล้ว! เราเสี่ยงที่จะทำให้การนำเสนองานล่าช้าไม่ได้ ในความคิดของผม มันจะดีกว่าถ้าเราเตรียมแผนสำรองไว้ทันทีในระหว่างที่ฝ่ายไอทีกำลังแก้ไขปัญหาเครื่องโน้ตบุ๊กหลัก มีใครมีข้อเสนอแนะอะไรไหมครับ?",
    keyPhrases: [
      { text: "can't risk delaying", note: "เสี่ยงที่จะทำให้ล่าช้าไม่ได้" },
      { text: "prepare a backup plan", note: "เตรียมแผนสำรอง" },
      { text: "Does anyone have any suggestions?", note: "มีใครมีข้อเสนอแนะอะไรไหม?" }
    ],
    tip: "Mike immediately introduces risk mitigation and redundancy concepts."
  },

  // ================= PAGE 2 =================
  {
    id: "p2-1",
    page: 2,
    speakerId: "ben",
    speakerName: "Ben (IT Support)",
    en: "Let me see if I can fix it. Emily, have you tried restarting it or clearing the cache and trying again? Sometimes a simple reboot clears up memory issues when the software isn't responding.",
    th: "เดี๋ยวผมดูให้นะครับว่าจะแก้ได้ไหม คุณ Emily ลองรีสตาร์ตเครื่องแล้วหรือยัง หรือลองลบแคชแล้วลองใหม่อีกครั้งหรือยังครับ? บางครั้งการรีบูตเครื่องง่ายๆ ก็ช่วยเคลียร์ปัญหาหน่วยความจำเวลาที่ซอฟต์แวร์ไม่ตอบสนองได้นะครับ",
    keyPhrases: [
      { text: "clearing the cache", note: "ล้างหน่วยความจำแคช" },
      { text: "simple reboot", note: "การรีบูตหรือเริ่มระบบเครื่องใหม่แบบง่ายๆ" },
      { text: "memory issues", note: "ปัญหาหน่วยความจำ (RAM/Memory leak)" }
    ],
    tip: "Ben suggests the first-tier diagnostic steps: cache clearance and rebooting."
  },
  {
    id: "p2-2",
    page: 2,
    speakerId: "jane",
    speakerName: "Jane (System Admin)",
    en: "I understand your perspective, but I see things differently. A complete restart might take too long if the system is down or struggling with background updates. From my perspective, the best solution is to check the network bandwidth on our server first.",
    th: "ฉันเข้าใจมุมมองของคุณนะ แต่ฉันมองเรื่องนี้ต่างออกไป การรีสตาร์ตเครื่องใหม่อาจใช้เวลานานเกินไปถ้าระบบล่ม หรือกำลังค้างกับการอัปเดตเบื้องหลัง ในมุมมองของฉัน วิธีแก้ปัญหาที่ดีที่สุดคือการตรวจสอบแบนด์วิดท์ของเครือข่ายบนเซิร์ฟเวอร์ของเราก่อนค่ะ",
    keyPhrases: [
      { text: "I understand your perspective, but I see things differently", note: "วลีแสดงความเห็นต่างอย่างสุภาพในที่ประชุม" },
      { text: "struggling with background updates", note: "ติดค้างอยู่กับการอัปเดตเบื้องหลัง" },
      { text: "check the network bandwidth", note: "ตรวจสอบแบนด์วิดท์เครือข่ายบนเซิร์ฟเวอร์" }
    ],
    tip: "Jane provides a crucial senior infrastructure perspective and disagrees professionally."
  },
  {
    id: "p2-3",
    page: 2,
    speakerId: "alex",
    speakerName: "Alex (Chairperson)",
    en: "That's a good point, Jane. We need a dual-track solution—fixing the hardware and preparing a backup. Ben, do you know how to fix this internet lag quickly? Can you share your thoughts on this?",
    th: "นั่นเป็นประเด็นที่ดีเลยครับ Jane เราต้องแก้ปัญหาแบบสองทางขนานกัน—ทั้งซ่อมแซมฮาร์ดแวร์และเตรียมแผนสำรอง Ben คุณพอจะรู้วิธีแก้ไขปัญหาเน็ตช้าแบบเร็วๆ ไหม? ช่วยแบ่งปันความคิดเห็นของคุณในเรื่องนี้หน่อยได้ไหมครับ?",
    keyPhrases: [
      { text: "dual-track solution", note: "แนวทางแก้ปัญหาแบบสองทางขนานกัน (แผนหลัก + แผนสำรอง)" },
      { text: "internet lag", note: "อาการแล็ก/หน่วงของสัญญาณอินเทอร์เน็ต" },
      { text: "Can you share your thoughts on this?", note: "ช่วยแชร์มุมมองความคิดเห็นในเรื่องนี้หน่อยได้ไหม?" }
    ],
    tip: "Alex coins the key meeting strategy: 'dual-track solution'."
  },
  {
    id: "p2-4",
    page: 2,
    speakerId: "mike",
    speakerName: "Mike (Project Manager)",
    en: "Another option might be to load Emily's presentation onto my backup laptop just in case. I see your point, but I think we should also have a second device ready.",
    th: "อีกทางเลือกหนึ่งอาจเป็นการโหลดสไลด์ของ Emily เข้ามาไว้ในโน้ตบุ๊กสำรองของผมเผื่อไว้ครับ ผมเข้าใจจุดประสงค์ของคุณนะ แต่ผมคิดว่าเราควรเตรียมอุปกรณ์สำรองเครื่องที่สองให้พร้อมด้วย",
    keyPhrases: [
      { text: "just in case", note: "เผื่อไว้ในกรณีฉุกเฉิน" },
      { text: "second device ready", note: "เตรียมอุปกรณ์เครื่องที่สองให้พร้อม" },
      { text: "I see your point", note: "ผมเข้าใจจุดประสงค์/มุมมองของคุณ" }
    ],
    tip: "Mike ensures physical redundancy by prepping his secondary machine."
  },

  // ================= PAGE 3 =================
  {
    id: "p3-1",
    page: 3,
    speakerId: "emily",
    speakerName: "Emily",
    en: "Building on what you said, Mike, I can transfer my slides to a USB drive for you. But I can't log in to my account properly right now because of the lag. Could you take a look at this for me, Ben?",
    th: "ต่อยอดจากที่คุณพูดนะคะคุณ Mike ฉันสามารถย้ายไฟล์สไลด์ไปใส่ในแฟลชไดรฟ์ให้คุณได้ แต่ตอนนี้ฉันไม่สามารถล็อกอินเข้าบัญชีของฉันได้เพราะเครื่องมันค้างมาก คุณช่วยมาดูตรงนี้ให้ฉันหน่อยได้ไหมคะ Ben?",
    keyPhrases: [
      { text: "Building on what you said", note: "ต่อยอด/สืบเนื่องจากที่คุณพูดไว้" },
      { text: "transfer my slides to a USB drive", note: "ย้ายไฟล์สไลด์ลงในแฟลชไดรฟ์" },
      { text: "Could you take a look at this for me?", note: "คุณช่วยมาดูตรงนี้ให้หน่อยได้ไหม?" }
    ],
    tip: "Emily uses 'Building on what you said' to create constructive team alignment."
  },
  {
    id: "p3-2",
    page: 3,
    speakerId: "ben",
    speakerName: "Ben (IT Support)",
    en: "Sure! Let's check the settings and make sure all the cables are connected properly. What if we tried a different approach, like connecting Emily’s laptop directly to a wired LAN cable instead of Wi-Fi?",
    th: "ได้เลยครับ! มาเช็กการตั้งค่ากัน และตรวจดูให้แน่ใจว่าเสียบสายทั้งหมดเรียบร้อยดีแล้ว ถ้าเกิดเราลองใช้วิธีอื่นดูล่ะครับ อย่างเช่นการต่อสายแลนตรงเข้าโน้ตบุ๊กของ Emily แทนการใช้ Wi-Fi?",
    keyPhrases: [
      { text: "make sure all the cables are connected properly", note: "ตรวจเช็กว่าเสียบสายทุกเส้นเรียบร้อยดี" },
      { text: "What if we tried a different approach", note: "ถ้าเราลองใช้วิธีอื่นดูบ้างล่ะ" },
      { text: "wired LAN cable instead of Wi-Fi", note: "ต่อสายแลนแบบมีสายแทนการใช้ Wi-Fi ไร้สาย" }
    ],
    tip: "Ben suggests switching from wireless Wi-Fi to a direct wired Ethernet cable."
  },
  {
    id: "p3-3",
    page: 3,
    speakerId: "jane",
    speakerName: "Jane (System Admin)",
    en: "That's a great idea, and we could also switch her connection to our dedicated IT vLAN. I just checked the server logs—there's a bug in the system affecting general Wi-Fi traffic, but the wired network is running smoothly.",
    th: "นั่นเป็นความคิดที่ดีมากค่ะ และเรายังสามารถย้ายการเชื่อมต่อของเธอไปที่ vLAN สำหรับฝ่ายไอทีโดยเฉพาะได้ด้วย ฉันเพิ่งเช็กบันทึกระบบ—มีบั๊กในระบบที่ส่งผลกระทบต่อสัญญาณ Wi-Fi ทั่วไปอยู่ค่ะ แต่เครือข่ายแบบต่อสายแลนยังทำงานได้ราบรื่นดี",
    keyPhrases: [
      { text: "dedicated IT vLAN", note: "vLAN (Virtual Local Area Network) เฉพาะสำหรับฝ่ายไอที" },
      { text: "server logs", note: "บันทึกข้อมูลการทำงานของระบบเซิร์ฟเวอร์" },
      { text: "running smoothly", note: "ทำงานได้อย่างราบรื่น/ไม่มีสะดุด" }
    ],
    tip: "Jane identifies root cause: a general Wi-Fi bug, and proposes dedicated IT VLAN routing."
  },
  {
    id: "p3-4",
    page: 3,
    speakerId: "emily",
    speakerName: "Emily",
    en: "Before we proceed, let me just make sure we're all on the same page: Mike is getting the backup laptop ready, while Ben and Jane set up the LAN cable for me. Is the issue resolved now or are we still troubleshooting the problem?",
    th: "ก่อนที่เราจะดำเนินการต่อ ขอฉันทำความเข้าใจให้ตรงกันก่อนนะคะ: คุณ Mike กำลังเตรียมโน้ตบุ๊กสำรอง ในขณะที่ Ben และ Jane เซ็ตระบบการเชื่อมต่อสายแลนให้ฉัน ตอนนี้แก้ไขปัญหาได้หรือยังคะ หรือพวกเรายังอยู่ในขั้นตอนการแก้ไขปัญหาอยู่?",
    keyPhrases: [
      { text: "on the same page", note: "มีความเข้าใจตรงกัน / เห็นพ้องต้องกัน" },
      { text: "Before we proceed", note: "ก่อนที่เราจะดำเนินการต่อ" },
      { text: "troubleshooting the problem", note: "กำลังหาสาเหตุและแก้ปัญหา" }
    ],
    tip: "Emily checks status clarity so everyone knows their exact responsibilities."
  },

  // ================= PAGE 4 =================
  {
    id: "p4-1",
    page: 4,
    speakerId: "alex",
    speakerName: "Alex (Chairperson)",
    en: "I couldn't agree more with this plan. Jane, could you clarify your point? How long will it take to switch her to the wired vLAN?",
    th: "ผมเห็นด้วยสุดๆ กับแผนนี้เลยครับ Jane คุณช่วยอธิบายประเด็นของคุณเพิ่มเติมอีกนิดได้ไหมครับ? จะใช้เวลานานแค่ไหนในการสลับไปใช้ vLAN แบบสายแลน?",
    keyPhrases: [
      { text: "I couldn't agree more", note: "ผมเห็นด้วยอย่างยิ่ง / เห็นด้วยแบบไม่มีข้อกังขา" },
      { text: "clarify your point", note: "อธิบาย/ขยายความประเด็นให้ชัดเจนยิ่งขึ้น" },
      { text: "How long will it take", note: "จะใช้เวลานานเท่าไร" }
    ],
    tip: "Alex expresses strong agreement and asks for an exact time estimate."
  },
  {
    id: "p4-2",
    page: 4,
    speakerId: "jane",
    speakerName: "Jane (System Admin)",
    en: "Switching to the vLAN takes only two minutes. The IT team is working on it right now. I believe we can restore full speed before the client joins the call.",
    th: "การสลับไปใช้ vLAN ใช้เวลาแค่สองนาทีค่ะ ทีมไอทีกำลังดำเนินการให้อยู่ในตอนนี้ ฉันเชื่อว่าเราสามารถดึงความเร็วกลับมาเต็มที่ได้ก่อนที่ลูกค้าจะเข้าร่วมการประชุมค่ะ",
    keyPhrases: [
      { text: "takes only two minutes", note: "ใช้เวลาเพียงแค่ 2 นาที" },
      { text: "restore full speed", note: "กู้คืนความเร็วเครือข่ายเต็มพิกัดกลับมา" },
      { text: "before the client joins the call", note: "ก่อนที่ลูกค้าจะกดเข้าร่วมการสนทนา/วิดีโอคอล" }
    ],
    tip: "Jane gives a precise 2-minute SLA and gives confidence to the team."
  },
  {
    id: "p4-3",
    page: 4,
    speakerId: "ben",
    speakerName: "Ben (IT Support)",
    en: "We're still troubleshooting the problem, but I have the LAN cable right here. I’ll plug it in now. See if the Wi-Fi signal is strong enough or if the wired connection icons show up.",
    th: "พวกเรายังอยู่ในขั้นตอนการแก้ไขปัญหากันอยู่ครับ แต่ผมมีสายแลนอยู่นี่แล้ว เดี๋ยวผมเสียบให้เลยครับ ลองดูสิครับว่าสัญญาณ Wi-Fi แรงพอไหม หรือสัญลักษณ์การเชื่อมต่อสายแลนขึ้นหรือยัง",
    keyPhrases: [
      { text: "still troubleshooting", note: "ยังคงอยู่ในขั้นตอนการวิเคราะห์แก้ปัญหา" },
      { text: "plug it in now", note: "จะเสียบสายให้ทันทีเดี๋ยวนี้" },
      { text: "wired connection icons show up", note: "ไอคอนแสดงสถานะการต่อสายแลนปรากฏขึ้น" }
    ],
    tip: "Ben answers Emily's question and executes the physical LAN cable connection."
  },
  {
    id: "p4-4",
    page: 4,
    speakerId: "mike",
    speakerName: "Mike (Project Manager)",
    en: "That sounds promising! I’ve already downloaded the latest slides onto my laptop. I think you're right about using the wired LAN—it's much more reliable for video calls.",
    th: "ฟังดูมีหวังเลยครับ! ผมดาวน์โหลดสไลด์ล่าสุดลงโน้ตบุ๊กของผมเรียบร้อยแล้ว ผมคิดว่าคุณคิดถูกแล้วเรื่องการใช้สายแลน—มันเสถียรกว่ามากสำหรับการวิดีโอคอลครับ",
    keyPhrases: [
      { text: "That sounds promising!", note: "ฟังดูมีแววดี / มีความหวังว่าจะสำเร็จ!" },
      { text: "downloaded the latest slides", note: "ดาวน์โหลดไฟล์สไลด์เวอร์ชันล่าสุดเสร็จแล้ว" },
      { text: "much more reliable", note: "มีความเสถียรและไว้วางใจได้มากกว่ามาก" }
    ],
    tip: "Mike reports that backup laptop slides are ready and endorses the wired LAN approach."
  },

  // ================= PAGE 5 =================
  {
    id: "p5-1",
    page: 5,
    speakerId: "alex",
    speakerName: "Alex (Chairperson)",
    en: "Excellent progress, team. So, what we're saying is Ben will secure the wired connection for Emily, Jane will prioritize her vLAN traffic, and Mike has the backup device ready. I'd like to hear your ideas on testing the setup.",
    th: "คืบหน้าได้ดีมากทุกคน สรุปคือสิ่งที่พวกเรากำลังพูดกันก็คือ Ben จะจัดการเรื่องสายแลนให้ Emily, Jane จะปรับลำดับความสำคัญของ vLAN ให้เธอ และ Mike มีเครื่องสำรองพร้อมแล้ว ผมอยากฟังไอเดียของพวกคุณเรื่องการทดสอบระบบครับ",
    keyPhrases: [
      { text: "So, what we're saying is", note: "สรุปคือสิ่งที่เรากำลังตกลงกันอยู่นี้คือ..." },
      { text: "prioritize her vLAN traffic", note: "จัดลำดับความสำคัญของทราฟฟิก vLAN ให้เธอ" },
      { text: "testing the setup", note: "การทดสอบการตั้งค่าระบบ" }
    ],
    tip: "Alex conducts an executive recap and prompts for testing validation."
  },
  {
    id: "p5-2",
    page: 5,
    speakerId: "jane",
    speakerName: "Jane (System Admin)",
    en: "I have reconfigured the network priorities. The signal is stable now. Have you heard back from IT operations regarding the Wi-Fi bug? Don't worry, Emily's line is fully isolated and secure now.",
    th: "ฉันทำการปรับตั้งค่าความสำคัญของเครือข่ายใหม่แล้ว สัญญาณเสถียรแล้วค่ะ คุณได้รับการตอบกลับจากไอทีฝ่ายปฏิบัติการเรื่องบั๊ก Wi-Fi หรือยังคะ? ไม่ต้องห่วงนะ Emily สายของคุณแยกออกมาอย่างปลอดภัยและเสถียรแล้วค่ะ",
    keyPhrases: [
      { text: "reconfigured the network priorities", note: "ปรับการกำหนดลำดับความสำคัญของเครือข่ายใหม่" },
      { text: "fully isolated and secure", note: "แยกสายสัญญาณออกมาอย่างปลอดภัยและตัดขาดจากสัญญาณรบกวน" },
      { text: "Have you heard back from...", note: "คุณได้รับการติดต่อ/อัปเดตตอบกลับจาก... หรือยัง?" }
    ],
    tip: "Jane confirms vLAN QoS reconfiguration is finished and isolated."
  },
  {
    id: "p5-3",
    page: 5,
    speakerId: "emily",
    speakerName: "Emily",
    en: "That was perfect! I feel much more confident now. I will test the presentation on the new connection right away. Please let me know if you face any other problems on your side.",
    th: "สมบูรณ์แบบมากเลยค่ะ! ตอนนี้ฉันรู้สึกมั่นใจขึ้นเยอะเลย เดี๋ยวฉันจะทดสอบเปิดงานนำเสนอบนการเชื่อมต่อใหม่ทันที โปรดแจ้งให้ฉันทราบนะคะหากคุณพบปัญหาอื่นอีกในฝั่งของคุณ",
    keyPhrases: [
      { text: "feel much more confident", note: "รู้สึกมั่นใจขึ้นมาก" },
      { text: "right away", note: "ในทันทีทันใด" },
      { text: "on your side", note: "ในฝั่งของคุณ / ทางฝั่งของคุณ" }
    ],
    tip: "Emily expresses renewed confidence and immediately initiates real slide testing."
  },
  {
    id: "p5-4",
    page: 5,
    speakerId: "ben",
    speakerName: "Ben (IT Support)",
    en: "I side with you on this one. Everything looks good on my diagnostic screen now. The issue should be resolved soon. Let me know if it's working properly now, Emily.",
    th: "ผมเห็นด้วยกับคุณในจุดนี้ครับ ทุกอย่างดูเรียบร้อยดีบนหน้าจอตรวจเช็กของผมแล้ว ปัญหาน่าจะได้รับการแก้ไขในไม่ช้านี้ครับ แจ้งให้ผมทราบด้วยนะครับว่าตอนนี้ใช้งานได้ปกติหรือยังนะครับ Emily",
    keyPhrases: [
      { text: "I side with you on this one", note: "ผมเห็นด้วยกับคุณในเรื่องนี้ / อยู่ข้างเดียวกับคุณ" },
      { text: "diagnostic screen", note: "หน้าจอวิเคราะห์และตรวจเช็กระบบ" },
      { text: "working properly", note: "ทำงานได้ตามปกติอย่างถูกต้อง" }
    ],
    tip: "Ben verifies all metrics on his telemetry monitor are in green status."
  },
  {
    id: "p5-5",
    page: 5,
    speakerId: "mike",
    speakerName: "Mike (Project Manager)",
    en: "Perfect! We are fully prepared. As far as I'm concerned, we are ready to give a great presentation to the client.",
    th: "เยี่ยมเลย! พวกเราเตรียมตัวพร้อมสุดๆ เท่าที่ผมพิจารณาดู พวกเราพร้อมมากที่จะนำเสนองานยอดเยี่ยมให้แก่ลูกค้าครับ",
    keyPhrases: [
      { text: "fully prepared", note: "เตรียมการพร้อมเต็มที่ 100%" },
      { text: "As far as I'm concerned", note: "เท่าที่ผมมองดู / ในมุมมองความเห็นของผม" },
      { text: "ready to give a great presentation", note: "พร้อมที่จะนำเสนองานอย่างยอดเยี่ยม" }
    ],
    tip: "Mike signals green light for the client meeting."
  },

  // ================= PAGE 6 =================
  {
    id: "p6-1",
    page: 6,
    speakerId: "alex",
    speakerName: "Alex (Chairperson)",
    en: "To summarize, we've agreed that Emily will present using her laptop via LAN, with Mike’s laptop as an instant backup. In conclusion, we'll proceed with this setup. Great teamwork, everyone! Let's win this client.",
    th: "เพื่อสรุปนะครับ พวกเราตกลงกันว่า Emily จะนำเสนองานโดยใช้โน้ตบุ๊กของเธอผ่านสายแลน โดยมีโน้ตบุ๊กของ Mike เป็นเครื่องสำรองพร้อมใช้ทันที โดยสรุปแล้ว พวกเราจะดำเนินการตามแผนนี้ครับ ทำงานเป็นทีมได้เยี่ยมมากทุกคน! ไปคว้าลูกค้ารายนี้กันครับ",
    keyPhrases: [
      { text: "To summarize, we've agreed that", note: "เพื่อเป็นการสรุป พวกเราได้ตกลงกันว่า..." },
      { text: "instant backup", note: "เครื่องสำรองพร้อมสลับใช้งานได้ทันที" },
      { text: "In conclusion, we'll proceed with this setup", note: "โดยสรุปแล้ว เราจะเดินหน้าด้วยแผนการจัดระบบนี้" },
      { text: "Let's win this client", note: "ไปเอาชนะใจและคว้าลูกค้ารายนี้มาให้ได้!" }
    ],
    tip: "Alex brings the meeting to a triumphant close with a rallying call to win the deal."
  }
];
