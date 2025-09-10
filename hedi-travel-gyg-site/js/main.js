// Home page logic: render featured landings
(function() {
  const cardsEl = document.getElementById('cards');
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  fetch('/content/landings.json')
    .then(r => r.json())
    .then(data => {
      const items = (data && data.featured) || [];
      if (!items.length) {
        cardsEl.innerHTML = '<p>Aucune suggestion pour le moment. Reviens bientôt !</p>';
        return;
      }
      const html = items.map(item => {
        const url = `/landing/${encodeURIComponent(item.slug)}`;
        return `
          <article class="card">
            <div class="thumb" style="background-image:url('${item.thumb || ''}')"></div>
            <div class="pad">
              <h3>${item.title || item.slug}</h3>
              <p>${item.summary || ''}</p>
            </div>
            <div class="actions">
              <a class="btn" href="${url}">Voir le guide</a>
            </div>
          </article>
        `;
      }).join('');
      cardsEl.innerHTML = html;
    })
    .catch(() => {
      cardsEl.innerHTML = '<p>Impossible de charger les suggestions.</p>';
    });
})();
