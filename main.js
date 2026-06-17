/**
 * Wedding Invitation Website - Core Script
 * Couple: Abhiram & Divyasri
 * Wedding Date: June 25, 2026
 */

// ==========================================================================
// CONFIGURATION
// ==========================================================================
const WHATSAPP_NUMBER = "919000000000"; // Replace with actual WhatsApp number
const WEDDING_DATE_STRING = "2026-06-25T09:15:00";

// ==========================================================================
// TRANSLATION DICTIONARY
// ==========================================================================
const translations = {
  en: {
    "cover-open-prompt": "Tap to Open Invitation",
    "cover-hint": "Click the card to open your invitation",
    "save-the-date": "Save the Date",
    "wedding-celebration": "For the Wedding Celebration of",
    "explore-invite": "Explore Invitation",
    "announcement": "With the divine blessings of Almighty, we cordially invite you to join us and celebrate the auspicious occasion of the marriage ceremony of our beloved children.",
    "groom": "Groom",
    "bride": "Bride",
    "son-of": "Son of",
    "daughter-of": "Daughter of",
    "groom-parents": "Mrs. Padma & Mr. Janardhan",
    "bride-parents": "Mrs. Srilatha & Mr. Ramesh",
    "invite-conclusion": "Let's gather to shower our blessings upon the couple as they begin their lifetime journey together.",
    "days-until": "Days until we tie the knot",
    "days": "Days",
    "hours": "Hours",
    "minutes": "Minutes",
    "seconds": "Seconds",
    "calendar-month": "JUNE 2026",
    "day-mon": "MON",
    "day-tue": "TUE",
    "day-wed": "WED",
    "day-thu": "THU",
    "day-fri": "FRI",
    "day-sat": "SAT",
    "day-sun": "SUN",
    "save-date-btn": "Add to Google Calendar",
    "muhurtham-badge": "Auspicious Muhurtham",
    "muhurtham-title": "The Wedding Muhurtham",
    "muhurtham-union": "Marriage Union",
    "muhurtham-time": "<i class=\"fa-regular fa-calendar-days\"></i> Thursday, June 25, 2026<br><i class=\"fa-regular fa-clock\"></i> Muhurtham: 09:15 AM<br><span class=\"traditional-calendar-note\">(Sri Parabhava Nama Samvatsara Jyeshtha Masa Shuddha Ekadashi Swati Nakshatra yukta Karkataka Lagna Pushkaramsha Sumuhurtham)</span>",
    "venue-title": "P.B. Gardens (పి.బి. గార్డెన్స్)",
    "venue-address": "Ailapur Road, Korutla,<br>Jagtial District, Telangana",
    "feast-info": "Sumptuous Festive Lunch follows immediately after the marriage ceremony (వివాహానంతర విందు)",
    "navigate-btn": "Navigate to Venue",
    "compliments-title": "With Best Compliments",
    "inviters-title": "ఆత్మీయ ఆహ్వానం (Cordial Inviters)",
    "greetings-parents-list": "<strong>Mrs. &amp; Mr. Durishetti Padma-Janardhan</strong><br><strong>Mrs. &amp; Mr. Pabboji Srilatha-Ramesh</strong>",
    "co-inviters-title": "సహ ఆహ్వానించువారు (Co-Inviters)",
    "co-inviters-list": "<strong>Mrs. &amp; Mr. Bejjarapu Ramya-Maruthi</strong>",
    "grandparents-blessings-title": "పెద్దల ఆశీస్సులు (Grandparents' Blessings)",
    "greetings-grandparents": "Late Mrs. &amp; Mr. Durishetti Rambai-Manyandlu<br>Late Mr. Pusala Narsaiah &amp; Mrs. Achamma, Bhagya",
    "greetings-title": "చిరునవ్వుల పిలుపు (Warm Greetings)",
    "greetings-harish": "Harthik, Hemanth",
    "greetings-mahichandra": "Mahichandhana, Karthika, Vennela, Srinika, Adyasri",
    "greetings-grandkids": "Venu, and Relatives &amp; Friends",
    "rsvp-subtitle": "Please share your attendance plans to help us prepare the feast.",
    "rsvp-name-label": "Your Full Name",
    "rsvp-attending-label": "Will you grace the occasion?",
    "rsvp-yes": "Joyfully Attending",
    "rsvp-no": "Regretfully Declines",
    "rsvp-count-label": "Number of Guests (including you)",
    "rsvp-count-1": "1 Person",
    "rsvp-count-2": "2 People",
    "rsvp-count-3": "3 People",
    "rsvp-count-4": "4 People",
    "rsvp-count-5": "5+ People",
    "rsvp-msg-label": "Your Blessings / Message",
    "rsvp-save-btn": "Save Locally",
    "rsvp-whatsapp-btn": "Confirm on WhatsApp",
    "rsvp-success": "Thank you! Your response has been saved.",
    "thankyou-title": "ధన్యవాదములు",
    "thankyou-sub": "Thank You",
    "thankyou-blessing": "\"We await your gracious presence to bless our new beginning.\"",
    "copy-text": "&copy; 2026 Abhiram &amp; Divyasri's Wedding Invitation. Designed for Hemanth's Family."
  },
  te: {
    "cover-open-prompt": "ఆహ్వానాన్ని తెరవండి",
    "cover-hint": "ఆహ్వానాన్ని తెరవడానికి కార్డ్‌పై క్లిక్ చేయండి",
    "save-the-date": "తేదీని సేవ్ చేయండి",
    "wedding-celebration": "వివాహ మహోత్సవ ఆహ్వానం",
    "explore-invite": "ఆహ్వానాన్ని చూడండి",
    "announcement": "భగవంతుని దివ్య ఆశీస్సులతో, మా చిరంజీవుల వివాహ మహోత్సవ శుభకార్యానికి మిమ్మల్ని కుటుంబసమేతంగా సాదరంగా ఆహ్వానిస్తున్నాము.",
    "groom": "వరుడు",
    "bride": "వధువు",
    "son-of": "కుమారుడు",
    "daughter-of": "పుత్రిక",
    "groom-parents": "శ్రీమతి & శ్రీ దులిశెట్టి పద్మ-జనార్దన్",
    "bride-parents": "శ్రీమతి & శ్రీ వంటోజీ శ్రీలత-రమేష్",
    "invite-conclusion": "నూతన వధూవరులను ఆశీర్వదించడానికి విచ్చేయవలసిందిగా ప్రార్థన.",
    "days-until": "కల్యాణ మహోత్సవానికి ఇంకా...",
    "days": "రోజులు",
    "hours": "గంటలు",
    "minutes": "నిమిషాలు",
    "seconds": "సెకన్లు",
    "calendar-month": "జూన్ 2026",
    "day-mon": "సోమ",
    "day-tue": "మంగళ",
    "day-wed": "బుధ",
    "day-thu": "గురు",
    "day-fri": "శుక్ర",
    "day-sat": "శని",
    "day-sun": "ఆది",
    "save-date-btn": "క్యాలెండర్‌కు జోడించండి",
    "muhurtham-badge": "శుభ ముహూర్తం",
    "muhurtham-title": "వివాహ ముహూర్తం",
    "muhurtham-union": "కల్యాణ మహోత్సవం",
    "muhurtham-time": "<i class=\"fa-regular fa-calendar-days\"></i> గురువారము, జూన్ 25, 2026<br><i class=\"fa-regular fa-clock\"></i> ముహూర్తం: ఉదయం 09:15 నిమిషాలకు<br><span class=\"traditional-calendar-note\">(స్వస్తిశ్రీ చాంద్రమానేన శ్రీ పరాభవ నామ సంవత్సర జ్యేష్ఠ మాస శుద్ధ ఏకాదశి స్వాతి నక్షత్రయుక్త కర్కాటక లగ్న పుష్కరాంశ సుముహూర్తమున)</span>",
    "venue-title": "వి.వి. గార్డెన్స్",
    "venue-address": "ఐలాపూర్ రోడ్డు, తోర్రూరు,<br>మహబూబాబాద్ / వరంగల్ జిల్లా, తెలంగాణ",
    "feast-info": "వివాహానంతరం భోజన తాంబూలాదులు స్వీకరించి మమ్మల్ని ఆనందింపజేయగలరు.",
    "navigate-btn": "గూగుల్ మ్యాప్స్ దారి",
    "compliments-title": "ఆశీస్సులు & ఆహ్వానాలు",
    "inviters-title": "ఆత్మీయ ఆహ్వానం",
    "greetings-parents-list": "<strong>శ్రీమతి &amp; శ్రీ దులిశెట్టి పద్మ-జనార్దన్</strong><br><strong>శ్రీమతి &amp; శ్రీ వంటోజీ శ్రీలత-రమేష్</strong>",
    "co-inviters-title": "సహ ఆహ్వానించువారు",
    "co-inviters-list": "<strong>శ్రీమతి &amp; శ్రీ బెజ్జారపు రమ్య-మారుతి</strong>",
    "grandparents-blessings-title": "పెద్దల ఆశీస్సులు",
    "greetings-grandparents": "కీ||శే|| శ్రీమతి &amp; శ్రీ దులిశెట్టి రాంబాయి-మాన్యాండ్లు గార్ల దివ్య ఆశీస్సులతో...<br>కీ||శే|| శ్రీ పూసాల నర్సయ్య మాతృశ్రీ అచ్చమ్మ, భాగ్య గార్ల ఆశీస్సులతో...",
    "greetings-title": "చిరునవ్వుల పిలుపు",
    "greetings-harish": "మా సోదరుని పెళ్ళికి తప్పక రారండి... హరీష్, హేమంత్",
    "greetings-mahichandra": "మా బాబాయి పెళ్ళికి తప్పక రారండి... మహీచంద్ర, కార్తీక, వెన్నెల, శ్రీనిక్, ఆద్యశ్రీ",
    "greetings-grandkids": "మా పిన్ని పెళ్ళికి తప్పక రారండి... వేణు మరియు బంధుమిత్రులు",
    "rsvp-subtitle": "వివాహానికి మీ రాకను తెలియజేయండి.",
    "rsvp-name-label": "మీ పూర్తి పేరు",
    "rsvp-attending-label": "మీరు వివాహానికి విచ్చేస్తున్నారా?",
    "rsvp-yes": "సంతోషంగా హాజరవుతున్నాము",
    "rsvp-no": "హాజరుకాలేకపోతున్నాము",
    "rsvp-count-label": "అతిథుల సంఖ్య",
    "rsvp-count-1": "1 వ్యక్తి",
    "rsvp-count-2": "2 వ్యక్తులు",
    "rsvp-count-3": "3 వ్యక్తులు",
    "rsvp-count-4": "4 వ్యక్తులు",
    "rsvp-count-5": "5+ వ్యక్తులు",
    "rsvp-msg-label": "వధూవరులకు మీ ఆశీస్సులు / సందేశం",
    "rsvp-save-btn": "సేవ్ చేయండి",
    "rsvp-whatsapp-btn": "వాట్సాప్ ద్వారా తెలియజేయండి",
    "rsvp-success": "ధన్యవాదాలు! మీ సమాధానం సేవ్ చేయబడింది.",
    "thankyou-title": "ధన్యవాదములు",
    "thankyou-sub": "ధన్యవాదములు",
    "thankyou-blessing": "\"మా వివాహ శుభకార్యానికి విచ్చేసి, నూతన వధూవరులను ఆశీర్వదించవలసిందిగా కోరుతున్నాము.\"",
    "copy-text": "&copy; 2026 అభిరామ్ &amp; దివ్యశ్రీల వివాహ ఆహ్వాన పత్రిక. హేమంత్ కుటుంబ సభ్యుల ఆత్మీయ సమర్పణ."
  }
};

