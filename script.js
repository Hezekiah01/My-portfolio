    const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Hamburger menu toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Reveal animation on scroll
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            
            revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const revealPoint = 100;
                
                if (elementTop < windowHeight - revealPoint) {
                    element.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Initial check

        // Animate skill bars on scroll
        const skillCards = document.querySelectorAll('.skill-card');
        let skillsAnimated = false;

        const animateSkills = () => {
            const skillsSection = document.getElementById('skills');
            const sectionTop = skillsSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 200 && !skillsAnimated) {
                skillsAnimated = true;
                skillCards.forEach((card, index) => {
                    setTimeout(() => {
                        const progress = card.querySelector('.skill-progress');
                        const width = progress.style.width;
                        progress.style.width = '0';
                        setTimeout(() => {
                            progress.style.width = width;
                        }, 50);
                    }, index * 100);
                });
            }
        };

        window.addEventListener('scroll', animateSkills);

        // Project card hover effect
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.zIndex = '10';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.zIndex = '1';
            });
        });

        // Form submission
        const contactForm = document.querySelector('.contact-form');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.btn-primary');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent! ✓';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 2000);
            }, 1500);
        });

        // Cursor trail effect (optional enhancement)
        const createCursorTrail = () => {
            let lastX = 0;
            let lastY = 0;
            let isMoving = false;

            document.addEventListener('mousemove', (e) => {
                if (!isMoving) {
                    isMoving = true;
                    lastX = e.clientX;
                    lastY = e.clientY;
                    
                    setTimeout(() => {
                        isMoving = false;
                    }, 50);
                }
            });
        };

        // Initialize cursor trail
        createCursorTrail();

        // Add parallax effect to floating shapes
        const shapes = document.querySelectorAll('.shape');
        
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 20;
                const x = (mouseX - 0.5) * speed;
                const y = (mouseY - 0.5) * speed;
                
                shape.style.transform = `translate(${x}px, ${y}px)`;
            });
        });

        // Counter animation for stats
        const stats = document.querySelectorAll('.stat h3');
        let statsAnimated = false;

        const animateStats = () => {
            const aboutSection = document.getElementById('about');
            const sectionTop = aboutSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 200 && !statsAnimated) {
                statsAnimated = true;
                
                stats.forEach(stat => {
                    const target = parseInt(stat.textContent);
                    const suffix = stat.textContent.replace(/[0-9]/g, '');
                    let current = 0;
                    const increment = target / 50;
                    const duration = 1500;
                    const stepTime = duration / 50;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            stat.textContent = target + suffix;
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current) + suffix;
                        }
                    }, stepTime);
                });
            }
        };

        window.addEventListener('scroll', animateStats);

        // Add active state to navigation based on scroll position
        const sections = document.querySelectorAll('section');
        const navLinksArray = document.querySelectorAll('.nav-links a');

        const highlightNav = () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinksArray.forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href').slice(1) === current) {
                    link.style.color = '#6366f1';
                }
            });
        };

        window.addEventListener('scroll', highlightNav);
var setVanta = ()=>{
if (window.VANTA) window.VANTA.BIRDS({
  el: ".s-page-1 .s-section-1 .s-section",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color1: 0x8e1b1b
})
}
_strk.push(function() {
  setVanta()
  window.edit_page.Event.subscribe( "Page.beforeNewOneFadeIn", setVanta )
})
        // Initialize

        highlightNav();

