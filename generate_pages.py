#!/usr/bin/env python3
import importlib.util, os
spec = importlib.util.spec_from_file_location("build", os.path.join(os.path.dirname(__file__), "build.py"))
build = importlib.util.module_from_spec(spec)
spec.loader.exec_module(build)
page = build.page

RIPPLE_FIELD = """<div class="ripple-field">
        <span class="ripple-ring" style="width:120px;height:120px;left:12%;top:30%;animation-delay:0s;"></span>
        <span class="ripple-ring" style="width:180px;height:180px;left:70%;top:15%;animation-delay:1.5s;"></span>
        <span class="ripple-ring" style="width:90px;height:90px;left:55%;top:60%;animation-delay:3s;"></span>
        <span class="ripple-ring" style="width:220px;height:220px;left:20%;top:65%;animation-delay:4.5s;"></span>
      </div>"""

# ============================================================= HOME
home_body = f"""
<section class="hero">
  <div class="hero-bg" style="background-image:url('https://picsum.photos/seed/batticaloa-lagoon-museum/1800/1100');"></div>
  <div class="hero-scrim"></div>
  {RIPPLE_FIELD}
  <div class="hero-inner">
    <div class="hero-content">
      <div class="eyebrow" data-t="hero.tag">Welcome to</div>
      <h1 class="hero-title" data-t="hero.title">Batticaloa Museum</h1>
      <p class="hero-sub" data-t="hero.sub">Where the singing fish of the lagoon keep time with centuries of memory.</p>
      <div class="hero-actions">
        <a href="galleries.html" class="btn btn-gold" data-t="hero.btn1">Explore Galleries</a>
        <a href="visit.html" class="btn btn-outline" data-t="hero.btn2">Plan Your Visit</a>
      </div>
    </div>
  </div>
  <div class="hero-scroll-cue"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m6 9 6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
</section>

<section class="stats">
  <div class="stats-grid">
    <div class="stat scroll-anim"><div class="stat-num" data-count="5000">0</div><div class="stat-label" data-t="stats.artifacts">Artifacts</div></div>
    <div class="stat scroll-anim"><div class="stat-num" data-count="11">0</div><div class="stat-label" data-t="stats.galleries">Galleries</div></div>
    <div class="stat scroll-anim"><div class="stat-num" data-count="4">0</div><div class="stat-label" data-t="stats.communities">Communities</div></div>
    <div class="stat scroll-anim"><div class="stat-num" data-count="500">0</div><div class="stat-label" data-t="stats.years">Years of Heritage</div></div>
  </div>
</section>

<section class="marquee"><div class="marquee-track" id="marqueeTrack"></div></section>

<section class="block">
  <div class="wrap">
    <div class="section-head scroll-anim" style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:20px;">
      <div>
        <div class="eyebrow">Collection</div>
        <h2 class="h-section" style="margin-bottom:0;" data-t="home.featured">Featured Galleries</h2>
      </div>
      <a href="galleries.html" class="btn btn-outline" data-t="home.viewall">View All Galleries</a>
    </div>
    <div class="gallery-grid" id="featuredGrid"></div>
  </div>
</section>

<section class="block block-border-t">
  <div class="wrap" style="display:grid;grid-template-columns:1fr;gap:56px;align-items:center;">
    <div class="scroll-anim">
      <div class="eyebrow">About</div>
      <h2 class="h-section" data-t="home.about.title">A Living Chronicle of the East</h2>
      <p class="section-lead" style="margin-bottom:28px;max-width:none;" data-t="home.about.p">Batticaloa Museum stands where the lagoon meets the town.</p>
      <a href="about.html" class="btn btn-outline" data-t="home.about.btn">Learn More About Us</a>
    </div>
    <div class="collage scroll-anim">
      <div class="collage-col">
        <img src="https://picsum.photos/seed/batti-temple-art/420/520" onclick="openLightbox(this.src)" loading="lazy">
        <img src="https://picsum.photos/seed/batti-fishing-net/420/300" onclick="openLightbox(this.src)" loading="lazy">
      </div>
      <div class="collage-col">
        <img src="https://picsum.photos/seed/batti-palm-leaf/420/300" onclick="openLightbox(this.src)" loading="lazy">
        <img src="https://picsum.photos/seed/batti-coins-old/420/520" onclick="openLightbox(this.src)" loading="lazy">
      </div>
    </div>
  </div>
</section>

<div class="kolam-divider"></div>

<section class="block block-alt">
  <div class="wrap">
    <div class="section-head text-center scroll-anim">
      <div class="eyebrow" style="justify-content:center;">Experience</div>
      <h2 class="h-section" data-t="home.experience">The Museum Experience</h2>
    </div>
    <div style="display:grid;grid-template-columns:1fr;gap:24px;max-width:920px;margin:0 auto;" class="md-grid-2">
      <div class="feature-card scroll-anim">
        <span class="ripple-icon"></span>
        <p style="margin-top:18px;color:var(--text-dim);" data-t="home.exp.p1">Walk through galleries that bring history to life.</p>
      </div>
      <div class="feature-card scroll-anim">
        <span class="ripple-icon"></span>
        <p style="margin-top:18px;color:var(--text-dim);" data-t="home.exp.p2">From ancient palm leaf manuscripts to colonial-era photographs.</p>
      </div>
    </div>
  </div>
</section>

<section class="block block-border-t block-alt">
  <div class="wrap">
    <div class="section-head text-center scroll-anim">
      <div class="eyebrow" style="justify-content:center;">Calendar</div>
      <h2 class="h-section" data-t="home.events.title">Upcoming Cultural Events</h2>
      <p class="section-lead mx-auto text-center" data-t="home.events.sub">A calendar shaped by four communities.</p>
    </div>
    <div class="event-grid" id="eventsGrid"></div>
  </div>
</section>

<section class="block">
  <div class="wrap">
    <div class="section-head text-center scroll-anim">
      <div class="eyebrow" style="justify-content:center;">Voices</div>
      <h2 class="h-section" data-t="home.testimonials.title">Visitor Voices</h2>
    </div>
    <div class="testimonial-grid" id="testimonialsGrid"></div>
  </div>
</section>

<section class="cta-band block-border-t">
  <div class="wrap">
    <h2 class="scroll-anim" data-t="home.cta.title">Begin Your Journey Through Time</h2>
    <p class="scroll-anim" data-t="home.cta.p">Explore 11 galleries spanning centuries of Eastern Sri Lankan heritage.</p>
    <div class="cta-actions scroll-anim">
      <a href="visit.html" class="btn btn-gold" data-t="home.cta.btn1">Plan Your Visit</a>
      <a href="digital.html" class="btn btn-outline" data-t="home.cta.btn2">Virtual Tour</a>
    </div>
  </div>
</section>
"""
home_script = """
function renderHomeDynamic(){
  renderGalleryGrid('featuredGrid', {limit:6});
  initMarquee('marqueeTrack','home.marquee');
  renderEvents('eventsGrid');
  renderTestimonials('testimonialsGrid');
}
renderHomeDynamic();
window.onLangChange = renderHomeDynamic;
"""
page("index.html", "Batticaloa Museum — Confluence of the East",
     "A trilingual museum experience celebrating the Tamil, Muslim, Burgher, and Sinhala heritage of Batticaloa, Sri Lanka.",
     "home", home_body, home_script)