let currentLanguage = localStorage.getItem("wedding_lang") || "en";

// ==========================================================================
// PAGE INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize custom cursor immediately
  initCustomCursor();

  // Initialize cover card experience
  initCardCoverExperience();

  // Initialize cover falling petals
  initCoverPetals();

  // Tilt effect on card
  initCardTilt();

  // Initialize language translation
  initLanguage();
});

// ==========================================================================
// 1. CARD COVER EXPERIENCE
// ==========================================================================
function initCardCoverExperience() {
  const cardWrapper = document.getElementById("invitationCardWrapper");
  const card = document.getElementById("invitationCard");
  const coverScreen = document.getElementById("cardCoverScreen");
  const mainInvitation = document.getElementById("mainInvitation");
  const floatingControls = document.getElementById("floatingControls");
  const petalsContainer = document.getElementById("petalsContainer");
  const hintText = document.getElementById("coverHintText");

  if (!cardWrapper || !coverScreen || !mainInvitation) return;

  let hasOpened = false;

  function openCard() {
    if (hasOpened) return;
    hasOpened = true;

    // Phase 1: Add 'opening' class - card scales up
    coverScreen.classList.add("opening");

    // Remove hover hint
    if (hintText) hintText.style.opacity = "0";

    // Phase 2: After 350ms, fly card away
    setTimeout(() => {
      coverScreen.classList.add("fly-away");

      // Phase 3: Burst of petals/confetti
      spawnOpeningBurst();
    }, 350);

    // Phase 4: Fade out cover screen and reveal main invitation
    setTimeout(() => {
      coverScreen.classList.add("fade-out");

      // Show main invitation
      mainInvitation.style.display = "block";
      document.body.style.overflow = "hidden"; // temp prevent scroll

      // Fade in main invitation
      setTimeout(() => {
        mainInvitation.style.transition = "opacity 0.6s ease";
        mainInvitation.style.opacity = "1";
        document.body.style.overflow = "";

        // Show floating controls and petals
        if (floatingControls) floatingControls.style.display = "flex";
        if (petalsContainer) petalsContainer.style.display = "block";

        // Initialize all main content features
        initMainContent();
      }, 100);
    }, 900);

    // Phase 5: Remove cover screen from DOM entirely
    setTimeout(() => {
      if (coverScreen) {
        coverScreen.style.display = "none";
        coverScreen.style.pointerEvents = "none";
      }
    }, 1600);
  }

  // Click on card wrapper to open
  cardWrapper.addEventListener("click", openCard);

  // Also allow Enter/Space key
  cardWrapper.setAttribute("tabindex", "0");
  cardWrapper.setAttribute("role", "button");
  cardWrapper.setAttribute("aria-label", "Click to open wedding invitation");
  cardWrapper.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openCard();
    }
  });
}

