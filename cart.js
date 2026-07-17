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
    // 3. UI Inits (Theme Toggle & Mobile Menu Drawer)
    // ----------------------------------------------------
    document.addEventListener('DOMContentLoaded', () => {
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
    });

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