# ============================================================= GALLERIES
galleries_body = """
<section class="block" style="padding-top:150px;">
  <div class="wrap">
    <div class="section-head text-center scroll-anim">
      <div class="eyebrow" style="justify-content:center;">Collection</div>
      <h1 class="h-section" data-t="galleries.title">Our Galleries</h1>
      <p class="section-lead mx-auto text-center" data-t="galleries.sub">Eleven immersive galleries.</p>
    </div>
    <div class="filter-row scroll-anim">
      <button class="filter-btn active" data-filter="all" onclick="applyGalleryFilter('all')" data-t="galleries.filter.all">All</button>
      <button class="filter-btn" data-filter="culture" onclick="applyGalleryFilter('culture')" data-t="galleries.filter.culture">Culture</button>
      <button class="filter-btn" data-filter="heritage" onclick="applyGalleryFilter('heritage')" data-t="galleries.filter.heritage">Heritage</button>
      <button class="filter-btn" data-filter="modern" onclick="applyGalleryFilter('modern')" data-t="galleries.filter.modern">Modern</button>
    </div>
    <div class="gallery-grid" id="galleryGrid"></div>
  </div>
</section>
"""
galleries_script = """
function renderGalleriesDynamic(){ renderGalleryGrid('galleryGrid', {filterable:true}); }
renderGalleriesDynamic();
window.onLangChange = renderGalleriesDynamic;
"""
page("galleries.html", "Galleries — Batticaloa Museum",
     "Browse all eleven permanent galleries of the Batticaloa Museum.",
     "galleries", galleries_body, galleries_script)