// ==========================================================================
// 2. OPENING BURST EFFECT
// ==========================================================================
function spawnOpeningBurst() {
  const burst = document.createElement("div");
  burst.style.cssText = `
    position: fixed; inset: 0; z-index: 6000;
    pointer-events: none; overflow: hidden;
  `;
  document.body.appendChild(burst);

  const colors = ["#d4af37", "#ff9100", "#7c1224", "#ffb300", "#ff4500", "#ebd09e", "#fff"];
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;

  for (let i = 0; i < 60; i++) {
    const particle = document.createElement("div");
    const size = Math.random() * 10 + 4;
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 300 + 100;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const isCircle = Math.random() > 0.5;
    const duration = Math.random() * 800 + 600;

    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: ${isCircle ? "50%" : "2px"};
      left: ${cx}px;
      top: ${cy}px;
      transform: translate(-50%, -50%);
      opacity: 1;
      transition: all ${duration}ms cubic-bezier(0.2, 0, 0.8, 1);
    `;
    burst.appendChild(particle);

    const tx = cx + Math.cos(angle) * distance;
    const ty = cy + Math.sin(angle) * distance;

    requestAnimationFrame(() => {
      setTimeout(() => {
        particle.style.left = `${tx}px`;
        particle.style.top = `${ty}px`;
        particle.style.opacity = "0";
        particle.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg) scale(0.3)`;
      }, 20);
    });
  }

  // Clean up burst
  setTimeout(() => burst.remove(), 1500);
}

