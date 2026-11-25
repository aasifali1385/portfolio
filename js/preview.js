/*
 * Renders an app preview page in the Google Play app-page layout.
 *
 * Each app folder (e.g. bitgrow/) has an index.html that loads this file and calls
 * renderPreview({...}). Image paths are relative to that folder, e.g. "images/ss1.jpeg".
 *
 * Fields (only name, developer and icon are required; leave others out to hide them):
 *   name         App name (page title)
 *   developer    Developer name, shown in green under the title
 *   icon         App icon
 *   rating       Star rating, e.g. "4.5"
 *   reviews      Review count shown under the rating, e.g. "1K+"
 *   downloads    e.g. "100+"
 *   ratedFor     Age rating, e.g. "3+" (default "3+")
 *   install      Download/APK or Play Store URL for the Install button
 *                (without it the button is shown greyed out)
 *   screenshots  List of image paths. Empty slots are shown when there are none.
 *   about        List of paragraphs for "About this app"
 *   updated      e.g. "Jan 1, 2024"
 *   category     e.g. "Finance"
 *   whatsNew     Text for "What's new"
 *   supportEmail Email shown under "App support"
 *   privacyPolicy Privacy policy URL shown under "App support"
 */
function renderPreview(app) {
    const esc = (value) => String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

    const ratedFor = app.ratedFor || '3+';
    document.title = `${app.name} - Android Apps by Aasif Ali`;

    // Stats row: rating, downloads, age rating
    const stats = [];
    if (app.rating) {
        stats.push(`
            <div class="pv-stat">
                <div class="pv-stat-value">${esc(app.rating)}<i class="material-icons" aria-hidden="true">star</i></div>
                <div class="pv-stat-label">${app.reviews ? esc(app.reviews) + ' reviews' : 'Rating'}</div>
            </div>`);
    }
    if (app.downloads) {
        stats.push(`
            <div class="pv-stat">
                <div class="pv-stat-value">${esc(app.downloads)}</div>
                <div class="pv-stat-label">Downloads</div>
            </div>`);
    }
    stats.push(`
            <div class="pv-stat">
                <div class="pv-stat-value"><span class="pv-badge">${esc(ratedFor)}</span></div>
                <div class="pv-stat-label">Rated for ${esc(ratedFor)}</div>
            </div>`);

    const install = app.install
        ? `<a class="pv-install" href="${esc(app.install)}">Install</a>`
        : `<a class="pv-install" aria-disabled="true">Install</a>`;

    // Screenshots, or empty slots that keep the space
    const shots = (app.screenshots && app.screenshots.length)
        ? app.screenshots.map((src) => `
            <a class="pv-shot" href="${esc(src)}" target="_blank" rel="noopener">
                <img src="${esc(src)}" alt="Screenshot" loading="lazy">
            </a>`).join('')
        : Array.from({length: 4}, () => `<div class="pv-shot pv-shot--empty">Screenshot</div>`).join('');

    const about = (app.about || []).map((p) => `<p class="pv-text">${esc(p)}</p>`).join('');
    const updated = app.updated ? `
                <div class="pv-meta-label">Updated on</div>
                <div class="pv-meta-value">${esc(app.updated)}</div>` : '';
    const category = app.category ? `<span class="pv-chip">${esc(app.category)}</span>` : '';

    const whatsNew = app.whatsNew ? `
            <section class="pv-section">
                <h2>What’s new</h2>
                <p class="pv-text">${esc(app.whatsNew)}</p>
            </section>` : '';

    const support = [];
    if (app.supportEmail) {
        support.push(`<a href="mailto:${esc(app.supportEmail)}"><i class="material-icons" aria-hidden="true">email</i>${esc(app.supportEmail)}</a>`);
    }
    if (app.privacyPolicy) {
        support.push(`<a href="${esc(app.privacyPolicy)}" target="_blank" rel="noopener"><i class="material-icons" aria-hidden="true">shield</i>Privacy Policy</a>`);
    }
    const supportHtml = support.length ? `
            <section class="pv-section pv-support">
                <h2>App support</h2>
                ${support.join('')}
            </section>` : '';

    const html = `
<main class="pv">
    <div class="pv-top">
        <div class="pv-info">
            <h1 class="pv-title">${esc(app.name)}</h1>
            <div class="pv-dev">${esc(app.developer)}</div>
            <div class="pv-stats">${stats.join('')}
            </div>
            ${install}
        </div>
        <img class="pv-icon" src="${esc(app.icon)}" alt="${esc(app.name)} icon">
    </div>

    <div class="pv-body">
        <div class="pv-main">
            <div class="pv-shots-wrap">
                <div class="pv-shots">${shots}
                </div>
                <button class="pv-arrow pv-arrow--left" type="button" aria-label="Previous screenshots" hidden>
                    <i class="material-icons" aria-hidden="true">chevron_left</i>
                </button>
                <button class="pv-arrow pv-arrow--right" type="button" aria-label="Next screenshots" hidden>
                    <i class="material-icons" aria-hidden="true">chevron_right</i>
                </button>
            </div>

            <section class="pv-section">
                <h2>About this app</h2>
                ${about}${updated}
                ${category}
            </section>

            <section class="pv-section">
                <h2>Data safety</h2>
                <p class="pv-text">Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region, and age.</p>
                <div class="pv-card">
                    <div class="pv-safety-item"><i class="material-icons" aria-hidden="true">share</i>No data shared with third parties</div>
                    <div class="pv-safety-item"><i class="material-icons" aria-hidden="true">cloud_upload</i>No data collected</div>
                    <div class="pv-safety-item"><i class="material-icons" aria-hidden="true">lock</i>Data is encrypted in transit</div>
                    <div class="pv-safety-item"><i class="material-icons" aria-hidden="true">delete</i>You can request that data be deleted</div>
                </div>
            </section>
            ${whatsNew}
        </div>

        <aside class="pv-side">
            <div class="pv-card pv-rated">
                <span class="pv-badge">${esc(ratedFor)}</span>
                <span class="pv-rated-text">Rated for ${esc(ratedFor)}</span>
            </div>
            ${supportHtml}
        </aside>
    </div>
</main>`;

    const script = document.currentScript;
    script.insertAdjacentHTML('beforebegin', html);
    setUpScreenshotArrows(script.previousElementSibling.querySelector('.pv-shots-wrap'));
}

