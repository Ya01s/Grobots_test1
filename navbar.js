/**
 * Navbar Functionality
 * Description: Handles navigation bar behavior, mobile menu, and scroll effects
 * Author: Robotics Club SRMCEM
 * Version: 1.0
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const nav = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.nav-overlay');
    const links = document.querySelectorAll('.navlink');

    // Toggle menu
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', closeMenu);

    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    // Scroll event for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Helper functions
    function toggleMenu() {
        const isOpen = navLinks.classList.contains('active');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    function openMenu() {
        navLinks.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        hamburger.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>';
    }

    function closeMenu() {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        hamburger.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>';
    }

    // Initialize hamburger icon
    closeMenu();

    /**
     * Update active link based on scroll position
     */
    function updateActiveLink() {
        const sections = document.querySelectorAll('section, #page1, #page2, #page3, #page4, #page5');
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        sections.forEach((section) => {
            if (!section) return;

            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                links.forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Scroll event listeners
    let scrolling = false;
    window.addEventListener('scroll', () => {
        // Throttle scroll event for better performance
        if (!scrolling) {
            window.requestAnimationFrame(() => {
                updateActiveLink();
                scrolling = false;
            });
            scrolling = true;
        }
    });

    // Initialize active link on page load
    updateActiveLink();

    /**
     * Smooth scroll to section when clicking nav links
     */
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add animation delays to nav items
    document.querySelectorAll('.nav-links h4').forEach((item, index) => {
        item.style.setProperty('--i', index);
    });
});