# ============================================================= GALLERY DETAIL
gallery_body = """
<section class="block" style="padding-top:150px;">
  <div class="wrap">
    <a href="galleries.html" class="pager-link scroll-anim" style="margin-bottom:32px;display:inline-flex;">
      <span>←</span> <span data-t="back">Back</span>
    </a>
    <div id="galleryDetailRoot"></div>
  </div>
</section>
"""
gallery_script = """
renderGalleryDetail();
window.onLangChange = renderGalleryDetail;
"""
page("gallery.html", "Gallery — Batticaloa Museum",
     "Explore a permanent gallery of the Batticaloa Museum in detail.",
     "galleries", gallery_body, gallery_script)

# ============================================================= VISIT
visit_body = """
<section class="block" style="padding-top:150px;">
  <div class="wrap">
    <div class="section-head text-center scroll-anim">
      <div class="eyebrow" style="justify-content:center;">Information</div>
      <h1 class="h-section" data-t="visit.title">Plan Your Visit</h1>
      <p class="section-lead mx-auto text-center" data-t="visit.sub">Everything you need to know.</p>
    </div>

    <div style="display:grid;grid-template-columns:1fr;gap:24px;margin-bottom:64px;" class="md-grid-2">
      <div class="info-card scroll-anim">
        <span class="ripple-icon"></span>
        <h3 style="margin:18px 0 20px;" data-t="visit.hours">Opening Hours</h3>
        <div class="info-row"><span class="label" data-t="visit.hours.t">Tuesday — Sunday</span><span class="value" data-t="visit.hours.v">9AM–5PM</span></div>
        <p style="margin-top:16px;color:var(--terracotta-light);font-size:0.88rem;" data-t="visit.closed">Closed Mondays</p>
      </div>
      <div class="info-card scroll-anim">
        <span class="ripple-icon"></span>
        <h3 style="margin:18px 0 20px;" data-t="visit.tickets">Admission</h3>
        <div class="info-row"><span class="label" data-t="visit.tickets.local">Local Visitors</span><span class="value gold" data-t="visit.tickets.local.p">Free</span></div>
        <div class="info-row"><span class="label" data-t="visit.tickets.foreign">Foreign Visitors</span><span class="value gold" data-t="visit.tickets.foreign.p">$5</span></div>
        <div class="info-row"><span class="label" data-t="visit.tickets.student">Students</span><span class="value gold" data-t="visit.tickets.student.p">Free</span></div>
        <div class="info-row"><span class="label" data-t="visit.tickets.group">Group Tours</span><span class="value gold" data-t="visit.tickets.group.p">$3</span></div>
      </div>
    </div>

    <div class="scroll-anim" style="margin-bottom:64px;">
      <h3 style="margin-bottom:20px;display:flex;align-items:center;gap:12px;"><span class="ripple-icon"></span> <span data-t="visit.map">Location Map</span></h3>
      <div class="map-frame">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d81.67!3d7.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBatticaloa!5e0!3m2!1sen!2slk!4v1700000000000" loading="lazy"></iframe>
      </div>
    </div>

    <div class="info-card scroll-anim" style="margin-bottom:64px;">
      <span class="ripple-icon"></span>
      <h3 style="margin:18px 0 14px;" data-t="visit.getting">Getting Here</h3>
      <p style="color:var(--text-dim);" data-t="visit.getting.p">The museum is located on Bar Road.</p>
    </div>

    <div style="margin-bottom:64px;">
      <h3 class="scroll-anim" style="margin-bottom:24px;display:flex;align-items:center;gap:12px;"><span class="ripple-icon"></span> <span data-t="visit.facilities">Museum Facilities</span></h3>
      <div class="bullet-grid" id="facilitiesGrid"></div>
    </div>

    <div class="info-card scroll-anim" style="border-color:var(--border-strong);background:linear-gradient(135deg, rgba(201,164,76,0.07), var(--card));">
      <span class="ripple-icon"></span>
      <h3 style="margin:18px 0 16px;" data-t="visit.tips">Visitor Tips</h3>
      <div class="bullet-list-inline" id="tipsList"></div>
    </div>
  </div>
</section>
"""
visit_script = """
function renderVisitDynamic(){
  renderBulletList('facilitiesGrid','visit.facilities.items');
  renderBulletList('tipsList','visit.tips.items');
}
renderVisitDynamic();
window.onLangChange = renderVisitDynamic;
"""
page("visit.html", "Visit — Batticaloa Museum",
     "Opening hours, admission, directions, and facilities at the Batticaloa Museum.",
     "visit", visit_body, visit_script)

