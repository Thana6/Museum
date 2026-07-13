/* =====================================================
   Batticaloa Museum — Shared Behaviors
   Mobile drawer, lightbox, toast, scroll-reveal, counters,
   gallery card rendering/filtering, navbar scroll state.
   ===================================================== */

/* ---------- Mobile drawer ---------- */
function toggleMobile() {
  const m = document.getElementById("mobileMenu");
  const o = document.getElementById("mobileOverlay");
  if (!m || !o) return;
  m.classList.toggle("open");
  o.classList.toggle("hidden");
}

/* ---------- Toast ---------- */
function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  document.getElementById("toastMsg").textContent = msg;
  toast.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

/* ---------- Lightbox ---------- */
function openLightbox(src) {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  document.getElementById("lightboxImg").src = src;
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.classList.remove("open");
  document.body.style.overflow = "";
}
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeLightbox();
    const m = document.getElementById("mobileMenu");
    if (m && m.classList.contains("open")) toggleMobile();
  }
});

/* ---------- Navbar on scroll ---------- */
function initNavbarScroll() {
  const nav = document.getElementById("navbar");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  });
}

/* ---------- Scroll reveal + counters ---------- */
function initScrollAnimations() {
  const targets = document.querySelectorAll(".scroll-anim");
  if (!targets.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        const counter = entry.target.querySelector("[data-count]");
        if (counter && !counter.dataset.animated) {
          counter.dataset.animated = "true";
          const target = parseInt(counter.dataset.count, 10);
          let current = 0;
          const step = Math.max(1, Math.ceil(target / 60));
          const timer = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            counter.textContent = current.toLocaleString() + (target >= 1000 ? "+" : "");
          }, 25);
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
  targets.forEach(el => observer.observe(el));
}

/* ---------- Active nav link ---------- */
function markActiveNav(page) {
  document.querySelectorAll("[data-nav]").forEach(a => {
    a.classList.toggle("active", a.getAttribute("data-nav") === page);
  });
}

/* ---------- Gallery card markup ---------- */
function galleryCardHTML(g, index) {
  const catLabel = g.cat === "culture" ? t("galleries.filter.culture") : g.cat === "heritage" ? t("galleries.filter.heritage") : t("galleries.filter.modern");
  return `
  <a href="gallery.html?id=${g.id}" class="gallery-card scroll-anim" data-cat="${g.cat}" style="transition-delay:${(index % 6) * 70}ms">
    <div class="gallery-card-media">
      <img src="${g.img}" alt="${gt(g,'title')}" loading="lazy">
    </div>
    <div class="gallery-card-overlay"></div>
    <div class="gallery-card-body">
      <div class="tag-row">
        <span class="tag-num">${String(g.id + 1).padStart(2,'0')}</span>
        <span class="tag-cat">${catLabel}</span>
      </div>
      <h3>${gt(g,'title')}</h3>
    </div>
  </a>`;
}

/* Renders a grid of gallery cards into a container. opts: {limit, filterable} */
function renderGalleryGrid(containerId, opts = {}) {
  const el = document.getElementById(containerId);
  if (!el || !window.GALLERIES) return;
  let list = window.GALLERIES.slice();
  if (opts.limit) list = list.slice(0, opts.limit);
  const activeFilter = window._galleryFilter || "all";
  el.innerHTML = list.map((g, i) => galleryCardHTML(g, i)).join("");
  if (opts.filterable) applyGalleryFilter(activeFilter);
  initScrollAnimations();
}

function applyGalleryFilter(cat) {
  window._galleryFilter = cat;
  document.querySelectorAll("[data-filter]").forEach(b => b.classList.toggle("active", b.getAttribute("data-filter") === cat));
  document.querySelectorAll(".gallery-card[data-cat]").forEach(card => {
    const show = cat === "all" || card.getAttribute("data-cat") === cat;
    card.style.display = show ? "" : "none";
  });
}

/* ---------- Bullet-list helper (splits "A • B • C" strings) ---------- */
function renderBulletList(containerId, translationKey, iconClass) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const items = t(translationKey).split("•").map(s => s.trim()).filter(Boolean);
  el.innerHTML = items.map((item, i) => `
    <div class="bullet-item scroll-anim" style="transition-delay:${(i % 8) * 60}ms">
      <span class="bullet-dot" aria-hidden="true"></span>
      <span>${item}</span>
    </div>`).join("");
  initScrollAnimations();
}

/* ---------- Gallery detail page renderer ---------- */
function getGalleryIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10);
  return Number.isNaN(id) ? 0 : id;
}