// ==========================================================================
// 3. COVER FALLING PETALS
// ==========================================================================
function initCoverPetals() {
  const container = document.getElementById("coverPetals");
  if (!container) return;

  const colors = ["rgba(212,175,55,0.6)", "rgba(255,145,0,0.5)", "rgba(124,18,36,0.4)", "rgba(255,69,0,0.5)", "rgba(235,208,158,0.7)"];

  function createCoverPetal() {
    const petal = document.createElement("div");
    petal.classList.add("cover-petal");

    const size = Math.random() * 8 + 4;
    const left = Math.random() * window.innerWidth;
    const duration = Math.random() * 8 + 6;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const rotation = Math.random() * 360;

    petal.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}px;
      top: -10px;
      background: ${color};
      animation-duration: ${duration}s;
      transform: rotate(${rotation}deg);
      opacity: 0.8;
    `;

    container.appendChild(petal);
    setTimeout(() => petal.remove(), duration * 1000);
  }

  // Create petals continuously
  const petalInterval = setInterval(createCoverPetal, 600);

  // Stop after cover is gone (safety)
  setTimeout(() => clearInterval(petalInterval), 15000);
}

// ==========================================================================
// 4. CARD TILT EFFECT (3D mouse tracking)
// ==========================================================================
function initCardTilt() {
  const wrapper = document.getElementById("invitationCardWrapper");
  const card = document.getElementById("invitationCard");
  if (!wrapper || !card) return;

  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) return; // Skip on mobile

  wrapper.addEventListener("mousemove", (e) => {
    const rect = wrapper.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = e.clientX - cx;
    const dy = e.clientY - cy;

    const maxTilt = 10; // degrees
    const rotateX = (-dy / (rect.height / 2)) * maxTilt;
    const rotateY = (dx / (rect.width / 2)) * maxTilt;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.animation = "none"; // Stop float while tilting
  });

  wrapper.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    card.style.animation = "cardFloat 4s ease-in-out infinite";
  });
}

// ==========================================================================
// HELPER: Scroll to section
// ==========================================================================
function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ==========================================================================
// MAIN CONTENT INITIALIZATION (after card opens)
// ==========================================================================
function initMainContent() {
  // Short delay so main content is visible
  setTimeout(() => {
    document.getElementById("hero")?.classList.add("loaded");
  }, 100);

  initScrollAnimations();
  initPetalRain();
  initCountdown();
  initAudioControls();
  initRSVPForm();
  initScrollTopButton();
}

// ==========================================================================
// CUSTOM CURSOR
// ==========================================================================
function initCustomCursor() {
  const cursor = document.getElementById("customCursor");
  const dot = document.getElementById("customCursorDot");
  if (!cursor || !dot) return;

  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) return;

  cursor.style.display = "block";
  dot.style.display = "block";

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover states on interactable elements
  const updateInteractables = () => {
    const interactables = document.querySelectorAll("a, button, input, select, textarea, .clickable-img, .radio-label, [role=button]");
    interactables.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        cursor.style.width = "45px";
        cursor.style.height = "45px";
        cursor.style.borderColor = "var(--color-gold)";
        cursor.style.backgroundColor = "rgba(212, 175, 55, 0.1)";
      });
      item.addEventListener("mouseleave", () => {
        cursor.style.width = "26px";
        cursor.style.height = "26px";
        cursor.style.borderColor = "var(--color-primary)";
        cursor.style.backgroundColor = "transparent";
      });
    });
  };
  updateInteractables();
  // Re-run after main content loads
  setTimeout(updateInteractables, 2000);
}

// ==========================================================================
// SCROLL ANIMATIONS
// ==========================================================================
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".scroll-animate");
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );
  animatedElements.forEach((el) => observer.observe(el));
}

// ==========================================================================
// PETAL RAIN (main content)
// ==========================================================================
function initPetalRain() {
  const container = document.getElementById("petalsContainer");
  if (!container) return;

  const maxPetals = 20;
  const petalColors = ["#7c1224", "#ff9100", "#ffb300", "#ebd09e"];

  function createPetal() {
    if (container.children.length >= maxPetals) return;
    const petal = document.createElement("div");
    petal.classList.add("petal");

    const size = Math.random() * 10 + 6;
    const startLeft = Math.random() * window.innerWidth;
    const duration = Math.random() * 8 + 8;
    const color = petalColors[Math.floor(Math.random() * petalColors.length)];
    const sway = Math.random() * 100 - 50;
    const opacity = Math.random() * 0.25 + 0.08;

    petal.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${startLeft}px;
      background-color: ${color};
      animation-duration: ${duration}s;
      opacity: ${opacity};
      --sway-width: ${sway}px;
      --petal-opacity: ${opacity};
    `;

    container.appendChild(petal);
    setTimeout(() => petal.remove(), duration * 1000);
  }

  setInterval(createPetal, 1200);
}