# ============================================================= DIGITAL
digi_items = [
    ("d.tour.title","d.tour.p","3d-museum-tour"),
    ("d.ar.title","d.ar.p","ar-museum-exp"),
    ("d.touch.title","d.touch.p","touch-screen-museum"),
    ("d.ai.title","d.ai.p","ai-guide-culture"),
    ("d.audio.title","d.audio.p","audio-guide-lang"),
    ("d.lib.title","d.lib.p","digital-library-arc"),
]
digi_rows = ""
for i,(tk,dk,seed) in enumerate(digi_items):
    rev = " reverse" if i % 2 else ""
    digi_rows += f"""
    <div class="digi-row{rev} scroll-anim">
      <div class="digi-media"><img src="https://picsum.photos/seed/{seed}/700/500" onclick="openLightbox(this.src)" loading="lazy"></div>
      <div class="digi-copy">
        <div class="digi-icon"><span class="ripple-icon"></span></div>
        <h3 data-t="{tk}"></h3>
        <p data-t="{dk}"></p>
      </div>
    </div>"""

digital_body = f"""
<section class="block" style="padding-top:150px;">
  <div class="wrap">
    <div class="section-head text-center scroll-anim">
      <div class="eyebrow" style="justify-content:center;">Technology</div>
      <h1 class="h-section" data-t="digital.title">Digital Museum Experience</h1>
      <p class="section-lead mx-auto text-center" data-t="digital.sub">Explore Batticaloa's heritage through technology.</p>
    </div>
    {digi_rows}
  </div>
</section>
"""
page("digital.html", "Digital Experience — Batticaloa Museum",
     "3D tours, augmented reality, AI guides, and digital archives at the Batticaloa Museum.",
     "digital", digital_body)

