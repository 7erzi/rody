function showSection(sectionName) {
            // Hide all sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.add('hidden');
            });
            
            // Show the selected section
            const targetSection = document.getElementById(sectionName + '-content');
            if (targetSection) {
                setTimeout(() => {
                    targetSection.classList.remove('hidden');
                }, 100);
            }
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            const activeLink = document.querySelector(`[data-section="${sectionName}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }

        // Navigation click handlers
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const sectionName = this.getAttribute('data-section');
                showSection(sectionName);
            });
        });

        // Vertical icons click handlers
        document.querySelectorAll('.icon-circle').forEach((icon, index) => {
            icon.addEventListener('click', function() {
                const sections = ['home', 'about', 'resume', 'portfolio', 'testimonials', 'contact'];
                showSection(sections[index]);
            });
        });

        // Add entrance animations for visible elements
        function animateVisibleElements() {
            const visibleSection = document.querySelector('.content-section:not(.hidden)');
            if (visibleSection) {
                const elements = visibleSection.querySelectorAll('.stat-box, .service-card');
                elements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.opacity = '0';
                        el.style.transform = 'translateY(20px)';
                        el.style.transition = 'all 0.6s ease';
                        setTimeout(() => {
                            el.style.opacity = '1';
                            el.style.transform = 'translateY(0)';
                        }, 100);
                    }, index * 100);
                });
            }
        }

        // Initialize animations on load
        window.addEventListener('load', function() {
            animateVisibleElements();
        });

        // Re-animate when switching sections
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('nav-link') || e.target.closest('.icon-circle')) {
                setTimeout(animateVisibleElements, 200);
            }
        });



(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'971d18deb59dcbc2',t:'MTc1NTY0MjY0NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();