// ==========================================================================
// COUNTDOWN TIMER
// ==========================================================================
function initCountdown() {
  const countdownEl = document.getElementById("countdown");
  if (!countdownEl) return;

  const targetDate = new Date(WEDDING_DATE_STRING).getTime();
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateTimer() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      clearInterval(timerInterval);
      [daysEl, hoursEl, minutesEl, secondsEl].forEach((el) => { if (el) el.textContent = "00"; });
      const title = document.querySelector(".countdown-title");
      if (title) {
        title.setAttribute("data-translate", "married-title");
        title.textContent = currentLanguage === "en" ? "We Are Married! ♥" : "మా వివాహం జరిగింది! ♥";
      }
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = d < 10 ? "0" + d : d;
    if (hoursEl) hoursEl.textContent = h < 10 ? "0" + h : h;
    if (minutesEl) minutesEl.textContent = m < 10 ? "0" + m : m;
    if (secondsEl) secondsEl.textContent = s < 10 ? "0" + s : s;
  }

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}

// ==========================================================================
// AMBIENT MUSIC
// ==========================================================================
function initAudioControls() {
  const musicBtn = document.getElementById("musicBtn");
  const bgMusic = document.getElementById("bgMusic");
  const wave = document.getElementById("musicWave");
  if (!musicBtn || !bgMusic) return;

  bgMusic.volume = 0.25;
  let isPlaying = false;

  function playAudio() {
    bgMusic.play().then(() => {
      isPlaying = true;
      musicBtn.classList.add("playing");
      if (wave) wave.style.opacity = "1";
    }).catch(() => {});
  }

  function pauseAudio() {
    bgMusic.pause();
    isPlaying = false;
    musicBtn.classList.remove("playing");
    if (wave) wave.style.opacity = "0";
  }

  musicBtn.addEventListener("click", () => {
    if (isPlaying) pauseAudio();
    else playAudio();
  });

  // Auto-play on first interaction
  const triggerAutoPlay = () => {
    if (!isPlaying) playAudio();
    document.removeEventListener("click", triggerAutoPlay);
    document.removeEventListener("scroll", triggerAutoPlay);
    document.removeEventListener("touchstart", triggerAutoPlay);
  };

  document.addEventListener("click", triggerAutoPlay);
  document.addEventListener("scroll", triggerAutoPlay);
  document.addEventListener("touchstart", triggerAutoPlay);
}

