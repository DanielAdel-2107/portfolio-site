const icon = (path, viewBox = '0 0 24 24') => `<svg viewBox="${viewBox}" aria-hidden="true">${path}</svg>`;
const icons = {
  arrow: icon('<path d="M5 12h13M13 6l6 6-6 6"/>'),
  download: icon('<path d="M12 3v12m0 0 5-5m-5 5-5-5M4 20h16"/>'),
  sun: icon('<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>'),
  moon: icon('<path d="M20.5 14.4A8.5 8.5 0 0 1 9.6 3.5 8.5 8.5 0 1 0 20.5 14.4Z"/>'),
  menu: icon('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  sparkle: icon('<path d="m12 3 1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6L12 3Z"/>'),
  map: icon('<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15m6-12v15"/>'),
  lock: icon('<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>'),
  bolt: icon('<path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"/>'),
  compass: icon('<circle cx="12" cy="12" r="9"/><path d="m15 9-2 5-5 2 2-5 5-2Z"/>'),
};

const features = [
  ['01', 'Book Car Wash', 'Choose your finish, pick a time, and leave the rest to our crew.', icons.sparkle],
  ['02', 'Track Booking', 'A clear live status keeps you in the loop from bay to driveway.', icons.map],
  ['03', 'Multiple Services', 'Wash, detail, protection, and interior care in one elegant place.', icons.sparkle],
  ['04', 'Secure Login', 'Your profile, vehicles, and booking history stay private and protected.', icons.lock],
  ['05', 'Fast Performance', 'A quick, focused experience built for getting things done.', icons.bolt],
  ['06', 'Easy Navigation', 'Find the right care in a few considered taps, every time.', icons.compass],
];

const screenNames = ['Home overview', 'Choose a service', 'Booking progress', 'Your profile'];
const mockup = (index) => `
  <div class="shot-frame">
    <div class="shot-screen">
      <div class="mock-nav"><span>ELITE</span><span>09:41</span></div>
      <div class="mock-heading">${screenNames[index]}</div>
      <div class="mock-block"></div>
      <div class="mock-lines"><div class="mock-line"></div><div class="mock-line short"></div></div>
      <div class="mock-pills"><div class="mock-pill"></div><div class="mock-pill"></div><div class="mock-pill"></div></div>
    </div>
  </div>`;

const app = document.querySelector('#app');
app.innerHTML = `
  <div class="loader" data-loader aria-label="Loading Elite Car Care">
    <div class="loader-inner"><img class="loader-mark" src="./assets/logo.png" alt="" /><div class="loader-rule"></div><div class="loader-label">Preparing your finish</div></div>
  </div>
  <header class="site-header" data-header>
    <nav class="nav" aria-label="Primary navigation">
      <a href="#top" class="brand" data-testid="brand-link"><img src="./assets/logo.png" alt="Elite Car Care logo" /><span class="brand-copy"><strong>ELITE CAR CARE</strong><span>THE APP FOR A BETTER FINISH</span></span></a>
      <div class="nav-links" data-nav-links>
        <a href="#features">The experience</a><a href="#screens">App preview</a><a href="#why">Why Elite</a><a href="#faq">FAQ</a>
      </div>
      <div class="nav-actions">
        <button class="icon-button" type="button" data-theme-toggle data-testid="theme-toggle" aria-label="Switch to light mode">${icons.moon}</button>
        <button class="icon-button menu-toggle" type="button" data-menu-toggle aria-label="Open navigation menu" aria-expanded="false">${icons.menu}</button>
        <a class="nav-cta" href="#download" data-testid="nav-download">Get the app</a>
      </div>
    </nav>
  </header>
  <main id="main-content">
    <section class="hero" id="top">
      <div class="hero-grid">
        <div class="hero-copy reveal">
          <div class="hero-lockup">
            <img src="./assets/logo.png" alt="Elite Car Care logo" />
            <div><span>THE ELITE CAR CARE APP</span><strong>Book. Track. Shine.</strong></div>
          </div>
          <div class="eyebrow">Premium care / in your pocket</div>
          <h1>Every drive deserves an <em>elite</em> finish.</h1>
          <p class="hero-lede">Elite Car Care makes premium washes and detailing effortless. Choose your service, find your time, and keep your car looking the part.</p>
        <div class="hero-actions">
            <a class="button-primary device-download" href="./assets/app-release.apk" download data-testid="hero-download">${icons.download} Download for Android</a>
            <a class="button-ghost" href="#features" data-testid="hero-features">View Features ${icons.arrow}</a>
          </div>
          <div class="hero-proof">
            <div class="proof-item"><strong>04</strong><span>ways to care</span></div><div class="proof-item"><strong>24/7</strong><span>booking access</span></div><div class="proof-item"><strong>01</strong><span>beautiful app</span></div>
          </div>
        </div>
        <div class="hero-visual reveal reveal-delay-2" aria-label="App screenshot placeholder phone mockup">
          <div class="orbit" aria-hidden="true"></div><div class="float-label one">LIVE BOOKING STATUS</div><div class="float-label two">DROP SCREENSHOT HERE</div>
          <div class="phone" data-testid="hero-phone"><div class="phone-screen"><div class="screen-top">GOOD MORNING, DRIVER</div><div class="screen-title">Your car,<br/>well cared for.</div><div class="screen-car"></div><div class="screen-section"><span>QUICK ACCESS</span><span>VIEW ALL</span></div><div class="screen-grid"><div class="screen-tile">Book now<small>Find your finish</small></div><div class="screen-tile">Track<small>Booking #EL-041</small></div></div></div></div>
        </div>
      </div>
    </section>
    <section class="section features" id="features">
      <div class="section-inner">
        <div class="features-header reveal"><div><div class="section-kicker">01 / A considered experience</div><h2 class="section-title">Less waiting.<br/><em>More looking good.</em></h2></div><p class="section-intro">Elite Car Care brings the whole experience into one calm, capable companion. No guesswork. No chasing updates.</p></div>
        <div class="feature-grid">${features.map(([num, title, copy, featureIcon], i) => `<article class="feature-card reveal reveal-delay-${(i % 3) + 1}" data-testid="feature-${title.toLowerCase().replaceAll(' ', '-')}"><span class="feature-num">${num} / 06</span><div class="feature-icon">${featureIcon}</div><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div>
      </div>
    </section>
    <section class="section showcase" id="screens">
      <div class="section-inner showcase-layout">
        <div class="showcase-copy reveal"><div class="section-kicker">02 / Inside the app</div><h2 class="section-title">A clean view of <em>car care.</em></h2><p class="section-intro">These placeholder frames show where the app comes to life. Replace them with <code>screenshot1.png</code>, <code>screenshot2.png</code>, and more in <code>public/assets/</code> when the real captures are ready.</p><a href="#download" class="button-ghost" style="margin-top:30px">Ready when you are ${icons.arrow}</a></div>
        <div class="carousel reveal reveal-delay-2" aria-label="App screenshot carousel"><div class="carousel-track" data-carousel-track>${[0,1,2,3].map((index) => `<button class="shot-card" type="button" data-shot="${index}" data-testid="screenshot-card-${index}" aria-label="View ${screenNames[index]} screenshot">${mockup(index)}<span class="shot-caption"><span>${screenNames[index]}</span><span>VIEW</span></span></button>`).join('')}</div><div class="carousel-controls"><button type="button" data-carousel-prev data-testid="screenshot-previous" aria-label="Previous screenshot">←</button><button type="button" data-carousel-next data-testid="screenshot-next" aria-label="Next screenshot">→</button></div></div>
      </div>
    </section>
    <section class="section benefits" id="why">
      <div class="section-inner"><div class="section-kicker reveal">03 / Why choose Elite Car</div><h2 class="section-title reveal">The little details<br/>make the <em>difference.</em></h2><p class="section-intro reveal">Good service is more than a shine. It is knowing where you stand, trusting the process, and driving away feeling looked after.</p>
        <div class="timeline">${[['01','Know the plan','Choose exactly what your car needs, without the noise.'],['02','Keep your time','Book ahead and get back to your day while we work.'],['03','See the progress','Stay informed from confirmation to final check.'],['04','Love the finish','A cleaner car and a smoother experience, every time.']].map(([num,title,copy]) => `<article class="timeline-item reveal"><span class="timeline-index">${num}</span><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div>
      </div>
    </section>
    <section class="section download" id="download">
       <div class="section-inner"><div class="download-card reveal"><div><div class="section-kicker">04 / Take Elite with you</div><h2 class="section-title">Your next clean<br/>starts <em>here.</em></h2><p class="section-intro">Download the Android companion and make premium car care part of your routine.</p><a href="./assets/app-release.apk" class="button-primary download-link device-download" download data-testid="download-apk">${icons.download} Download Android APK</a><p class="download-note">Future release notice: drop the signed APK into <code>public/assets/app-release.apk</code> to activate this download link.</p><p class="device-message" data-device-message>Checking your device...</p></div><div class="download-meta"><div class="meta-row"><span>Latest release</span><strong>v1.0.0 / Preview</strong></div><div class="meta-row"><span>File size</span><strong>Coming soon</strong></div><div class="meta-row"><span>Compatibility</span><strong>Android 8.0 and newer</strong></div><div class="meta-row"><span>Availability</span><strong>Free to download</strong></div></div></div></div>
    </section>
   <section class="section faq" id="faq"><div class="section-inner faq-layout"><div class="reveal"><div class="section-kicker">05 / Good to know</div><h2 class="section-title">Questions,<br/><em>answered.</em></h2><p class="section-intro">A few useful notes before your first booking.</p></div><div class="faq-list reveal reveal-delay-2">${[['How do I install the Elite Car Care app?','Download the APK from this page, open it on your Android device, and follow the installation prompts. You may need to allow installs from your browser in your device settings.'],['Is the app free to use?','Yes. The Elite Car Care app is free to download and use. You only pay for the car care service you choose.'],['Will Elite Car Care be available on Google Play?','A Google Play release is planned for a future update. The Android APK on this page is the current preview route.'],['What does “Unknown Sources” mean?','Android protects your device by default. If prompted, allow your browser or file manager to install unknown apps, then return to the installer. Turn the permission off again after installation if you prefer.']].map(([question,answer],i) => `<div class="faq-item ${i===0?'open':''}"><button class="faq-question" data-testid="faq-question-${i}" type="button" aria-expanded="${i===0?'true':'false'}"><span>${question}</span><span>+</span></button><div class="faq-answer">${answer}</div></div>`).join('')}</div></div></section>
  </main>
  <footer class="footer"><div class="footer-main"><div class="footer-brand"><img src="./assets/logo.png" alt="Elite Car Care" /><div><strong>ELITE CAR CARE</strong><p>Premium detailing, made simple.</p></div></div><div><div class="section-kicker">Stay in the loop</div><div class="footer-social"><a class="social-placeholder" href="#top" aria-label="Instagram placeholder">IG</a><a class="social-placeholder" href="#top" aria-label="Facebook placeholder">FB</a><a class="social-placeholder" href="#top" aria-label="TikTok placeholder">TK</a></div></div></div><div class="footer-bottom"><span>© 2025 Elite Car Care</span><span>Built for better drives / Android preview</span></div></footer>
  <div class="modal" data-modal role="dialog" aria-modal="true" aria-label="Expanded app screenshot"><div class="modal-inner"><button class="modal-close" data-modal-close type="button" aria-label="Close screenshot">×</button><div data-modal-content></div><div class="modal-label">Placeholder — replace with a future app screenshot</div></div></div>
`;

const qs = (selector, parent = document) => parent.querySelector(selector);
const qsa = (selector, parent = document) => [...parent.querySelectorAll(selector)];
window.addEventListener('load', () => setTimeout(() => qs('[data-loader]').classList.add('is-done'), 280));

const header = qs('[data-header]');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20), { passive: true });
const navLinks = qs('[data-nav-links]');
const sectionLinks = qsa('.nav-links a');
qs('[data-menu-toggle]').addEventListener('click', (event) => {
  const isOpen = navLinks.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', String(isOpen));
});
sectionLinks.forEach((link) => link.addEventListener('click', () => navLinks.classList.remove('open')));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    sectionLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-30% 0px -55% 0px', threshold: 0 });
qsa('main section[id]').forEach((section) => sectionObserver.observe(section));

const themeToggle = qs('[data-theme-toggle]');
const savedTheme = localStorage.getItem('elite-theme');
if (savedTheme === 'light') document.body.classList.add('light');
const refreshThemeIcon = () => { themeToggle.innerHTML = document.body.classList.contains('light') ? icons.moon : icons.sun; themeToggle.setAttribute('aria-label', document.body.classList.contains('light') ? 'Switch to dark mode' : 'Switch to light mode'); };
refreshThemeIcon();
themeToggle.addEventListener('click', () => { document.body.classList.toggle('light'); localStorage.setItem('elite-theme', document.body.classList.contains('light') ? 'light' : 'dark'); refreshThemeIcon(); });

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .14 });
qsa('.reveal').forEach((element) => observer.observe(element));

