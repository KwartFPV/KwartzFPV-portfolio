document.addEventListener("DOMContentLoaded", () => {
    // --- 1. DOM ELEMENTS ---
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const video = document.getElementById('bg-video');

    // --- 2. MENU MOBILE ---
    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };

        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
            });
        });
    }

    // --- 3. SMOOTH SCROLL (PC Only > 1024px) ---
    if (window.innerWidth > 1024) {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                lenis.scrollTo(this.getAttribute('href'));
            });
        });
    }

    // --- 4. VIDEO BACKGROUND FIX ---
    if (video) {
        const playVideo = () => {
            if (video.paused) {
                video.play().catch(() => {});
            }
        };
        playVideo();
        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "visible") playVideo();
        });
        window.addEventListener("pageshow", playVideo);
    }

    // --- 5. MOUNTAIN DIVE EFFECT ---
    if (window.innerWidth > 1024) {
        const homeSection = document.querySelector('.home');
        const videoElement = document.querySelector('.back-video');
        const overlay = document.querySelector('.overlay');
        const homeContent = document.querySelector('.home-content');
        
        let ticking = false;

        function mountainDive() {
            const scrollY = window.pageYOffset;
            const homeHeight = homeSection.offsetHeight;
            const progress = Math.min(scrollY / homeHeight, 1);

            // EFFET DIVE : Zoom progressif sur la vidéo (comme si on plongeait)
            if (videoElement) {
                const scale = 1 + (progress * 0.5); // De 1 à 1.5
                videoElement.style.transform = `scale(${scale})`;
            }

            // Le contenu disparaît rapidement (on dive à travers)
            if (homeContent) {
                homeContent.style.opacity = 1 - (progress * 2);
                homeContent.style.transform = `translateY(${progress * 100}px) scale(${1 - progress * 0.3})`;
            }

            // L'overlay s'assombrit (on entre dans la montagne)
            if (overlay) {
                const darkness = 0.3 + (progress * 0.6);
                overlay.style.background = `linear-gradient(to bottom, rgba(0,0,0,${darkness}), #050505)`;
            }
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    mountainDive();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Init
        mountainDive();
    }
});