// ==========================================================================
// RSVP FORM
// ==========================================================================
function initRSVPForm() {
  const rsvpForm = document.getElementById("rsvpForm");
  const guestCountRow = document.getElementById("guestCountRow");
  const whatsappBtn = document.getElementById("whatsappBtn");
  const successMsg = document.getElementById("rsvpSuccessMsg");
  if (!rsvpForm) return;

  // Toggle guest count based on attendance
  rsvpForm.querySelectorAll('input[name="attending"]').forEach((radio) => {
    radio.addEventListener("change", (e) => {
      guestCountRow.style.display = e.target.value === "no" ? "none" : "block";
    });
  });

  // Save to localStorage
  rsvpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = getFormData();
    if (!formData.name) return;

    const rsvpList = JSON.parse(localStorage.getItem("wedding_rsvps")) || [];
    rsvpList.push(formData);
    localStorage.setItem("wedding_rsvps", JSON.stringify(rsvpList));

    successMsg.style.display = "block";
    rsvpForm.reset();
    guestCountRow.style.display = "block";

    setTimeout(() => { successMsg.style.display = "none"; }, 5000);
  });

  // WhatsApp confirmation
  whatsappBtn.addEventListener("click", () => {
    const formData = getFormData();
    if (!formData.name) {
      const alertMsg = currentLanguage === "en" ? "Please fill in your name first to confirm on WhatsApp." : "వాట్సాప్ ద్వారా తెలియజేయడానికి దయచేసి ముందుగా మీ పేరును నమోదు చేయండి.";
      alert(alertMsg);
      document.getElementById("guestName").focus();
      return;
    }

    let msg = "";
    if (currentLanguage === "en") {
      msg = `*Wedding RSVP Response* 💍\n\n`;
      msg += `*Name:* ${formData.name}\n`;
      if (formData.attending === "yes") {
        msg += `*Status:* Gracing the occasion with joy! 🎉\n`;
        msg += `*Guests:* ${formData.count} ${formData.count === "1" ? "person" : "people"}\n`;
      } else {
        msg += `*Status:* Regretfully Declining 🌸\n`;
      }
      if (formData.message.trim()) {
        msg += `*Blessings:* "${formData.message.trim()}"\n`;
      }
    } else {
      msg = `*వివాహ ఆహ్వానం - సమాధానం* 💍\n\n`;
      msg += `*పేరు:* ${formData.name}\n`;
      if (formData.attending === "yes") {
        msg += `*స్థితి:* వివాహానికి సంతోషంగా విచ్చేస్తున్నాము! 🎉\n`;
        msg += `*అతిథుల సంఖ్య:* ${formData.count} ${formData.count === "1" ? "వ్యక్తి" : "వ్యక్తులు"}\n`;
      } else {
        msg += `*స్థితి:* హాజరుకాలేకపోతున్నాము 🌸\n`;
      }
      if (formData.message.trim()) {
        msg += `*ఆశీస్సులు:* "${formData.message.trim()}"\n`;
      }
    }

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  });

  function getFormData() {
    const attending = rsvpForm.querySelector('input[name="attending"]:checked');
    return {
      name: document.getElementById("guestName")?.value || "",
      attending: attending?.value || "yes",
      count: attending?.value === "yes" ? (document.getElementById("guestCount")?.value || "1") : "0",
      message: document.getElementById("message")?.value || "",
      date: new Date().toISOString(),
    };
  }
}