# ============================================================= ABOUT
about_body = """
<section class="block" style="padding-top:150px;">
  <div class="wrap">
    <div class="section-head text-center scroll-anim">
      <div class="eyebrow" style="justify-content:center;">About</div>
      <h1 class="h-section" data-t="about.title">About the Museum</h1>
      <p class="section-lead mx-auto text-center" data-t="about.sub">Preserving the past, inspiring the future.</p>
    </div>

    <div class="scroll-anim" style="max-width:820px;margin:0 auto 72px;">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;">
        <span class="ripple-icon"></span>
        <h2 style="font-size:1.5rem;" data-t="about.exec.title">Executive Summary</h2>
      </div>
      <p style="font-size:1.08rem;color:var(--text-dim);line-height:1.8;" data-t="about.exec.p">Summary.</p>
    </div>

    <div class="kolam-divider" style="max-width:820px;margin:0 auto 72px;"></div>

    <div class="scroll-anim" style="max-width:820px;margin:0 auto 72px;">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;">
        <span class="ripple-icon"></span>
        <h2 style="font-size:1.5rem;" data-t="about.bg.title">Background & Justification</h2>
      </div>
      <p style="color:var(--text-dim);line-height:1.8;" data-t="about.bg.p">Background.</p>
    </div>

    <div style="display:grid;grid-template-columns:1fr;gap:24px;max-width:820px;margin:0 auto 72px;" class="md-grid-2">
      <div class="feature-card scroll-anim" style="border-color:var(--border-strong);background:linear-gradient(135deg, rgba(201,164,76,0.08), var(--card));">
        <span class="ripple-icon"></span>
        <h3 style="margin:18px 0 12px;" data-t="about.vision.title">Vision</h3>
        <p style="color:var(--text-dim);" data-t="about.vision.p">Vision.</p>
      </div>
      <div class="feature-card scroll-anim">
        <span class="ripple-icon"></span>
        <h3 style="margin:18px 0 12px;" data-t="about.mission.title">Mission</h3>
        <p style="color:var(--text-dim);" data-t="about.mission.p">Mission.</p>
      </div>
    </div>

    <div class="scroll-anim" style="border-radius:var(--radius-lg);overflow:hidden;border:1px solid var(--border);margin-bottom:72px;">
      <img src="https://picsum.photos/seed/museum-architecture-concept/1300/560" style="width:100%;height:360px;object-fit:cover;" loading="lazy">
      <div style="padding:44px;background:var(--card);">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;">
          <span class="ripple-icon"></span>
          <h2 style="font-size:1.5rem;" data-t="about.arch.title">Architectural Concept</h2>
        </div>
        <p style="color:var(--text-dim);max-width:760px;line-height:1.8;" data-t="about.arch.p">Architecture.</p>
      </div>
    </div>

    <div class="kolam-divider" style="max-width:820px;margin:0 auto 72px;"></div>

    <div class="scroll-anim" style="max-width:720px;margin:0 auto 72px;">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:32px;">
        <span class="ripple-icon"></span>
        <h2 style="font-size:1.5rem;" data-t="about.milestones.title">Milestones</h2>
      </div>
      <div id="milestonesList"></div>
    </div>

    <div class="scroll-anim" style="max-width:960px;margin:0 auto;">
      <div class="text-center" style="margin-bottom:36px;">
        <div style="display:flex;align-items:center;justify-content:center;gap:14px;margin-bottom:14px;">
          <span class="ripple-icon"></span>
          <h2 style="font-size:1.5rem;" data-t="about.team.title">Curatorial & Community Team</h2>
        </div>
        <p class="section-lead mx-auto" data-t="about.team.sub">One liaison per community.</p>
      </div>
      <div class="team-grid" id="teamGrid"></div>
    </div>
  </div>
</section>
"""
about_script = """
function renderAboutDynamic(){
  renderMilestones('milestonesList');
  renderTeam('teamGrid');
}
renderAboutDynamic();
window.onLangChange = renderAboutDynamic;
"""
page("about.html", "About — Batticaloa Museum",
     "The vision, mission, and architectural concept behind the Batticaloa Museum.",
     "about", about_body, about_script)

# ============================================================= PROJECT
steps = [
    ("01","p.step1","p.step1.d"), ("02","p.step2","p.step2.d"), ("03","p.step3","p.step3.d"), ("04","p.step4","p.step4.d"),
    ("05","p.step5","p.step5.d"), ("06","p.step6","p.step6.d"), ("07","p.step7","p.step7.d"), ("08","p.step8","p.step8.d"),
]
timeline_html = ""
for n, tk, dk in steps:
    timeline_html += f"""
      <div class="timeline-item scroll-anim">
        <span class="timeline-num">{n}</span>
        <div class="timeline-dot"></div>
        <div>
          <div class="timeline-title" data-t="{tk}"></div>
          <div class="timeline-desc" data-t="{dk}"></div>
        </div>
      </div>"""

budget_rows = [("p.b1","p.b1.v"),("p.b2","p.b2.v"),("p.b3","p.b3.v"),("p.b4","p.b4.v"),("p.b5","p.b5.v"),
               ("p.b6","p.b6.v"),("p.b7","p.b7.v"),("p.b8","p.b8.v"),("p.b9","p.b9.v"),("p.btotal","p.btotal.v")]
budget_html = "".join(f"""<div class="budget-row"><span class="b-label" data-t="{lk}"></span><span class="b-val" data-t="{vk}"></span></div>""" for lk,vk in budget_rows)

outcomes_html = ""
for i,ok in enumerate(["p.o1","p.o2","p.o3","p.o4","p.o5","p.o6"]):
    outcomes_html += f"""<div class="outcome-row scroll-anim"><div class="outcome-num">{i+1}</div><p style="color:var(--text-dim);" data-t="{ok}"></p></div>"""

