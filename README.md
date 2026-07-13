# Batticaloa Museum — Website

A multi-page, trilingual (English · தமிழ் · සිංහල) static website for the
Batticaloa Museum, Sri Lanka. Design concept: **Confluence** — the lagoon
meeting the sea, kolam geometry, and the four communities (Tamil, Muslim,
Burgher, Sinhala) whose heritage the museum holds.

No frameworks — plain HTML, custom CSS, and vanilla JavaScript.

## Structure

```
index.html          Home — hero, stats, featured galleries, events, testimonials
galleries.html       All 11 galleries, filterable by category
gallery.html         Gallery detail (?id=0-10)
media.html           Photo gallery + video preview gallery (tabbed)
visit.html           Hours, admission, map, facilities, tips
digital.html         3D tour / AR / AI guide / audio guide / digital library
about.html           Executive summary, vision, mission, architecture, milestones, team
contact.html         Contact info, contact form (front-end demo), map, FAQ
project.html         Implementation timeline, budget, outcomes (footer-only link)

assets/
  css/style.css       Design tokens + all component styles
  js/data.js          Trilingual content: galleries, events, team, testimonials,
                       media items, and the chatbot's FAQ pairs
  js/i18n.js          Translation dictionary (197 keys × 3 languages) +
                       t()/gt()/setLang() helpers
  js/main.js          Shared behaviors: nav, lightbox/video modal, toast,
                       scroll-reveal, counters, gallery grid rendering/filtering,
                       and the Museum Assistant chatbot
```

## Museum Assistant (chatbot)

Every page has a floating chat button (bottom-right) backed by a small
**rule-based keyword matcher** in `data.js` (`CHATBOT_QA`) — it is not a live
AI model and makes no network calls, so it works fully offline once the site
is loaded. It answers questions about hours, tickets, location, galleries,
languages, and contact details, and says so plainly when it can't help
(`chat.disclaimer` in `i18n.js`). If you want a real LLM-backed assistant,
that needs a backend endpoint holding the API key — happy to help design
that separately.

## Photo & video gallery

`media.html` shows a photo grid (masonry layout, opens in the shared
lightbox) and a video grid. The video cards currently open a **placeholder
preview clip** (a public-domain sample video) captioned with the video's
title and a note that full recordings are available on-site — swap the
`<source>` URL in `openVideoModal()` (`main.js`) for real museum footage
when it's ready.

## Contact form

The form on `contact.html` is a front-end-only demo: submitting it clears
the fields and shows a confirmation toast, but nothing is actually sent
anywhere yet (see `contact.form.note` in the UI). Wiring it to a real inbox
needs a form backend (e.g. Formspree, Netlify Forms, or a small serverless
function) — the form's `onsubmit` handler in `generate_pages.py` is the
place to swap in a real submit.


## Design tokens

| Role | Value |
|---|---|
| Background | `#0a1513` (deep lagoon night) |
| Card / surface | `#142926` / `#0f1e1b` |
| Gold (turmeric) | `#c9a44c` / `#e6c976` |
| Terracotta | `#c1603c` / `#dc8760` |
| Lagoon teal | `#3f8a79` |
| Display type | Fraunces |
| Body type | Work Sans |
| Labels / data | Space Mono |
| Tamil / Sinhala script | Noto Sans Tamil / Noto Sans Sinhala |

Signature motif: a ripple ring referencing the singing fish of the Kallady
lagoon (`.ripple-icon`, `.ripple-ring`), and a kolam dot-pattern used as a
section divider (`.kolam-divider`).

## Language switching

Language buttons call `setLang('en' | 'ta' | 'si')`, which updates every
`[data-t]` element via `applyTranslations()`, persists the choice in
`localStorage`, and calls `window.onLangChange` so each page can re-render
its dynamically built content (gallery grids, bullet lists, marquee, gallery
detail) in the new language without a page reload.

## Running locally

No build step — just serve the folder statically, e.g.:

```
python3 -m http.server 8000
```

then open `http://localhost:8000/index.html`.

## Regenerating pages

`build.py` holds the shared nav/footer/head templates. `generate_pages.py`
assembles each page's content block and writes the final flat `.html`
files. Edit content in `generate_pages.py` (or the templates in `build.py`)
and re-run:

```
python3 generate_pages.py
```
