document.addEventListener("DOMContentLoaded", () => {
    // --- 1. DOM ELEMENTS ---
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const video = document.getElementById('bg-video');

    // --- 2. MENU MOBILE ---
    if (menuIcon && navbar) {
        // Toggle Menu
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };

        // Fermer le menu au clic sur un lien
        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
            });
        });
    }

    // --- 3. SMOOTH SCROLL (PC Only > 1024px) ---
    // On n'active Lenis que sur grand écran pour économiser le CPU mobile
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

        // Gestion des liens d'ancrage avec Lenis
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                lenis.scrollTo(this.getAttribute('href'));
            });
        });
    }

    // --- 4. VIDEO BACKGROUND FIX ---
    // Force la lecture si le navigateur met en pause (retour onglet, économie énergie)
    if (video) {
        const playVideo = () => {
            if (video.paused) {
                video.play().catch(() => { /* Autoplay bloqué par le navigateur */ });
            }
        };

        // Tentative lecture immédiate
        playVideo(); 

        // Relance quand l'onglet redevient visible
        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "visible") playVideo();
        });

        // Relance quand on revient sur la page (bouton retour)
        window.addEventListener("pageshow", playVideo);
    }
});