function renderGalleryDetail() {
  const id = getGalleryIdFromURL();
  const g = window.GALLERIES.find(x => x.id === id) || window.GALLERIES[0];
  const root = document.getElementById("galleryDetailRoot");
  if (!root) return;

  document.title = gt(g,'title') + " — Batticaloa Museum";

  const catLabel = g.cat === "culture" ? t("galleries.filter.culture") : g.cat === "heritage" ? t("galleries.filter.heritage") : t("galleries.filter.modern");
  const extraImgs = [1,2,3].map(n => `https://picsum.photos/seed/${g.slug}-${n}/700/500`);
  const prev = window.GALLERIES.find(x => x.id === id - 1);
  const next = window.GALLERIES.find(x => x.id === id + 1);

  root.innerHTML = `
    <div class="gallery-hero scroll-anim">
      <img src="${g.img}" alt="${gt(g,'title')}">
      <div class="gallery-hero-scrim"></div>
      <div class="gallery-hero-caption">
        <div class="tag-row">
          <span class="tag-num tag-num--lg">${String(g.id+1).padStart(2,'0')}</span>
          <span class="tag-cat">${catLabel}</span>
        </div>
        <h1>${gt(g,'title')}</h1>
      </div>
    </div>

    <div class="gallery-detail-grid">
      <div class="gallery-detail-main scroll-anim">
        <p class="lede">${gt(g,'desc')}</p>
        <div class="thumb-grid">
          ${extraImgs.map(src => `<div class="thumb" onclick="openLightbox('${src}')"><img src="${src}" loading="lazy"></div>`).join("")}
        </div>
      </div>
      <aside class="gallery-detail-side scroll-anim">
        <div class="side-card">
          <h3><span class="ripple-icon" aria-hidden="true"></span> ${t('gallery.items')}</h3>
          <div class="item-list">
            ${g.items.map(item => `<div class="item-row"><span class="item-marker">›</span><span>${item[currentLang] || item.en}</span></div>`).join("")}
          </div>
        </div>
      </aside>
    </div>

    <div class="gallery-pager scroll-anim">
      ${prev ? `<a href="gallery.html?id=${prev.id}" class="pager-link pager-prev"><span>←</span> ${gt(prev,'title')}</a>` : `<span></span>`}
      ${next ? `<a href="gallery.html?id=${next.id}" class="pager-link pager-next">${gt(next,'title')} <span>→</span></a>` : `<span></span>`}
    </div>
  `;
  initScrollAnimations();
}

/* ---------- Marquee duplication (for seamless loop) ---------- */
function initMarquee(containerId, translationKey) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const text = t(translationKey);
  el.innerHTML = `<span>${text}</span><span>${text}</span>`;
}

/* ---------- Events ---------- */
function renderEvents(containerId) {
  const el = document.getElementById(containerId);
  if (!el || !window.EVENTS) return;
  el.innerHTML = window.EVENTS.map((e, i) => `
    <div class="event-card scroll-anim" style="transition-delay:${i*70}ms">
      <div class="event-media">
        <img src="${e.img}" alt="${gt(e,'title')}" loading="lazy">
        <span class="event-date">${e.date[currentLang] || e.date.en}</span>
      </div>
      <div class="event-body">
        <h4>${gt(e,'title')}</h4>
        <p>${gt(e,'desc')}</p>
      </div>
    </div>`).join("");
  initScrollAnimations();
}

/* ---------- Testimonials ---------- */
function renderTestimonials(containerId) {
  const el = document.getElementById(containerId);
  if (!el || !window.TESTIMONIALS) return;
  el.innerHTML = window.TESTIMONIALS.map((tst, i) => `
    <div class="testimonial-card scroll-anim" style="transition-delay:${i*80}ms">
      <span class="quote-mark">"</span>
      <p class="quote">${tst.quote[currentLang] || tst.quote.en}</p>
      <div class="testimonial-meta">
        <span class="testimonial-avatar">${tst.name.slice(0,2).toUpperCase()}</span>
        <div>
          <div class="testimonial-name">${tst.name}</div>
          <div class="testimonial-place">${tst.place[currentLang] || tst.place.en}</div>
        </div>
      </div>
    </div>`).join("");
  initScrollAnimations();
}

/* ---------- Team ---------- */
function renderTeam(containerId) {
  const el = document.getElementById(containerId);
  if (!el || !window.TEAM) return;
  el.innerHTML = window.TEAM.map((m, i) => `
    <div class="team-card scroll-anim" style="transition-delay:${i*60}ms">
      <div class="team-avatar">${m.initials}</div>
      <div class="t-name">${m.name}</div>
      <div class="t-role">${m.role[currentLang] || m.role.en}</div>
    </div>`).join("");
  initScrollAnimations();
}

