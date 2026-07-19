// 360 Econovations - E-commerce State & UI Utility Library
// Automatically manages the cart state, theme settings, and mobile menu toggling.

(function () {
    // Inject global dark mode stylesheet
    try {
        const injectDarkModeStyles = () => {
            if (document.getElementById('dark-mode-global-overrides')) return;
            const style = document.createElement('style');
            style.id = 'dark-mode-global-overrides';
            style.textContent = `
                /* Body background & base text */
                .dark body {
                    background-color: #181d17 !important;
                    color: #e4eae1 !important;
                }

                /* Header, Navigation & Drawers */
                .dark header, .dark nav, .dark #mobile-nav-drawer {
                    background-color: #20261f !important;
                    border-color: #2c322c !important;
                }
                .dark nav a:not([class*="bg-"]):not([class*="text-primary"]):not([class*="font-bold"]) {
                    color: #c2c9bf !important;
                }
                .dark nav a.text-primary, .dark nav a[class*="text-primary"] {
                    color: #95f8a7 !important;
                    border-color: #95f8a7 !important;
                }
                .dark nav a:hover {
                    color: #95f8a7 !important;
                }
                .dark #theme-toggle-btn, .dark button.relative.text-on-surface-variant {
                    color: #c2c9bf !important;
                }
                .dark #theme-toggle-btn:hover, .dark button.relative.text-on-surface-variant:hover {
                    color: #95f8a7 !important;
                }

                /* Card surfaces and structures */
                .dark .bg-surface-container {
                    background-color: #20261f !important;
                }
                .dark .bg-surface-container-lowest, .dark .bg-white {
                    background-color: #2c322c !important;
                }
                .dark .bg-surface {
                    background-color: #181d17 !important;
                }
                .dark .text-on-surface-variant {
                    color: #c2c9bf !important;
                }
                .dark h3, .dark h2, .dark h1, .dark h4, .dark h5, .dark h6 {
                    color: #f6fbf2 !important;
                }

                /* Buttons and brand colors readability */
                .dark button.bg-primary, .dark .bg-primary-green {
                    background-color: #006d30 !important;
                    color: #ffffff !important;
                }
                .dark .text-primary, .dark .text-primary-green {
                    color: #95f8a7 !important;
                }
                .dark .border-primary, .dark .border-primary-green {
                    border-color: #95f8a7 !important;
                }
                .dark button.border-primary:hover, .dark button.border-primary-green:hover,
                .dark a.border-primary:hover, .dark a.border-primary-green:hover {
                    background-color: rgba(149, 248, 167, 0.1) !important;
                    color: #95f8a7 !important;
                }
                .dark .outline-green {
                    border-color: #95f8a7 !important;
                    color: #95f8a7 !important;
                }
                .dark .outline-green:hover {
                    background-color: rgba(149, 248, 167, 0.1) !important;
                }
                .dark .bg-action-orange {
                    background-color: #F97316 !important;
                    color: #ffffff !important;
                }
                .dark .bg-action-orange:hover {
                    background-color: #EA580C !important;
                }
                .dark .active-method {
                    border-color: #95f8a7 !important;
                    background-color: #2c322c !important;
                }

                /* Filters & Sidebar Controls */
                .dark aside, .dark div[class*="border-outline-variant"], .dark hr {
                    border-color: #2c322c !important;
                }
                .dark button.text-on-surface-variant {
                    color: #c2c9bf !important;
                }
                .dark button.text-on-surface-variant:hover {
                    background-color: #2c322c !important;
                }
                .dark input[type="range"] {
                    background-color: #2c322c !important;
                }
                .dark select, .dark textarea, .dark input:not([type="checkbox"]):not([type="radio"]) {
                    background-color: #20261f !important;
                    border-color: #2c322c !important;
                    color: #f6fbf2 !important;
                }

                /* Inputs & Quantity Selectors */
                .dark div[class*="bg-surface-container-high"],
                .dark button[class*="hover:bg-surface-container-high"] {
                    background-color: #2c322c !important;
                    color: #f6fbf2 !important;
                }
                .dark button[class*="hover:bg-surface-container-high"]:hover {
                    background-color: #3f493f !important;
                }
                .dark input[class*="focus:ring-0"] {
                    background-color: #20261f !important;
                    color: #f6fbf2 !important;
                }

                /* Footer */
                .dark footer {
                    background-color: #111410 !important;
                    border-color: #2c322c !important;
                }

                /* Text colors that are dark/invisible on dark backgrounds */
                .dark .text-on-surface,
                .dark .text-on-background {
                    color: #e4eae1 !important;
                }
                .dark [class*="text-on-surface-variant/"] {
                    color: #c2c9bf !important;
                }
                .dark .text-on-primary-fixed,
                .dark .text-on-secondary-fixed,
                .dark .text-on-tertiary-fixed,
                .dark .text-on-secondary-fixed-variant,
                .dark .text-on-error-container {
                    color: #e4eae1 !important;
                }
                .dark .text-outline {
                    color: #8e9a8d !important;
                }
                .dark .text-secondary {
                    color: #95f8a7 !important;
                }

                /* Badge backgrounds and text in dark mode */
                .dark .bg-tertiary-fixed {
                    background-color: #4a2900 !important;
                }
                .dark .text-on-tertiary-fixed-variant {
                    color: #ffdbca !important;
                }
                .dark .bg-secondary-container {
                    background-color: #003317 !important;
                }
                .dark .text-on-secondary-container {
                    color: #81f8a4 !important;
                }

                /* Footer link hover visibility */
                .dark footer a:hover {
                    color: #95f8a7 !important;
                }

                /* Border and background outline variants */
                .dark [class*="border-outline-variant"] {
                    border-color: #2c322c !important;
                }
                .dark .bg-outline-variant {
                    background-color: #2c322c !important;
                }

                /* Additional surface backgrounds for dark mode */
                .dark .bg-surface-container-low {
                    background-color: #20261f !important;
                }
                .dark .bg-surface-container-high {
                    background-color: #2c322c !important;
                }
                .dark .bg-surface-container-highest {
                    background-color: #2c322c !important;
                }
                .dark .bg-surface-variant {
                    background-color: #2c322c !important;
                }
                .dark .bg-surface-bright {
                    background-color: #20261f !important;
                }
                .dark .bg-surface-dim {
                    background-color: #111410 !important;
                }

                /* Hover states for surface backgrounds */
                .dark [class*="hover:bg-surface-variant"]:hover {
                    background-color: #3f493f !important;
                }
                .dark [class*="hover:bg-surface-container-low"]:hover {
                    background-color: #2c322c !important;
                }
                .dark [class*="hover:bg-outline-variant"]:hover {
                    background-color: #2c322c !important;
                }

                /* Secondary fixed background */
                .dark .bg-secondary-fixed {
                    background-color: #003317 !important;
                }

                /* Additional text color safety */
                .dark .text-on-primary-fixed-variant {
                    color: #95f8a7 !important;
                }

                /* Selection color in dark mode */
                .dark ::selection {
                    color: #00210a !important;
                    background-color: #95f8a7 !important;
                }

                /* Keep dark text on gold/yellow badges (they stay bright in dark mode) */
                .dark .bg-highlight-gold,
                .dark .bg-\\[\\#D4A017\\] {
                    color: #181d17 !important;
                }
                .dark .bg-highlight-gold .text-on-background,
                .dark .bg-highlight-gold.text-on-background {
                    color: #181d17 !important;
                }

                /* Glass card background in dark mode */
                .dark .glass-card {
                    background: rgba(32, 38, 31, 0.8) !important;
                    border: 1px solid rgba(44, 50, 44, 0.3) !important;
                }

                /* Surface borders in dark mode */
                .dark .border-surface-container,
                .dark [class*="border-surface-container"] {
                    border-color: #2c322c !important;
                }
                .dark .border-surface-variant,
                .dark [class*="border-surface-variant"] {
                    border-color: #2c322c !important;
                }
                .dark .border-surface {
                    border-color: #2c322c !important;
                }

                /* Shadow adjustments for dark mode */
                .dark .shadow-low,
                .dark .shadow-sm,
                .dark .shadow-lg,
                .dark .eco-shadow,
                .dark .card-shadow,
                .dark .success-card-shadow {
                    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3) !important;
                }
                .dark .shadow-hover:hover,
                .dark .eco-shadow-hover:hover,
                .dark .card-shadow-hover:hover {
                    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.4) !important;
                }

                /* Error and tertiary text colors for dark mode readability */
                .dark .text-error,
                .dark [class*="text-error"],
                .dark .group-hover\\:text-error:hover {
                    color: #ff6b6b !important;
                }
                .dark .text-tertiary {
                    color: #ffb690 !important;
                }
            `;
            (document.head || document.documentElement).appendChild(style);
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', injectDarkModeStyles);
        } else {
            injectDarkModeStyles();
        }
    } catch (e) {
        console.error("Failed to inject dark mode style overrides", e);
    }

    // Immediately apply theme from localStorage to prevent flash of light theme
    (function () {
        const root = document.documentElement;
        const currentTheme = localStorage.getItem('theme') || 'light';
        if (currentTheme === 'dark') {
            root.classList.add('dark');
            root.classList.remove('light');
        } else {
            root.classList.remove('dark');
            root.classList.add('light');
        }
    })();

    // ----------------------------------------------------
    // 1. Core Cart State Helpers
    // ----------------------------------------------------
    window.Cart = {
        get() {
            try {
                return JSON.parse(localStorage.getItem('360_eco_cart')) || [];
            } catch (e) {
                return [];
            }
        },

        save(cart) {
            localStorage.setItem('360_eco_cart', JSON.stringify(cart));
            // Dispatch a global custom event to notify other scripts on the same page
            window.dispatchEvent(new CustomEvent('cartUpdated', { detail: cart }));
            // Update the cart badge UI
            this.updateBadge();
        },

        add(id, name, price, img, unit = 'kg', qty = 1) {
            const cart = this.get();
            const existing = cart.find(item => item.id === id);
            if (existing) {
                existing.qty += qty;
            } else {
                cart.push({ id, name, price, img, unit, qty });
            }
            this.save(cart);
        },

        updateQty(id, qty) {
            let cart = this.get();
            const existing = cart.find(item => item.id === id);
            if (existing) {
                existing.qty = Math.max(1, qty);
                this.save(cart);
            }
        },

        remove(id) {
            let cart = this.get();
            cart = cart.filter(item => item.id !== id);
            this.save(cart);
        },

        clear() {
            this.save([]);
        },

        count() {
            return this.get().reduce((sum, item) => sum + item.qty, 0);
        },

        updateBadge() {
            const count = this.count();
            // Look for any shopping cart container
            const cartBtn = document.querySelector('button[onclick*="shopping_cart"], a[href*="shopping_cart"]');
            if (cartBtn) {
                // Find or create badge
                let badge = cartBtn.querySelector('.cart-badge-dynamic') || 
                            cartBtn.querySelector('#cart-badge') || 
                            cartBtn.querySelector('span.absolute');
                
                if (count > 0) {
                    if (!badge) {
                        badge = document.createElement('span');
                        badge.className = 'cart-badge-dynamic absolute top-0 right-0 bg-[#F97316] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold';
                        cartBtn.appendChild(badge);
                    }
                    badge.textContent = count;
                    badge.style.display = 'flex';
                } else {
                    if (badge) {
                        badge.style.display = 'none';
                    }
                }
            }
        }
    };

    // ----------------------------------------------------
    // 2. Order History Management
    // ----------------------------------------------------
    window.Orders = {
        get() {
            try {
                return JSON.parse(localStorage.getItem('360_eco_orders')) || this.getDefaults();
            } catch (e) {
                return this.getDefaults();
            }
        },
        save(orders) {
            localStorage.setItem('360_eco_orders', JSON.stringify(orders));
        },
        add(order) {
            const orders = this.get();
            orders.unshift(order); // Put new orders at the top
            this.save(orders);
        },
        getDefaults() {
            return [
                {
                    id: 'ECO-2948-X',
                    date: 'Oct 24, 2024',
                    status: 'Delivered',
                    items: [
                        { name: 'Industrial Glass Cullet (Amber)', qty: 500, price: 40, unit: 'kg' }
                    ],
                    shipping: 1500,
                    total: 21500
                },
                {
                    id: 'ECO-1822-Y',
                    date: 'Sep 12, 2024',
                    status: 'Delivered',
                    items: [
                        { name: 'High-Density Biomass Briquettes', qty: 200, price: 25, unit: 'kg' }
                    ],
                    shipping: 800,
                    total: 5800
                }
            ];
        }
    };

    // ----------------------------------------------------
    // 3. UI Inits (Theme Toggle, Loader, Partners & Mobile/Footer Links)
    // ----------------------------------------------------
    document.addEventListener('DOMContentLoaded', () => {
        // Determine base path offset (homepage vs parent index)
        const isSubpage = window.location.pathname.includes('/homepage/') || 
                          window.location.pathname.includes('/about_us/') ||
                          window.location.pathname.includes('/product_catalog/') ||
                          window.location.pathname.includes('/product_detail_briquettes/') ||
                          window.location.pathname.includes('/shopping_cart/') ||
                          window.location.pathname.includes('/checkout_delivery_payment/') ||
                          window.location.pathname.includes('/checkout_gate_sign_in/') ||
                          window.location.pathname.includes('/my_orders_account_area/') ||
                          window.location.pathname.includes('/order_confirmation/') ||
                          window.location.pathname.includes('/contact_us/') ||
                          window.location.pathname.includes('/privacy_policy/') ||
                          window.location.pathname.includes('/terms_of_service/');
        
        const prefix = isSubpage ? '../' : './360-Econovations-main/';

        // 3.0 Eco-Conscious Loading Screen Overlay Injection
        const injectLoadingScreen = () => {
            if (document.getElementById('site-loader-overlay') || window.location.search.includes('play_game=true')) return;
            
            const overlay = document.createElement('div');
            overlay.id = 'site-loader-overlay';
            overlay.className = 'fixed inset-0 z-[200] bg-[#f6fbf2] dark:bg-[#111410] text-on-background dark:text-inverse-on-surface flex flex-col items-center justify-center p-6 transition-opacity duration-500 ease-out';
            
            const tips = [
                "Every returnable glass bottle recycled saves enough energy to power a computer for 25 minutes.",
                "Biomass briquettes burn longer and generate 90% less smoke than standard wood charcoal.",
                "Recycling 1 ton of glass saves 1.2 tons of raw materials like sand and limestone.",
                "360 Econovations partners with local hospitality bars to intercept dumpsite waste.",
                "Clean color sorting increases glass recycling value for manufacturers by 50%.",
                "By choosing biomass briquettes, you prevent deforestation across Kenya.",
                "Returning glass bottles under the Rudisha program cuts carbon emissions by 40%."
            ];
            const randomTip = tips[Math.floor(Math.random() * tips.length)];
            
            overlay.innerHTML = `
                <div class="flex flex-col items-center gap-6 max-w-md text-center animate-in fade-in zoom-in duration-500">
                    <!-- Logo Animation Container -->
                    <div id="loading-logo-container" class="relative w-28 h-28 flex items-center justify-center">
                        <div class="w-16 h-16 rounded-full border-4 border-outline-variant/30 border-t-[#15803D] animate-spin"></div>
                        <div class="absolute inset-0 flex items-center justify-center font-bold text-primary dark:text-primary-fixed text-lg">360</div>
                    </div>
                    
                    <div class="space-y-3">
                        <span class="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-wider">Eco Message</span>
                        <p id="loading-tip-text" class="text-on-surface dark:text-inverse-on-surface font-body-lg font-semibold text-lg leading-relaxed px-4">
                            "${randomTip}"
                        </p>
                    </div>
                    
                    <p class="text-xs text-on-surface-variant/60 animate-pulse mt-4">Restoring circular balance...</p>
                </div>
            `;
            
            document.body.appendChild(overlay);
            
            // Fade out after assets are fully loaded and min duration has passed
            const startTime = Date.now();
            let loaderTimeout = null;

            const hideLoader = () => {
                if (loaderTimeout) clearTimeout(loaderTimeout);
                const elapsedTime = Date.now() - startTime;
                const minDelay = 3000; // minimum duration of 3.0s
                const remainingDelay = Math.max(0, minDelay - elapsedTime);
                
                setTimeout(() => {
                    overlay.classList.add('opacity-0');
                    setTimeout(() => {
                        overlay.remove();
                    }, 500); // match CSS duration-500
                }, remainingDelay);
            };
            
            // Timeout fallback: if the site hangs/fails to load within 7 seconds, transition to the game automatically!
            loaderTimeout = setTimeout(() => {
                if (document.getElementById('site-loader-overlay')) {
                    console.warn("Page load is hanging or failed. Launching Eco-Dino game automatically.");
                    overlay.remove();
                    if (window.openEcoDinoGame) {
                        window.openEcoDinoGame();
                    }
                }
            }, 7000);

            if (document.readyState === 'complete') {
                hideLoader();
            } else {
                window.addEventListener('load', hideLoader);
            }
        };
        injectLoadingScreen();

        // Init cart badge on load
        Cart.updateBadge();

        // Bind unified WhatsApp float button link
        const whatsappBtn = document.getElementById('whatsapp-float');
        if (whatsappBtn) {
            whatsappBtn.href = "https://wa.me/254743049413";
            whatsappBtn.setAttribute('target', '_blank');
            whatsappBtn.setAttribute('rel', 'noopener noreferrer');
        }

        // 3.1 Dark Mode Toggle Button Injection & Click Handling
        const root = document.documentElement;
        const cartBtn = document.querySelector('button[onclick*="shopping_cart"], a[href*="shopping_cart"]');
        if (cartBtn && !document.getElementById('theme-toggle-btn')) {
            const themeBtn = document.createElement('button');
            themeBtn.className = 'p-2 text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center mr-2';
            themeBtn.id = 'theme-toggle-btn';
            themeBtn.setAttribute('aria-label', 'Toggle Dark Mode');
            
            const updateThemeIcon = (dark) => {
                themeBtn.innerHTML = `<span class="material-symbols-outlined">${dark ? 'light_mode' : 'dark_mode'}</span>`;
            };
            
            updateThemeIcon(root.classList.contains('dark'));
            
            themeBtn.onclick = () => {
                const isDark = root.classList.toggle('dark');
                root.classList.toggle('light', !isDark);
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                updateThemeIcon(isDark);
            };
            
            cartBtn.parentElement.insertBefore(themeBtn, cartBtn);
        }

        // 3.1.5 Hospitality Partner Button & Links Injection
        // Injection into Desktop Navbar link list
        const navLinks = document.querySelector('nav .hidden.md\\:flex');
        if (navLinks && !document.getElementById('nav-partner-link')) {
            const partnerLink = document.createElement('a');
            partnerLink.id = 'nav-partner-link';
            partnerLink.className = 'text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors font-label-sm text-label-sm cursor-pointer';
            partnerLink.textContent = 'Partner';
            partnerLink.href = `${prefix}contact_us/code.html?partner=true`;
            navLinks.appendChild(partnerLink);
        }

        // Injection into Right Header Menu (Next to Sign In)
        const headerRight = document.querySelector('nav .flex.items-center.gap-md');
        if (headerRight && !document.getElementById('header-partner-btn')) {
            const partnerBtn = document.createElement('button');
            partnerBtn.id = 'header-partner-btn';
            partnerBtn.className = 'hidden md:block font-label-sm text-label-sm px-4 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-on-primary transition-all cursor-pointer font-bold';
            partnerBtn.textContent = 'Partner With Us';
            partnerBtn.onclick = () => { window.location.href = `${prefix}contact_us/code.html?partner=true`; };
            
            const signInBtn = headerRight.querySelector('button[onclick*="checkout_gate_sign_in"], button[onclick*="checkout"]');
            if (signInBtn) {
                headerRight.insertBefore(partnerBtn, signInBtn);
            } else {
                headerRight.appendChild(partnerBtn);
            }
        }

        // Dynamic Mobile Menu Hamburger Injection (Responsiveness Fix)
        if (headerRight && !headerRight.querySelector('button.md\\:hidden, button[data-icon="menu"]')) {
            const menuBtn = document.createElement('button');
            menuBtn.className = 'md:hidden text-on-surface-variant cursor-pointer ml-2 flex items-center justify-center';
            menuBtn.setAttribute('aria-label', 'Open Menu');
            menuBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size: 28px;">menu</span>';
            menuBtn.onclick = (e) => {
                e.preventDefault();
                toggleMobileMenu();
            };
            headerRight.appendChild(menuBtn);
        }

        // 3.2 Mobile Navigation Drawer
        // Look for any mobile menu triggers
        const menuTriggers = document.querySelectorAll('button.md\\:hidden, button[data-icon="menu"]');
        menuTriggers.forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                toggleMobileMenu();
            };
        });

        function toggleMobileMenu() {
            let drawer = document.getElementById('mobile-nav-drawer');
            if (!drawer) {
                drawer = document.createElement('div');
                drawer.id = 'mobile-nav-drawer';
                drawer.className = 'fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex flex-col p-6 transition-transform duration-300 translate-x-full dark:bg-inverse-surface/90 dark:text-inverse-on-surface';
                drawer.innerHTML = `
                    <div class="flex justify-between items-center mb-lg">
                        <span class="font-display-lg-mobile text-headline-sm font-bold text-primary dark:text-primary-fixed">MENU</span>
                        <button id="close-mobile-nav" class="material-symbols-outlined text-4xl text-on-surface dark:text-inverse-on-surface">close</button>
                    </div>
                    <nav class="flex flex-col gap-md text-lg font-semibold">
                        <a class="hover:text-primary dark:hover:text-primary-fixed transition-colors py-2 border-b border-outline-variant/20" href="${prefix}homepage/code.html">Home</a>
                        <a class="hover:text-primary dark:hover:text-primary-fixed transition-colors py-2 border-b border-outline-variant/20" href="${prefix}product_catalog/code.html">Shop Catalog</a>
                        <a class="hover:text-primary dark:hover:text-primary-fixed transition-colors py-2 border-b border-outline-variant/20" href="${prefix}about_us/code.html">About Us</a>
                        <a class="hover:text-primary dark:hover:text-primary-fixed transition-colors py-2 border-b border-outline-variant/20" href="${prefix}contact_us/code.html?partner=true">Partner with Us</a>
                        <a class="hover:text-primary dark:hover:text-primary-fixed transition-colors py-2 border-b border-outline-variant/20" href="${prefix}my_orders_account_area/code.html">My Account & Orders</a>
                        <a class="hover:text-primary dark:hover:text-primary-fixed transition-colors py-2 border-b border-outline-variant/20" href="${prefix}contact_us/code.html">Contact Us</a>
                        <a class="hover:text-primary dark:hover:text-primary-fixed transition-colors py-2" href="${prefix}shopping_cart/code.html">View Cart</a>
                    </nav>
                    <div class="mt-auto flex flex-col gap-sm">
                        <button class="bg-[#F97316] text-white font-bold py-3 rounded-full hover:bg-[#EA580C] transition-all" onclick="window.location.href='${prefix}checkout_gate_sign_in/code.html'">
                            Sign In / Register
                        </button>
                    </div>
                `;
                document.body.appendChild(drawer);

                // Wire up close button
                document.getElementById('close-mobile-nav').onclick = () => {
                    drawer.classList.add('translate-x-full');
                };
            }
            
            // Toggle open state
            setTimeout(() => {
                drawer.classList.toggle('translate-x-full');
            }, 10);
        }

        // 3.4 Dynamic Footer Links (Partner & Eco-Dino Game)
        const quickLinksHeader = Array.from(document.querySelectorAll('footer h5')).find(h => h.textContent.trim() === 'Quick Links');
        if (quickLinksHeader) {
            const ul = quickLinksHeader.nextElementSibling;
            if (ul) {
                // Partner link
                if (!document.getElementById('footer-partner-link')) {
                    const li = document.createElement('li');
                    li.id = 'footer-partner-link';
                    li.innerHTML = `<a class="text-on-surface-variant font-label-sm hover:text-secondary transition-colors" href="${prefix}contact_us/code.html?partner=true">Partner with Us</a>`;
                    ul.appendChild(li);
                }
                // Play Game link
                if (!document.getElementById('footer-dino-link')) {
                    const li = document.createElement('li');
                    li.id = 'footer-dino-link';
                    li.innerHTML = `<a class="text-secondary font-label-sm hover:text-primary transition-colors font-bold flex items-center gap-1" href="${prefix}homepage/code.html?play_game=true">Play Eco-Dino 🦖</a>`;
                    ul.appendChild(li);
                }
            }
        }

        // 3.5 Check URL Params to trigger game immediately
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('play_game') === 'true') {
            setTimeout(() => {
                window.openEcoDinoGame();
            }, 500);
        }

        // 3.6 Check URL Params on contact page to pre-fill partner details
        if (window.location.pathname.includes('/contact_us/')) {
            if (urlParams.get('partner') === 'true') {
                const messageBox = document.querySelector('textarea');
                const nameLabel = document.querySelector('h1');
                if (nameLabel) {
                    nameLabel.textContent = "Hospitality Partnership";
                }
                if (messageBox) {
                    messageBox.value = "Hello 360 Econovations Team, I am a hospitality partner/bar owner interested in setting up an intact bottle collection & return (Rudisha) program at my premises. Please reach out to me with registration and supply details.";
                    messageBox.focus();
                }
            }
        }

        // 3.7 Offline Auto-play Detection & Event Listeners
        if (!navigator.onLine) {
            setTimeout(() => {
                if (window.openEcoDinoGame) window.openEcoDinoGame();
            }, 1000);
        }
        window.addEventListener('offline', () => {
            if (window.openEcoDinoGame) window.openEcoDinoGame();
        });
    });

    // ----------------------------------------------------
    // 4. HTML5 CANVAS ECO-DINO GAME MVP ENGINE
    // ----------------------------------------------------
    window.openEcoDinoGame = function(onCompleteCallback = null) {
        // Remove existing modal if any
        const oldModal = document.getElementById('eco-dino-modal');
        if (oldModal) oldModal.remove();

        const isCheckout = (onCompleteCallback !== null);

        // Modal markup creation
        const modal = document.createElement('div');
        modal.id = 'eco-dino-modal';
        modal.className = 'fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 select-none';
        
        modal.innerHTML = `
            <div class="bg-[#f6fbf2] dark:bg-[#20261f] border-2 border-[#15803D] w-full max-w-2xl rounded-2xl p-6 flex flex-col gap-4 text-on-surface dark:text-inverse-on-surface shadow-2xl relative">
                
                <!-- Close/Skip controls -->
                <div class="flex justify-between items-center border-b border-outline-variant/30 pb-3">
                    <div>
                        <h2 class="text-headline-sm font-bold text-primary dark:text-primary-fixed flex items-center gap-2">
                            <span>🦖</span> Eco-Dino Runner MVP
                        </h2>
                        <p class="text-xs text-on-surface-variant/80 mt-1">
                            ${isCheckout ? 'Verifying payment credentials with Safaricom...' : 'Play & learn circular economics!'}
                        </p>
                    </div>
                    ${!isCheckout ? `
                        <button id="close-game-btn" class="material-symbols-outlined text-3xl hover:text-primary cursor-pointer">close</button>
                    ` : ''}
                </div>

                <!-- Facts Bar -->
                <div class="bg-surface-container-low dark:bg-[#2c322c] border border-outline-variant/20 p-3 rounded-lg text-center font-bold text-sm min-h-[50px] flex items-center justify-center text-primary dark:text-primary-fixed" id="dino-facts-ticker">
                    "Recycling 1 ton of glass saves 1.2 tons of sand & limestone."
                </div>

                <!-- Game Container -->
                <div class="relative bg-white dark:bg-[#111410] border border-outline-variant rounded-xl overflow-hidden p-2 flex justify-center items-center">
                    <canvas id="dino-canvas" width="600" height="150" class="w-full max-w-[600px] h-[150px] cursor-pointer"></canvas>
                    
                    <!-- Overlay Screen (Start / Game Over) -->
                    <div id="dino-overlay" class="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center gap-3">
                        <h3 id="dino-overlay-title" class="text-headline-sm font-bold">PRESS SPACEBAR OR TAP TO PLAY</h3>
                        <p id="dino-overlay-subtitle" class="text-xs opacity-80">Avoid plastic bottles & pollution clouds!</p>
                        <button id="dino-play-btn" class="bg-[#F97316] hover:bg-[#EA580C] px-6 py-2 rounded-full text-white font-bold cursor-pointer transition-all">Play</button>
                    </div>
                </div>

                <div class="flex justify-between items-center text-xs opacity-75 font-semibold">
                    <span>Jump: Spacebar / Arrow Up / Tap screen</span>
                    <span id="dino-high-score">High Score: 0</span>
                </div>

                <!-- Bottom Verification Banner if Checkout -->
                ${isCheckout ? `
                    <div class="flex justify-between items-center border-t border-outline-variant/30 pt-3 mt-1">
                        <span id="mpesa-timer" class="font-bold text-[#15803D] dark:text-primary-fixed">Confirming order in 15s...</span>
                        <button id="skip-confirm-btn" class="bg-[#15803D] hover:bg-[#00652c] text-white px-6 py-3 rounded-full font-bold shadow-md cursor-pointer transition-all">
                            Skip & Confirm Order
                        </button>
                    </div>
                ` : ''}
            </div>
        `;
        document.body.appendChild(modal);

        // Core Eco-Facts list
        const facts = [
            "Recycling 1 ton of glass saves 1.2 tons of sand & limestone.",
            "Biomass briquettes burn longer and generate 90% less smoke than charcoal.",
            "Returnable glass bottles are returned up to 25 times under the Rudisha program.",
            "Recycling glass reduces manufacturing energy consumption by 30%.",
            "Every returnable glass bottle returned prevents forest clearing for firewood.",
            "Clean color sorting increases cullet value for glass manufacturers by 50%.",
            "Sourcing glass via local micro-warehouses saves up to 40% in logistics costs."
        ];
        
        let factInterval = setInterval(() => {
            const ticker = document.getElementById('dino-facts-ticker');
            if (ticker) {
                ticker.textContent = '"' + facts[Math.floor(Math.random() * facts.length)] + '"';
            }
        }, 5000);

        // Game Loop Variables
        const canvas = document.getElementById('dino-canvas');
        const ctx = canvas.getContext('2d');
        const overlay = document.getElementById('dino-overlay');
        const overlayTitle = document.getElementById('dino-overlay-title');
        const overlaySubtitle = document.getElementById('dino-overlay-subtitle');
        const playBtn = document.getElementById('dino-play-btn');
        const highScoreEl = document.getElementById('dino-high-score');

        let isRunning = false;
        let score = 0;
        let highScore = parseInt(localStorage.getItem('eco_dino_highscore') || '0', 10);
        highScoreEl.textContent = `High Score: ${highScore}`;

        let gameFrame = 0;
        let player = { x: 50, y: 110, w: 20, h: 20, vy: 0, gravity: 0.6, jumpPower: -9, isJumping: false };
        let obstacles = [];
        let clouds = [];
        let speed = 4;

        // Draw Player (Cute Green Recycling Bin)
        function drawPlayer() {
            ctx.fillStyle = "#15803D"; // Brand Primary Green
            ctx.fillRect(player.x, player.y, player.w, player.h);
            
            // White recycle-looking stripe
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(player.x + 4, player.y + 4, player.w - 8, 3);
            
            // Animated legs
            const legLen = (Math.floor(gameFrame / 6) % 2 === 0) ? 5 : 2;
            ctx.fillStyle = "#15803D";
            ctx.fillRect(player.x + 3, player.y + player.h, 4, legLen);
            ctx.fillRect(player.x + 13, player.y + player.h, 4, 7 - legLen);
        }

        // Spawn and draw Obstacles (Waste/Pollution elements)
        function drawObstacles() {
            obstacles.forEach((obs, idx) => {
                obs.x -= speed;
                
                if (obs.type === 0) {
                    // Plastic bottle obstacle
                    ctx.fillStyle = "#7f7f7f"; // Plastic grey
                    ctx.fillRect(obs.x, obs.y, obs.w, obs.h);
                    ctx.fillStyle = "#0000ff"; // Blue bottle cap
                    ctx.fillRect(obs.x + 2, obs.y - 3, obs.w - 4, 3);
                } else {
                    // Pollution cloud
                    ctx.fillStyle = "#3f493f"; // Soot charcoal
                    ctx.fillRect(obs.x, obs.y, obs.w, obs.h);
                    ctx.fillRect(obs.x + 3, obs.y - 3, obs.w - 6, 3);
                    ctx.fillRect(obs.x - 3, obs.y + 3, obs.w + 6, obs.h - 6);
                }
                
                // Collision Detection
                if (
                    player.x < obs.x + obs.w &&
                    player.x + player.w > obs.x &&
                    player.y < obs.y + obs.h &&
                    player.y + player.h > obs.y
                ) {
                    gameOver();
                }
            });

            // Filter out-of-bounds obstacles
            obstacles = obstacles.filter(obs => obs.x > -50);

            // Spawn logic
            if (gameFrame % 100 === 0 && Math.random() > 0.4) {
                const type = Math.random() > 0.5 ? 0 : 1;
                const obsHeight = type === 0 ? 24 : 18;
                obstacles.push({
                    x: 610,
                    y: 130 - obsHeight,
                    w: type === 0 ? 10 : 20,
                    h: obsHeight,
                    type: type
                });
            }
        }

        // Draw Sky clouds
        function drawClouds() {
            if (gameFrame % 200 === 0) {
                clouds.push({ x: 610, y: 15 + Math.random() * 40, w: 30, h: 10, speed: 0.5 + Math.random() * 0.5 });
            }
            clouds.forEach(cloud => {
                cloud.x -= cloud.speed;
                ctx.fillStyle = "#e4eae1"; // Light grey cloud
                ctx.fillRect(cloud.x, cloud.y, cloud.w, cloud.h);
                ctx.fillRect(cloud.x + 5, cloud.y - 4, cloud.w - 10, 4);
            });
            clouds = clouds.filter(c => c.x > -50);
        }

        // Core Jump function
        function jump() {
            if (!isRunning) {
                startGame();
                return;
            }
            if (!player.isJumping) {
                player.vy = player.jumpPower;
                player.isJumping = true;
            }
        }

        // Start Game
        function startGame() {
            isRunning = true;
            score = 0;
            speed = 4;
            player.y = 110;
            player.vy = 0;
            player.isJumping = false;
            obstacles = [];
            clouds = [];
            overlay.classList.add('hidden');
            gameLoop();
        }

        // Game Over
        function gameOver() {
            isRunning = false;
            overlay.classList.remove('hidden');
            overlayTitle.textContent = "GAME OVER";
            overlaySubtitle.textContent = `Score: ${score} • Eco-Tip: check the ticker above!`;
            playBtn.textContent = "Restart";
            
            if (score > highScore) {
                highScore = score;
                localStorage.setItem('eco_dino_highscore', highScore);
                highScoreEl.textContent = `High Score: ${highScore}`;
            }
        }

        // Loop
        function gameLoop() {
            if (!isRunning) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            gameFrame++;

            // Update Physics
            player.vy += player.gravity;
            player.y += player.vy;
            if (player.y >= 110) {
                player.y = 110;
                player.vy = 0;
                player.isJumping = false;
            }

            // Draw Environment ground line
            ctx.strokeStyle = "#6f7a6e";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, 130);
            ctx.lineTo(600, 130);
            ctx.stroke();

            // Draw Game elements
            drawClouds();
            drawObstacles();
            drawPlayer();

            // Draw Score
            score++;
            ctx.fillStyle = "#181d17";
            ctx.font = "bold 12px monospace";
            ctx.fillText(`SCORE: ${score}`, 10, 20);

            // Increment difficulty slowly
            if (gameFrame % 300 === 0) {
                speed += 0.5;
            }

            requestAnimationFrame(gameLoop);
        }

        // Keyboard & Touch events
        const keyHandler = (e) => {
            if (e.code === "Space" || e.code === "ArrowUp") {
                e.preventDefault();
                jump();
            }
        };
        window.addEventListener('keydown', keyHandler);

        canvas.addEventListener('click', (e) => {
            e.preventDefault();
            jump();
        });
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            jump();
        }, { passive: false });

        playBtn.onclick = () => {
            startGame();
        };

        // Wire up Skip/Close controls
        const cleanupGame = () => {
            clearInterval(factInterval);
            window.removeEventListener('keydown', keyHandler);
            modal.remove();
        };

        const closeBtn = document.getElementById('close-game-btn');
        if (closeBtn) {
            closeBtn.onclick = () => {
                cleanupGame();
            };
        }

        // Handle Checkout Countdown if callback exists
        if (isCheckout) {
            let secondsLeft = 15;
            const timerEl = document.getElementById('mpesa-timer');
            const skipBtn = document.getElementById('skip-confirm-btn');
            
            const countdownInterval = setInterval(() => {
                secondsLeft--;
                if (timerEl) {
                    timerEl.textContent = `Confirming order in ${secondsLeft}s...`;
                }
                if (secondsLeft <= 0) {
                    clearInterval(countdownInterval);
                    cleanupAndRedirect();
                }
            }, 1000);

            const cleanupAndRedirect = () => {
                clearInterval(countdownInterval);
                cleanupGame();
                onCompleteCallback();
            };

            if (skipBtn) {
                skipBtn.onclick = () => {
                    cleanupAndRedirect();
                };
            }
        }
    };

    // Handle cross-tab storage changes to keep UI synchronized
    window.addEventListener('storage', (e) => {
        if (e.key === '360_eco_cart') {
            Cart.updateBadge();
            window.dispatchEvent(new CustomEvent('cartUpdated', { detail: Cart.get() }));
        } else if (e.key === 'theme') {
            const root = document.documentElement;
            const dark = e.newValue === 'dark';
            root.classList.toggle('dark', dark);
            root.classList.toggle('light', !dark);
            const themeBtn = document.getElementById('theme-toggle-btn');
            if (themeBtn) {
                themeBtn.innerHTML = `<span class="material-symbols-outlined">${dark ? 'light_mode' : 'dark_mode'}</span>`;
            }
        }
    });
})();