// ==========================================================================
// SCROLL-TO-TOP BUTTON
// ==========================================================================
function initScrollTopButton() {
  const btn = document.getElementById("scrollTopBtn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ==========================================================================
// MULTI-LANGUAGE TRANSLATION LOGIC
// ==========================================================================
function initLanguage() {
  const langBtn = document.getElementById("langBtn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLanguage = currentLanguage === "en" ? "te" : "en";
      localStorage.setItem("wedding_lang", currentLanguage);
      updateLanguage(currentLanguage);
    });
  }
  updateLanguage(currentLanguage);
}

function updateLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key] !== undefined) {
      const translation = translations[lang][key];
      // If it contains tags, set innerHTML, otherwise textContent
      if (translation.includes("<") || el.getAttribute("data-translate-html") === "true") {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    }
  });

  // Update toggle button text/icon
  const langText = document.querySelector("#langBtn .lang-text");
  if (langText) {
    langText.textContent = lang === "en" ? "తెలుగు" : "English";
  }

  // Update placeholders
  const guestNameInput = document.getElementById("guestName");
  if (guestNameInput) {
    guestNameInput.placeholder = lang === "en" ? "e.g. Harish Kumar" : "ఉదా. హరీష్ కుమార్";
  }
  const messageTextarea = document.getElementById("message");
  if (messageTextarea) {
    messageTextarea.placeholder = lang === "en" ? "Send your prayers and blessings for Abhiram & Divyasri..." : "అభిరామ్ & దివ్యశ్రీలకు మీ శుభాకాంక్షలు మరియు ఆశీస్సులు పంపండి...";
  }

  // Handle body language class
  if (lang === "te") {
    document.body.classList.add("lang-te");
  } else {
    document.body.classList.remove("lang-te");
  }
}