/* ---------- Milestones ---------- */
function renderMilestones(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const ms = [1,2,3,4].map(n => ({ year:t(`m${n}.date`), desc:t(`m${n}.desc`) }));
  el.innerHTML = ms.map(m => `
    <div class="milestone-row scroll-anim">
      <div class="milestone-year">${m.year}</div>
      <div class="milestone-desc">${m.desc}</div>
    </div>`).join("");
  initScrollAnimations();
}

/* ---------- Media gallery (photos + videos) ---------- */
function renderMediaPhotos(containerId) {
  const el = document.getElementById(containerId);
  if (!el || !window.MEDIA_PHOTOS) return;
  el.innerHTML = window.MEDIA_PHOTOS.map(p => `
    <div class="photo-item" onclick="openLightbox('${p.src}')"><img src="${p.src}" loading="lazy" alt="Museum photo"></div>
  `).join("");
}

function renderMediaVideos(containerId) {
  const el = document.getElementById(containerId);
  if (!el || !window.MEDIA_VIDEOS) return;
  el.innerHTML = window.MEDIA_VIDEOS.map(v => `
    <div class="video-card" onclick="openVideoModal('${v.seed}','${gt(v,'title').replace(/'/g,"&#39;")}')">
      <img src="https://picsum.photos/seed/${v.seed}/700/440" loading="lazy" alt="${gt(v,'title')}">
      <div class="video-scrim"></div>
      <div class="video-play"><svg width="20" height="20" viewBox="0 0 24 24" fill="#1a1206"><path d="M8 5v14l11-7z"/></svg></div>
      <span class="video-duration">${v.duration}</span>
      <span class="video-title">${gt(v,'title')}</span>
    </div>`).join("");
}

function openVideoModal(seed, title) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  if (!lb || !img) return;
  const wrap = document.createElement("div");
  wrap.className = "video-modal-body";
  wrap.innerHTML = `<video controls autoplay poster="https://picsum.photos/seed/${seed}/900/560">
      <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">
    </video>
    <p style="color:var(--muted);font-size:0.82rem;margin-top:12px;">${title} — ${t('media.video.note')}</p>`;
  img.replaceWith(wrap);
  wrap.id = "lightboxImg";
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}
const _origCloseLightbox = closeLightbox;
closeLightbox = function() {
  const wrap = document.getElementById("lightboxImg");
  if (wrap && wrap.tagName === "DIV") {
    const img = document.createElement("img");
    img.id = "lightboxImg";
    img.setAttribute("onclick", "event.stopPropagation()");
    wrap.querySelectorAll("video source").forEach(s => { s.src = ""; });
    wrap.replaceWith(img);
  }
  _origCloseLightbox();
};

/* ---------- Contact form (front-end demo, no backend wired) ---------- */
function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.target;
  form.reset();
  showToast(t("contact.form.sent"));
  return false;
}

/* ---------- Museum Assistant chatbot ---------- */
function toggleChat() {
  const panel = document.getElementById("chatPanel");
  if (!panel) return;
  panel.classList.toggle("open");
  if (panel.classList.contains("open")) {
    const input = document.getElementById("chatInput");
    if (input) setTimeout(() => input.focus(), 150);
  }
}

function chatAppendMessage(text, who) {
  const body = document.getElementById("chatBody");
  if (!body) return;
  const div = document.createElement("div");
  div.className = "chat-msg " + who;
  div.textContent = text;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}

function chatAnswer(query) {
  const q = query.toLowerCase();
  const qa = window.CHATBOT_QA || [];
  const hit = qa.find(item => item.keys.some(k => q.includes(k)));
  const answer = hit ? (hit.a[currentLang] || hit.a.en) : (window.CHATBOT_FALLBACK[currentLang] || window.CHATBOT_FALLBACK.en);
  chatAppendMessage(answer, "bot");
}

function chatSend(presetText) {
  const input = document.getElementById("chatInput");
  const text = presetText || (input ? input.value.trim() : "");
  if (!text) return;
  chatAppendMessage(text, "user");
  if (input) input.value = "";
  setTimeout(() => chatAnswer(text), 350);
}

function chatHandleKey(e) {
  if (e.key === "Enter") chatSend();
}

function initChatWidget() {
  const body = document.getElementById("chatBody");
  if (!body || body.dataset.greeted) return;
  body.dataset.greeted = "true";
  chatAppendMessage(t("chat.greeting"), "bot");
}

/* ---------- Init on load ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initScrollAnimations();
  initChatWidget();
});

