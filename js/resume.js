/*
 * Renders the Resume tab on the home page, laid out like a Google Play app page.
 * The details live in js/resume-details.js, which calls renderResume({...}).
 * Uses the styles in css/preview.css plus css/resume.css.
 *
 * Fields (leave any out, or empty, to hide it):
 *   name        Your name (page title)
 *   headline    Shown in green under the name, e.g. "Android Developer"
 *   photo       Photo URL or path; without one your initials are shown
 *   location    e.g. "Noida, India"
 *   experience  Total experience for the stats row, e.g. "4.5+ years"
 *   cv          Path of the PDF built from resume/Aasif-Ali-Resume.tex, for the
 *               Download CV button (without it the button is greyed out)
 *   about       List of paragraphs for "About me"; wrap words in **...** to make them bold
 *   jobs        List of {role, company, period, location, points: [...]}
 *   skills      List of skills shown as chips, or groups: {group: "Languages", items: [...]}
 *   projects    List of {name, tech, year, link, points: [...]}
 *               (link: Play Store URL or BASE_URL + "folder/" for a preview page)
 *   education   List of {degree, school, period, location, grade}
 *   email, phone, linkedin, github, website   Contact details in the sidebar
 */
/*
 * Experience counted from the month you started, rounded down to the half year,
 * e.g. experienceSince(2022, 4) gives "4.5+ years" in Nov 2026 and "5+ years" from Apr 2027.
 */
function experienceSince(year, month) {
    const now = new Date();
    const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month);
    const years = Math.floor(months / 6) / 2;
    return `${years}+ years`;
}

function renderResume(me) {
    const esc = (value) => String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    const list = (value) => (value || []).filter(Boolean);
    // "Company · Place · Dates", leaving out empty parts
    const meta = (...parts) => parts.filter(Boolean).map(esc).join(' · ');
    const points = (items) => list(items).length
        ? `<ul class="rs-points">${list(items).map((p) => `<li>${esc(p)}</li>`).join('')}</ul>`
        : '';

    const initials = (me.name || '').split(/\s+/).map((word) => word[0] || '').join('').slice(0, 2).toUpperCase();
    const photo = me.photo
        ? `<img class="pv-icon rs-photo" src="${esc(me.photo)}" alt="${esc(me.name)}">`
        : `<div class="pv-icon rs-photo rs-initials" aria-hidden="true">${esc(initials)}</div>`;

    // Stats row
    const stats = [];
    if (me.experience) stats.push([me.experience, 'Experience']);
    if (me.location) stats.push([me.location, 'Location']);
    const statsHtml = stats.map(([value, label]) => `
            <div class="pv-stat">
                <div class="pv-stat-value">${esc(value)}</div>
                <div class="pv-stat-label">${esc(label)}</div>
            </div>`).join('');

    const buttons = `
            <div class="rs-buttons">
                ${me.cv
                    ? `<a class="pv-install" href="${esc(me.cv)}" download><i class="material-icons" aria-hidden="true">download</i><span class="rs-long">Download&nbsp;</span>Resume</a>`
                    : `<a class="pv-install" aria-disabled="true"><i class="material-icons" aria-hidden="true">download</i><span class="rs-long">Download&nbsp;</span>Resume</a>`}
            </div>`;

    const section = (title, body) => body ? `
            <section class="pv-section">
                <h2>${title}</h2>
                ${body}
            </section>` : '';

    // **word** in a paragraph is shown in bold
    const bold = (text) => esc(text).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    const about = list(me.about).map((p) => `<p class="pv-text">${bold(p)}</p>`).join('');

    const jobs = list(me.jobs).map((job) => `
                <div class="rs-item">
                    <div class="rs-item-title">${esc(job.role || '')}</div>
                    <div class="rs-item-sub">${meta(job.company, job.location, job.period)}</div>
                    ${points(job.points)}
                </div>`).join('');

    const chips = (items) => `<div class="rs-chips">${list(items).map((s) => `<span class="pv-chip">${esc(s)}</span>`).join('')}</div>`;
    const plain = list(me.skills).filter((s) => typeof s === 'string');
    const groups = list(me.skills).filter((s) => typeof s === 'object');
    const skills = (plain.length ? chips(plain) : '') + groups.map((g) => `
                <div class="rs-skill-group">
                    <div class="rs-skill-label">${esc(g.group || '')}</div>
                    ${chips(g.items)}
                </div>`).join('');

    const projects = list(me.projects).map((project) => {
        const name = project.link
            ? `<a href="${esc(typeof pageUrl === 'function' ? pageUrl(project.link) : project.link)}">${esc(project.name || '')}</a>`
            : esc(project.name || '');
        return `
                <div class="rs-item">
                    <div class="rs-item-title">${name}</div>
                    <div class="rs-item-sub">${meta(project.tech, project.year)}</div>
                    ${points(project.points)}
                </div>`;
    }).join('');

    const education = list(me.education).map((ed) => `
                <div class="rs-item">
                    <div class="rs-item-title">${esc(ed.degree || '')}</div>
                    <div class="rs-item-sub">${meta(ed.school, ed.location, ed.period)}</div>
                    ${ed.grade ? `<div class="rs-item-sub">${esc(ed.grade)}</div>` : ''}
                </div>`).join('');

    // Contact details in the sidebar
    const contact = [];
    const add = (value, iconName, href, text) => {
        if (value) contact.push(`<a href="${esc(href)}"${href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}><i class="material-icons" aria-hidden="true">${iconName}</i>${esc(text || value)}</a>`);
    };
    add(me.email, 'email', 'mailto:' + me.email);
    add(me.linkedin, 'work', me.linkedin, 'LinkedIn');
    add(me.github, 'code', me.github, 'GitHub');
    add(me.website, 'language', me.website, 'Website');
    const contactHtml = contact.length ? `
            <section class="pv-section pv-support">
                <h2>Contact</h2>
                ${contact.join('')}
            </section>` : '';

    const html = `
<main class="pv rs">
    <div class="pv-top">
        <div class="pv-info">
            <h1 class="pv-title">${esc(me.name || '')}</h1>
            ${me.headline ? `<div class="pv-dev">${esc(me.headline)}</div>` : ''}
            <div class="rs-row">
                ${statsHtml ? `<div class="pv-stats">${statsHtml}</div>` : '<div class="rs-gap"></div>'}
                ${buttons}
            </div>
        </div>
        ${photo}
    </div>

    <div class="pv-body">
        <div class="pv-main">
            ${section('About me', about)}
            ${section('Experience', jobs)}
            ${section('Skills', skills)}
            ${section('Projects', projects)}
            ${section('Education', education)}
        </div>
        <aside class="pv-side">${contactHtml}
        </aside>
    </div>
</main>`;

    document.currentScript.insertAdjacentHTML('beforebegin', html);
}
