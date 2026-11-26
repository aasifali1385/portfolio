/*
 * Shared Google Play-style header, used by index.html and every app preview page.
 *
 * Call renderHeader() at the top of <body>:
 *   renderHeader({root: './', tab: 'apps'})            on index.html
 *   renderHeader({root: '../', tab: 'apps', links: true}) on a preview page
 *
 *   root   path back to the portfolio home page
 *   tab    which tab is highlighted: 'apps', 'games' or 'about'
 *   links  true on preview pages: Games/Apps/About Me go back to the home page
 *          (index.html switches tabs itself instead)
 */
function renderHeader({root = './', tab = 'apps', links = false} = {}) {
    // Opened straight from disk, a folder link shows a file list, so link to index.html there.
    const home = location.protocol === 'file:' ? root + 'index.html' : root;

    const html = `
<c-wiz>
    <header id="header" class="S3WLMd">
        <nav class="oPjgQb">

            <!-- Logo -->
            <a href="${home}" aria-label="Google Play logo" class="f0UV3d">
                <svg class="kOqhQd" aria-hidden="true" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0,0h40v40H0V0z"/>
                    <g>
                        <path d="M19.7,19.2L4.3,35.3c0,0,0,0,0,0c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l0,0l17.4-9.9L19.7,19.2z"
                              fill="#EA4335"/>
                        <path d="M35.3,16.4L35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z"
                              fill="#FBBC04"/>
                        <path d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z"
                              fill="#4285F4"/>
                        <path d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3c0,0,0,0,0,0L19.8,20z"
                              fill="#34A853"/>
                    </g>
                </svg>
                <span aria-hidden="true">Google Play</span></a>

            <!-- Tabs -->
            <c-wiz>
                <div role="navigation" aria-label="Main" class="P8HBFd">
                    <div>
                        <div class="VfPpkd-AznF2e-ZMv3u ucf8re" role="tablist">
                            <div class="VfPpkd-AznF2e-vzJc7b">
                                <div class="VfPpkd-AznF2e-LUERP-vJ7A6b">
                                    <span class="VfPpkd-AznF2e-LUERP-bN97Pc"><button
                                            id="gamesTab" role="tab" aria-selected="false" tabindex="-1"
                                            class="VfPpkd-AznF2e VfPpkd-AznF2e-OWXEXe-jJNx8e-QBLLGd WbUJNb FEsNhd  cvzg3c"><span
                                            class="VfPpkd-N5Lhkf"><span class="VfPpkd-jY41G-V67aGc">Games</span>
                                            <span class="VfPpkd-AznF2e-uDEFge rvBHac kte1hc"><span
                                                    class="VfPpkd-AznF2e-wEcVzc VfPpkd-AznF2e-wEcVzc-OWXEXe-NowJzb pawmVc"></span></span>
                                        </span><span class="VfPpkd-YVzG2b"></span>
                                        <div class="VfPpkd-wJCpie-LhBDec"></div>
                                    </button><button
                                            id="appsTab" role="tab" aria-selected="true" tabindex="0"
                                            class="VfPpkd-AznF2e VfPpkd-AznF2e-OWXEXe-auswjd VfPpkd-AznF2e-OWXEXe-jJNx8e-QBLLGd WbUJNb FEsNhd  q2wkXd"><span
                                            class="VfPpkd-N5Lhkf"><span class="VfPpkd-jY41G-V67aGc">Apps</span><span
                                            class="VfPpkd-AznF2e-uDEFge VfPpkd-AznF2e-uDEFge-OWXEXe-auswjd rvBHac kte1hc"><span
                                            class="VfPpkd-AznF2e-wEcVzc VfPpkd-AznF2e-wEcVzc-OWXEXe-NowJzb pawmVc"></span></span></span><span
                                            class="VfPpkd-YVzG2b"></span>
                                        <div class="VfPpkd-wJCpie-LhBDec"></div>
                                    </button><button
                                            id="aboutTab" role="tab" aria-selected="false" tabindex="-1"
                                            class="VfPpkd-AznF2e VfPpkd-AznF2e-OWXEXe-jJNx8e-QBLLGd WbUJNb FEsNhd  q2wkXd"><span
                                            class="VfPpkd-N5Lhkf"><span class="VfPpkd-jY41G-V67aGc">About Me</span><span
                                            class="VfPpkd-AznF2e-uDEFge rvBHac kte1hc"><span
                                            class="VfPpkd-AznF2e-wEcVzc VfPpkd-AznF2e-wEcVzc-OWXEXe-NowJzb pawmVc"></span></span></span><span
                                            class="VfPpkd-YVzG2b"></span>
                                        <div class="VfPpkd-wJCpie-LhBDec"></div>
                                    </button><button role="tab" aria-selected="false" tabindex="-1" disabled
                                            class="VfPpkd-AznF2e VfPpkd-AznF2e-OWXEXe-jJNx8e-QBLLGd WbUJNb FEsNhd  AthEce"><span
                                            class="VfPpkd-N5Lhkf"><span class="VfPpkd-jY41G-V67aGc">Books</span><span
                                            class="VfPpkd-AznF2e-uDEFge rvBHac kte1hc"><span
                                            class="VfPpkd-AznF2e-wEcVzc VfPpkd-AznF2e-wEcVzc-OWXEXe-NowJzb pawmVc"></span></span></span><span
                                            class="VfPpkd-YVzG2b"></span>
                                        <div class="VfPpkd-wJCpie-LhBDec"></div>
                                    </button></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </c-wiz>

            <!-- Search, help and account icons -->
            <div class="oc9n0c">
                <div>
                    <button class="VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ mN1ivc" aria-label="Search">
                        <div class="VfPpkd-Bz112c-Jh9lGc"></div>
                        <div class="VfPpkd-Bz112c-J1Ukfc-LhBDec"></div>
                        <i class="material-icons  r9optf" aria-hidden="true">search</i>
                    </button>
                </div>

                <div>
                    <button class="VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ QDwDD mN1ivc" aria-label="Help Center">
                        <div class="VfPpkd-Bz112c-Jh9lGc"></div>
                        <div class="VfPpkd-Bz112c-J1Ukfc-LhBDec"></div>
                        <i class="material-icons r9optf" aria-hidden="true">help_outline</i>
                    </button>
                </div>

                <div>
                    <div class="VfPpkd-xl07Ob-XxIAqe-OWXEXe-oYxtQd">
                        <div>
                            <button class="VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ mN1ivc PeWVCc"
                                    aria-label="Google Account: Aasif Ali (aasifali1385@gmail.com)">
                                <div class="VfPpkd-Bz112c-Jh9lGc"></div>
                                <div class="VfPpkd-Bz112c-J1Ukfc-LhBDec"></div>
                                <img src="https://lh3.googleusercontent.com/ogw/AGvuzYYkPf71y89g8wbf6MwkXt3i7TxFF8iFFHneUlXoxQ=s32-c-mo"
                                     class="VfPpkd-kBDsod WrEZCd" aria-hidden="true">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</c-wiz>`;

    document.currentScript.insertAdjacentHTML('beforebegin', html);

    const games = document.getElementById('gamesTab');
    const apps = document.getElementById('appsTab');
    const about = document.getElementById('aboutTab');
    const setActive = (button, active) => {
        button.classList.toggle('VfPpkd-AznF2e-OWXEXe-auswjd', active);
        button.querySelector('.VfPpkd-AznF2e-uDEFge').classList.toggle('VfPpkd-AznF2e-uDEFge-OWXEXe-auswjd', active);
        button.setAttribute('aria-selected', active);
        button.tabIndex = active ? 0 : -1;
    };
    setActive(games, tab === 'games');
    setActive(apps, tab === 'apps');
    setActive(about, tab === 'about');

    if (links) {
        games.addEventListener('click', () => location.href = home + '#games');
        apps.addEventListener('click', () => location.href = home);
        about.addEventListener('click', () => location.href = home + '#about');
    }

    // Bottom navigation, shown instead of the header tabs below 840px.
    // Added once the page has loaded so it ends up after all the content.
    const icon = (viewBox, d) => `<svg width="24" height="24" viewBox="${viewBox}" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="${d}"/></svg>`;
    const bottomItems = [
        {label: 'Games', tab: games, href: home + '#games', icon: icon('0 0 21 16', NAV_ICONS.games)},
        {label: 'Apps', tab: apps, href: home, icon: icon('0 0 24 24', NAV_ICONS.apps)},
        {label: 'About Me', tab: about, href: home + '#about', icon: icon('0 0 24 24', NAV_ICONS.about)},
        {label: 'Books', icon: icon('0 0 24 24', NAV_ICONS.books)}
    ];
    document.addEventListener('DOMContentLoaded', () => {
        const bar = document.createElement('div');
        bar.className = 'P7NFWb';
        bar.innerHTML = `<nav class="yyaGpb" aria-label="Main">${bottomItems.map((item) => `
            <a class="uEz1ib" ${item.tab ? `href="${item.href}"` : 'aria-disabled="true"'}>
                <div class="jb05Ib">${item.icon}</div><div class="WL3b7c">${item.label}</div>
            </a>`).join('')}
        </nav>`;
        document.body.appendChild(bar);

        const links = bar.querySelectorAll('a');
        bottomItems.forEach((item, i) => {
            if (!item.tab) return;
            const link = links[i];
            // Same action as the header tab: switch tabs on the home page, go home elsewhere
            link.addEventListener('click', (event) => {
                event.preventDefault();
                item.tab.click();
            });
            // Follow the header tab's highlight (index.html changes it when the tab switches)
            const sync = () => link.classList.toggle('VuUAje', item.tab.getAttribute('aria-selected') === 'true');
            new MutationObserver(sync).observe(item.tab, {attributes: true, attributeFilter: ['aria-selected']});
            sync();
        });
    });

    // Header shadow once the page is scrolled
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('QKrU5e', window.scrollY > 10);
    });
}

