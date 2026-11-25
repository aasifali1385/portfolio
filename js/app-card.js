/*
 * Renders sections of app cards in the Google Play style.
 *
 * The content lives in one file per developer section:
 *   js/apps/*.js   sections shown on the Apps tab
 *   js/games/*.js  sections shown on the Games tab
 * Each calls addSection("Heading", [app, app, ...]). The section is inserted
 * exactly where that file's <script> tag sits in index.html.
 *
 * App fields:
 *   name       App name (required)
 *   developer  Developer name shown under the app name (required)
 *   link       URL the card opens: the Play Store page, or the app's preview
 *              page as BASE_URL + "folder/", e.g. BASE_URL + "bitgrow/"
 *   banner     Banner image URL (required)
 *   banner2x   Sharper banner for high-DPI screens (optional)
 *   icon       App icon URL (required)
 *   icon2x     Sharper icon for high-DPI screens (optional)
 *   rating     Star rating such as "4.5" (optional; hidden when empty)
 */

// The portfolio's home folder (the folder that holds js/), worked out from where
// this script is loaded, so links work on GitHub Pages, any other host, and locally.
// e.g. "https://aasifali1385.github.io/portfolio/" or "file:///C:/.../portfolio/"
const BASE_URL = new URL('../', document.currentScript.src).href;

// Opened straight from disk, a folder link shows a file list instead of the page,
// so point folder links at their index.html there.
function pageUrl(url) {
    return location.protocol === 'file:' && url.endsWith('/') ? url + 'index.html' : url;
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function appCardHtml(app) {
    const esc = escapeHtml;
    const srcset = (x1, x2) => x2 ? `srcset="${esc(x2)} 2x"` : `srcset="${esc(x1)}"`;

    const target = `href="${esc(pageUrl(app.link))}"`;

    const rating = app.rating ? `
                <div class="ubGTjb">
                    <div style="display: inline-flex; align-items: center;"
                         aria-label="Rated ${esc(app.rating)} stars out of five stars">
                        <span class="w2kbF">${esc(app.rating)}</span><span class="Q4fJQd"><i
                            class="material-icons Yvy3Fd" aria-hidden="true">star</i></span>
                    </div>
                </div>` : '';

    return `
<div class="ULeU3b" role="listitem">
    <div class="VfPpkd-WsjYwc VfPpkd-WsjYwc-OWXEXe-INsAgc KC1dQ Usd1Ac AaN0Dd  Y8RQXd">
        <div class="VfPpkd-aGsRMb">
            <div class="VfPpkd-EScbFb-JIbuQc TAQqTe">
                <a class="Si6A0c Gy4nib" ${target}>
                    <div class="Shbxxd"><img src="${esc(app.banner)}" ${srcset(app.banner, app.banner2x)}
                                             class="T75of jpDEN" aria-hidden="true" alt="Screenshot image"
                                             loading="lazy"></div>
                    <div class="j2FCNc"><img src="${esc(app.icon)}" ${srcset(app.icon, app.icon2x)}
                                             class="T75of stzEZd" aria-hidden="true" alt="Thumbnail image"
                                             loading="lazy">
                        <div class="cXFu1">
                            <div class="ubGTjb"><span class="DdYX5">${esc(app.name)}</span></div>
                            <div class="ubGTjb"><span class="wMUdtb">${esc(app.developer)}</span></div>${rating}
                        </div>
                    </div>
                </a>
                <div class="VfPpkd-FJ5hab"></div>
            </div>
        </div>
        <div class="VfPpkd-Xgjsme-LhBDec"></div>
        <span class="VfPpkd-BFbNVe-bF1uUb NZp2ef" aria-hidden="true"></span>
    </div>
</div>`;
}

function addSection(title, apps) {
    const html = `
<c-wiz class="SSPGKf glB9Ve">
    <div class="T4LgNb">
        <div class="kFwPee">
            <div class="N4FjMb">
                <c-wiz>
                    <c-wiz class="UBeTzd Ubi8Z">
                        <c-wiz>
                            <section>
                                <header class="oVnAB">
                                    <div class="kcen6d"><span>${escapeHtml(title)}</span></div>
                                </header>
                                <div>
                                    <div class="ftgkle">
                                        <div class="fUEl2e">${apps.map(appCardHtml).join('')}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </c-wiz>
                    </c-wiz>
                </c-wiz>
            </div>
        </div>
    </div>
</c-wiz>`;

    document.currentScript.insertAdjacentHTML('beforebegin', html);
}
