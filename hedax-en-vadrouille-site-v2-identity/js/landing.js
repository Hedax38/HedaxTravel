(function() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const titleEl = document.getElementById('title');
  const introEl = document.getElementById('intro');
  const heroEl = document.getElementById('hero');
  const contentEl = document.getElementById('content');
  const ctaEl = document.getElementById('cta');
  const faqEl = document.getElementById('faq-section');
  const practicalEl = document.getElementById('practical');
  const pageTitle = document.getElementById('page-title');
  const pageDesc = document.getElementById('page-description');
  const yearEl = document.getElementById('year');
  const sticky = document.getElementById('sticky-cta');
  const stickyLink = document.getElementById('sticky-cta-link');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function withUTM(url) {
    try {
      const sep = url.includes('?') ? '&' : '?';
      return url + sep + `utm_source=site&utm_medium=affiliate&utm_campaign=hedax_en_vadrouille&utm_content=${encodeURIComponent(slug||'')}`;
    } catch(e) { return url; }
  }

  if (!slug) { titleEl.textContent = "Aucune page spécifiée."; return; }

  fetch(`/content/landing/${slug}.md`)
    .then(r => r.ok ? r.text() : Promise.reject('Landing introuvable'))
    .then(txt => {
      const parsed = window.grayMatter(txt);
      const data = parsed.data || {};
      const body = parsed.content || '';

      titleEl.textContent = data.title || slug;
      if (data.seo_description) pageDesc.setAttribute('content', data.seo_description);
      pageTitle.textContent = (data.title ? data.title + " — " : "") + "Hedax en Vadrouille";
      if (data.hero_image) { heroEl.style.backgroundImage = `url('${data.hero_image}')`; }
      if (data.intro) introEl.textContent = data.intro;

      if (Array.isArray(data.highlights) && data.highlights.length) {
        const wrap = document.getElementById('highlights');
        data.highlights.forEach(t => {
          const d = document.createElement('div');
          d.className = 'pill';
          d.textContent = t;
          wrap.appendChild(d);
        });
      }

      if (data.gyg_offer_url) {
        const link = withUTM(data.gyg_offer_url);
        const btn = document.createElement('a');
        btn.className = 'btn btn-accent';
        btn.href = link; btn.target = '_blank'; btn.rel = 'sponsored nofollow noopener';
        btn.textContent = data.gyg_text || 'Réserver via GetYourGuide';
        ctaEl.appendChild(btn);
        if (sticky && stickyLink) { stickyLink.href = link; if (data.gyg_text) stickyLink.textContent = data.gyg_text; sticky.hidden = false; }
      }

      if (body) contentEl.innerHTML = window.marked.parse(body);

      if (Array.isArray(data.faq) && data.faq.length) {
        const h2 = document.createElement('h2'); h2.textContent = 'FAQ'; faqEl.appendChild(h2);
        data.faq.forEach(item => { const q = document.createElement('h3'); q.textContent = item.question;
          const a = document.createElement('p'); a.textContent = item.answer;
          faqEl.appendChild(q); faqEl.appendChild(a); });
      }

      if (Array.isArray(data.practical) && data.practical.length) {
        const h2 = document.createElement('h2'); h2.textContent = 'Infos pratiques'; practicalEl.appendChild(h2);
        const ul = document.createElement('ul'); data.practical.forEach(t => { const li = document.createElement('li'); li.textContent = t; ul.appendChild(li); });
        practicalEl.appendChild(ul);
      }

      const affiliateNote = document.getElementById('affiliate-note');
      if (data.affiliate_disclaimer && affiliateNote) affiliateNote.textContent = data.affiliate_disclaimer;
    })
    .catch(err => { titleEl.textContent = "Page introuvable 🤷‍♂️"; console.error(err); });
})();