// Bottom navigation icons (SVG paths from Google Play)
const NAV_ICONS = {
    games: 'M19.3 8.4C19.2169 7.65213 19.0648 6.90427 18.9009 6.09902C18.8676 5.93522 18.8338 5.76904 18.8 5.6L18.8 5.59986C18.7 5.1 18.7 5.09996 18.6 4.7L18.5 4.4C18.2 1.8 16 0 13.3 0H6.7C4.1 0 1.8 1.8 1.4 4.4C1.4 4.43174 1.4 4.4534 1.3968 4.47458C1.38993 4.52014 1.36826 4.56347 1.3 4.7C1.3 5.1 1.3 5.1 1.2 5.6C1.1 6.05 1.025 6.525 0.95 7C0.875 7.475 0.8 7.95 0.7 8.4C0.1 11.9 0 12.5 0 12.7C0 14.2 1.2 15.5 2.8 15.5C3.6 15.5 4.3 15.2 4.8 14.7L7.7 11.9H12.4L15.3 14.8C15.8 15.3 16.5 15.6 17.3 15.6C18.8 15.6 20.1 14.4 20.1 12.8C20.0055 12.5165 19.911 11.9651 19.3946 8.95177L19.3 8.4ZM13 5C13.4971 5 13.9 4.59706 13.9 4.1C13.9 3.60294 13.4971 3.2 13 3.2C12.5029 3.2 12.1 3.60294 12.1 4.1C12.1 4.59706 12.5029 5 13 5ZM15.8 6C15.8 6.49706 15.3971 6.9 14.9 6.9C14.4029 6.9 14 6.49706 14 6C14 5.50294 14.4029 5.1 14.9 5.1C15.3971 5.1 15.8 5.50294 15.8 6ZM10.5 5.4C10.2 5.7 10.2 6.3 10.5 6.6C10.8 6.9 11.4 6.9 11.7 6.6C12 6.3 12 5.7 11.7 5.4C11.4 5.1 10.9 5.1 10.5 5.4ZM13 8.8C13.4971 8.8 13.9 8.39706 13.9 7.9C13.9 7.40294 13.4971 7 13 7C12.5029 7 12.1 7.40294 12.1 7.9C12.1 8.39706 12.5029 8.8 13 8.8ZM6.4 3.5H7.6V5.4H9.5V6.6H7.6V8.5H6.4V6.6H4.5V5.4H6.4V3.5ZM16.5 13.3C16.7 13.5 16.9 13.6 17.2 13.6C17.8 13.6 18.2 13.2 18.2 12.6C18.2 12.7 16.8 4.8 16.8 4.7C16.5 3 15 1.8 13.3 1.8H6.7C4.9 1.8 3.5 3 3.2 4.7C3.2 4.8 1.8 12.7 1.8 12.7C1.8 13.3 2.3 13.7 2.8 13.7C3.1 13.7 3.3 13.6 3.5 13.4L6.9 10H13.1L13.4 10.2L16.5 13.3Z',
    about: 'M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z',
    apps: 'M15 4H18C19.1 4 20 4.9 20 6V9C20 10.1 19.1 11 18 11H15C13.9 11 13 10.1 13 9V6C13 4.9 13.9 4 15 4ZM9 13H6C4.9 13 4 13.9 4 15V18C4 19.1 4.9 20 6 20H9C10.1 20 11 19.1 11 18V15C11 13.9 10.1 13 9 13ZM18 13H15C13.9 13 13 13.9 13 15V18C13 19.1 13.9 20 15 20H18C19.1 20 20 19.1 20 18V15C20 13.9 19.1 13 18 13ZM9 4H6C4.9 4 4 4.9 4 6V9C4 10.1 4.9 11 6 11H9C10.1 11 11 10.1 11 9V6C11 4.9 10.1 4 9 4Z',
    books: 'M12.4996 6.36584L14.001 7.65237V4H11.001V7.65075L12.4996 6.36584ZM10 2H11.001H14.001H15H16.998C18.6461 2 20.001 3.35397 20.001 5.002V18.998C20.001 20.646 18.6461 22 16.998 22H4V2H10ZM18.001 5.002C18.001 4.459 17.542 4 16.998 4H16.001V12L12.5 9L9.001 12V4H6V20H16.998C17.542 20 18.001 19.541 18.001 18.998V5.002Z'
};
