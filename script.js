document.addEventListener("DOMContentLoaded", () => {
    // --- MENU MOBILE ---
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    if(menuIcon) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };
    }

    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            if(menuIcon) menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });

    // --- LENIS SMOOTH SCROLL (Désactivé sur Mobile pour Performance) ---
    // On ne lance Lenis que si l'écran est large (Ordinateur)
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

        // Ancrage compatible Lenis
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                lenis.scrollTo(this.getAttribute('href'));
            });
        });
    }

    // --- CORRECTIF VIDÉO (Anti-Pause) ---
    // Uniquement si la vidéo est chargée (donc sur PC)
    const video = document.getElementById('bg-video');
    if(video) {
        const playVideo = () => {
            if(!video.playing) {
                video.play().catch(() => {});
            }
        };
        document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") playVideo(); });
        window.addEventListener("pageshow", () => playVideo());
    }
});