project_body = f"""
<section class="block" style="padding-top:150px;">
  <div class="wrap">
    <div class="section-head text-center scroll-anim">
      <div class="eyebrow" style="justify-content:center;">Plan</div>
      <h1 class="h-section" data-t="project.title">Project Plan</h1>
      <p class="section-lead mx-auto text-center" data-t="project.sub">A comprehensive roadmap.</p>
    </div>

    <div style="max-width:720px;margin:0 auto 88px;">
      <h2 style="font-size:1.5rem;margin-bottom:40px;display:flex;align-items:center;gap:14px;" class="scroll-anim"><span class="ripple-icon"></span> <span data-t="p.plan.title">Implementation Plan</span></h2>
      <div class="timeline">{timeline_html}</div>
    </div>

    <div class="kolam-divider" style="max-width:720px;margin:0 auto 88px;"></div>

    <div style="max-width:720px;margin:0 auto 88px;">
      <h2 style="font-size:1.5rem;margin-bottom:32px;display:flex;align-items:center;gap:14px;" class="scroll-anim"><span class="ripple-icon"></span> <span data-t="p.budget.title">Budget Estimate</span></h2>
      <div class="budget-table scroll-anim">{budget_html}</div>
    </div>

    <div class="kolam-divider" style="max-width:720px;margin:0 auto 88px;"></div>

    <div style="max-width:720px;margin:0 auto 88px;">
      <h2 style="font-size:1.5rem;margin-bottom:32px;display:flex;align-items:center;gap:14px;" class="scroll-anim"><span class="ripple-icon"></span> <span data-t="p.outcomes.title">Expected Outcomes</span></h2>
      {outcomes_html}
    </div>

    <div class="kolam-divider" style="max-width:720px;margin:0 auto 88px;"></div>

    <div style="max-width:720px;margin:0 auto;">
      <h2 style="font-size:1.5rem;margin-bottom:24px;display:flex;align-items:center;gap:14px;" class="scroll-anim"><span class="ripple-icon"></span> <span data-t="p.sustain.title">Sustainability Plan</span></h2>
      <div class="info-card scroll-anim">
        <p style="color:var(--text-dim);line-height:1.8;" data-t="p.sustain.p">Sustainability.</p>
      </div>
    </div>
  </div>
</section>
"""
page("project.html", "Project Plan — Batticaloa Museum",
     "Implementation timeline, budget estimate, and expected outcomes for the Batticaloa Museum project.",
     "project", project_body)

