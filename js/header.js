/*
 * Shared Google Play-style header, used by index.html and every app preview page.
 *
 * Call renderHeader() at the top of <body>:
 *   renderHeader({root: './', tab: 'apps'})            on index.html
 *   renderHeader({root: '../', tab: 'apps', links: true}) on a preview page
 *
 *   root   path back to the portfolio home page
 *   tab    which tab is highlighted: 'apps' or 'games'
 *   links  true on preview pages: Games/Apps go back to the home page
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
                                    </button>
                                    <button role="tab" aria-selected="false" tabindex="-1" disabled
                                            class="VfPpkd-AznF2e VfPpkd-AznF2e-OWXEXe-jJNx8e-QBLLGd WbUJNb FEsNhd  ROhV3c"><span
                                            class="VfPpkd-N5Lhkf"><span class="VfPpkd-jY41G-V67aGc">Movies</span><span
                                            class="VfPpkd-AznF2e-uDEFge rvBHac kte1hc"><span
                                            class="VfPpkd-AznF2e-wEcVzc VfPpkd-AznF2e-wEcVzc-OWXEXe-NowJzb pawmVc"></span></span>
                                        </span><span class="VfPpkd-YVzG2b"></span>
                                        <div class="VfPpkd-wJCpie-LhBDec"></div>
                                    </button><button role="tab" aria-selected="false" tabindex="-1" disabled
                                            class="VfPpkd-AznF2e VfPpkd-AznF2e-OWXEXe-jJNx8e-QBLLGd WbUJNb FEsNhd  AthEce"><span
                                            class="VfPpkd-N5Lhkf"><span class="VfPpkd-jY41G-V67aGc">Books</span><span
                                            class="VfPpkd-AznF2e-uDEFge rvBHac kte1hc"><span
                                            class="VfPpkd-AznF2e-wEcVzc VfPpkd-AznF2e-wEcVzc-OWXEXe-NowJzb pawmVc"></span></span></span><span
                                            class="VfPpkd-YVzG2b"></span>
                                        <div class="VfPpkd-wJCpie-LhBDec"></div>
                                    </button>
                                    <button role="tab" aria-selected="false" tabindex="-1" disabled
                                            class="VfPpkd-AznF2e VfPpkd-AznF2e-OWXEXe-jJNx8e-QBLLGd WbUJNb FEsNhd  dUghbc"><span
                                            class="VfPpkd-N5Lhkf"><span class="VfPpkd-jY41G-V67aGc">Kids</span><span
                                            class="VfPpkd-AznF2e-uDEFge rvBHac kte1hc"><span
                                            class="VfPpkd-AznF2e-wEcVzc VfPpkd-AznF2e-wEcVzc-OWXEXe-NowJzb pawmVc"></span></span>
                                        </span><span class="VfPpkd-YVzG2b"></span>
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
    const setActive = (button, active) => {
        button.classList.toggle('VfPpkd-AznF2e-OWXEXe-auswjd', active);
        button.querySelector('.VfPpkd-AznF2e-uDEFge').classList.toggle('VfPpkd-AznF2e-uDEFge-OWXEXe-auswjd', active);
        button.setAttribute('aria-selected', active);
        button.tabIndex = active ? 0 : -1;
    };
    setActive(games, tab === 'games');
    setActive(apps, tab === 'apps');

    if (links) {
        games.addEventListener('click', () => location.href = home + '#games');
        apps.addEventListener('click', () => location.href = home);
    }

    // Header shadow once the page is scrolled
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('QKrU5e', window.scrollY > 10);
    });
}
