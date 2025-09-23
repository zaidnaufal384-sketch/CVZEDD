document.addEventListener('DOMContentLoaded', () => {

    // Inisialisasi Particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#4fc3f7"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#4fc3f7",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });

    // Inisialisasi AOS (Animate On Scroll)
    AOS.init({
        once: true,
        duration: 1000
    });
    
    // Logika Sidebar Menu
    const menuToggle = document.getElementById('menu-toggle');
    const sidebarMenu = document.getElementById('sidebar-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    const overlay = document.getElementById('overlay');

    function toggleMenu() {
        sidebarMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    menuToggle.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Menutup menu saat link diklik
    document.querySelectorAll('.sidebar-menu nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (sidebarMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Logika untuk Form dan Modal Sukses
    const contactForm = document.querySelector('.contact-form');
    const successModal = document.getElementById('successModal');
    const closeSuccessBtn = successModal.querySelector('.close-btn');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        anime({
            targets: '.submit-btn',
            scale: [1, 0.9],
            rotate: '10deg',
            backgroundColor: '#81d4fa',
            duration: 300,
            direction: 'alternate',
            easing: 'easeInOutQuad',
            complete: () => {
                successModal.style.display = 'flex';
                contactForm.reset();
            }
        });
    });

    closeSuccessBtn.addEventListener('click', () => {
        successModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == successModal) {
            successModal.style.display = 'none';
        }
    });
});