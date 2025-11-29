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

    // --- LENIS SMOOTH SCROLL (Effet Luxe) ---
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

    // --- CORRECTIF VIDÉO (Anti-Pause) ---
    const video = document.getElementById('bg-video');
    const playVideo = () => {
        if(video && !video.playing) {
            video.play().catch(() => {});
        }
    };
    
    if(video) {
        document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") playVideo(); });
        window.addEventListener("pageshow", () => playVideo());
    }
});