const track = qs('[data-carousel-track]');
qs('[data-carousel-prev]').addEventListener('click', () => track.scrollBy({ left: -225, behavior: 'smooth' }));
qs('[data-carousel-next]').addEventListener('click', () => track.scrollBy({ left: 225, behavior: 'smooth' }));
const modal = qs('[data-modal]');
const modalContent = qs('[data-modal-content]');
qsa('[data-shot]').forEach((shot) => shot.addEventListener('click', () => {
  modalContent.innerHTML = `<div class="modal-phone">${mockup(Number(shot.dataset.shot))}</div>`;
  modal.classList.add('open'); document.body.style.overflow = 'hidden'; qs('[data-modal-close]').focus();
}));
const closeModal = () => { modal.classList.remove('open'); document.body.style.overflow = ''; };
qs('[data-modal-close]').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

qsa('.faq-question').forEach((button) => button.addEventListener('click', () => {
  const item = button.parentElement;
  const open = item.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
}));

const deviceMessage = qs('[data-device-message]');
const userAgent = navigator.userAgent.toLowerCase();
const isAndroid = userAgent.includes('android');
const isIos = userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod');
document.body.classList.toggle('ios-device', isIos);
deviceMessage.textContent = isAndroid
  ? 'Android detected / your download is ready.'
  : isIos
    ? 'iOS version coming soon.'
    : 'Desktop detected / scan the QR code or download directly for your Android device.';