# ============================================================= CONTACT
contact_body = """
<section class="block" style="padding-top:150px;">
  <div class="wrap">
    <div class="section-head text-center scroll-anim">
      <div class="eyebrow" style="justify-content:center;">Get in touch</div>
      <h1 class="h-section" data-t="contact.title">Contact Us</h1>
      <p class="section-lead mx-auto text-center" data-t="contact.sub">Questions, bookings, research requests.</p>
    </div>

    <div class="contact-grid">
      <div class="scroll-anim">
        <div class="info-card" style="margin-bottom:24px;">
          <span class="ripple-icon"></span>
          <h3 style="margin:18px 0 20px;" data-t="contact.info.title">Get in Touch</h3>
          <div class="contact-row"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a44c" stroke-width="1.8"><path d="M12 22s7-7.6 7-12.5A7 7 0 0 0 5 9.5C5 14.4 12 22 12 22z"/><circle cx="12" cy="9.5" r="2.4"/></svg><span data-t="footer.address">Bar Road, Batticaloa</span></div>
          <div class="contact-row"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a44c" stroke-width="1.8"><path d="M3 5c0 9 7 16 16 16l3-4-6-3-2 2c-2-1-4-3-5-5l2-2-3-6-4 .5"/></svg><span>+94 65 222 3456</span></div>
          <div class="contact-row"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a44c" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 6 8 6 8-6"/></svg><span>info@batticaloamuseum.lk</span></div>
          <div class="social-row" style="margin-top:18px;">
            <a href="#" class="social-btn" aria-label="Facebook"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg></a>
            <a href="#" class="social-btn" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
          </div>
        </div>
        <div class="map-frame">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d81.67!3d7.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBatticaloa!5e0!3m2!1sen!2slk!4v1700000000000" loading="lazy"></iframe>
        </div>
      </div>

      <div class="scroll-anim">
        <div class="info-card" style="margin-bottom:32px;">
          <h3 style="margin-bottom:6px;" data-t="contact.form.title">Send a Message</h3>
          <p style="color:var(--subtle);font-size:0.8rem;margin-bottom:22px;" data-t="contact.form.note">Front-end demo note.</p>
          <form onsubmit="return handleContactSubmit(event)">
            <div class="contact-form-field">
              <label data-t="contact.form.name">Full Name</label>
              <input type="text" required>
            </div>
            <div class="contact-form-field">
              <label data-t="contact.form.email">Email Address</label>
              <input type="email" required>
            </div>
            <div class="contact-form-field">
              <label data-t="contact.form.subject">Subject</label>
              <input type="text">
            </div>
            <div class="contact-form-field">
              <label data-t="contact.form.message">Message</label>
              <textarea required></textarea>
            </div>
            <button type="submit" class="btn btn-gold" style="width:100%;justify-content:center;" data-t="contact.form.send">Send Message</button>
          </form>
        </div>

        <div class="info-card">
          <h3 style="margin-bottom:16px;" data-t="contact.faq.title">Quick Answers</h3>
          <div class="faq-item">
            <div class="q"><span class="ripple-icon" style="margin-top:2px;"></span><span data-t="contact.faq.q1">Q1</span></div>
            <div class="a" data-t="contact.faq.a1">A1</div>
          </div>
          <div class="faq-item">
            <div class="q"><span class="ripple-icon" style="margin-top:2px;"></span><span data-t="contact.faq.q2">Q2</span></div>
            <div class="a" data-t="contact.faq.a2">A2</div>
          </div>
          <div class="faq-item">
            <div class="q"><span class="ripple-icon" style="margin-top:2px;"></span><span data-t="contact.faq.q3">Q3</span></div>
            <div class="a" data-t="contact.faq.a3">A3</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
"""
page("contact.html", "Contact — Batticaloa Museum",
     "Get in touch with the Batticaloa Museum — address, phone, email, and a contact form.",
     "contact", contact_body)

# ============================================================= MEDIA
media_body = """
<section class="block" style="padding-top:150px;">
  <div class="wrap">
    <div class="section-head text-center scroll-anim">
      <div class="eyebrow" style="justify-content:center;">Gallery</div>
      <h1 class="h-section" data-t="media.title">Photo & Video Gallery</h1>
      <p class="section-lead mx-auto text-center" data-t="media.sub">A closer look at the museum.</p>
    </div>

    <div class="media-tabs scroll-anim">
      <button class="filter-btn active" data-tab="photos" onclick="switchMediaTab('photos')" data-t="media.tab.photos">Photos</button>
      <button class="filter-btn" data-tab="videos" onclick="switchMediaTab('videos')" data-t="media.tab.videos">Videos</button>
    </div>

    <div id="mediaPhotosPane">
      <div class="photo-grid" id="photoGrid"></div>
    </div>
    <div id="mediaVideosPane" style="display:none;">
      <p style="text-align:center;color:var(--subtle);font-size:0.82rem;margin-bottom:28px;" data-t="media.video.note">Preview footage note.</p>
      <div class="video-grid" id="videoGrid"></div>
    </div>
  </div>
</section>
"""
media_script = """
function switchMediaTab(tab){
  document.querySelectorAll('[data-tab]').forEach(b => b.classList.toggle('active', b.getAttribute('data-tab') === tab));
  document.getElementById('mediaPhotosPane').style.display = tab === 'photos' ? '' : 'none';
  document.getElementById('mediaVideosPane').style.display = tab === 'videos' ? '' : 'none';
}
function renderMediaDynamic(){
  renderMediaPhotos('photoGrid');
  renderMediaVideos('videoGrid');
}
renderMediaDynamic();
window.onLangChange = renderMediaDynamic;
"""
page("media.html", "Media — Batticaloa Museum",
     "Browse photos and video previews from the Batticaloa Museum's galleries, festivals, and lagoon.",
     "media", media_body, media_script)

print("All pages generated.")