// Left/right arrows on the screenshot strip, shown only when there is more to scroll to.
function setUpScreenshotArrows(wrap) {
    const strip = wrap.querySelector('.pv-shots');
    const left = wrap.querySelector('.pv-arrow--left');
    const right = wrap.querySelector('.pv-arrow--right');

    const update = () => {
        const max = strip.scrollWidth - strip.clientWidth;
        left.hidden = strip.scrollLeft <= 4;
        right.hidden = strip.scrollLeft >= max - 4;
    };

    // Page by whole screenshots: Next brings the first cut-off screenshot to the left
    // edge, Previous brings the screenshot cut off on the left to the right edge.
    const page = (direction) => {
        const view = strip.getBoundingClientRect();
        const shots = [...strip.querySelectorAll('.pv-shot')].map((shot) => {
            const box = shot.getBoundingClientRect();
            return {start: box.left - view.left + strip.scrollLeft, end: box.right - view.left + strip.scrollLeft};
        });
        const from = strip.scrollLeft;
        const to = from + strip.clientWidth;
        let target;
        if (direction > 0) {
            const next = shots.find((shot) => shot.end > to + 1);
            target = next ? next.start - 2 : strip.scrollWidth;
        } else {
            const previous = [...shots].reverse().find((shot) => shot.start < from - 1);
            target = previous ? previous.end - strip.clientWidth + 2 : 0;
        }
        strip.scrollTo({left: Math.max(0, target), behavior: 'smooth'});
    };

    left.addEventListener('click', () => page(-1));
    right.addEventListener('click', () => page(1));
    strip.addEventListener('scroll', update, {passive: true});
    window.addEventListener('resize', update);
    // Screenshot widths are only known once each image has loaded.
    strip.querySelectorAll('img').forEach((img) => img.addEventListener('load', update));
    update();
}
