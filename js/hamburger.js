document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('hamburger');
            const mobileMenu = document.getElementById('mobileMenu');
            const overlay = document.getElementById('overlay');
            const mobileMenuToggles = document.querySelectorAll('.mobile-menu-toggle');
            
            // Toggle mobile menu
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                mobileMenu.classList.toggle('active');
                overlay.classList.toggle('active');
                
                // Prevent body scroll when menu is open
                document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
            });
            
            // Close menu when clicking on overlay
            overlay.addEventListener('click', function() {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                this.classList.remove('active');
                document.body.style.overflow = '';
            });
            
            // Toggle submenus in mobile view
            mobileMenuToggles.forEach(toggle => {
                toggle.addEventListener('click', function() {
                    const submenu = this.nextElementSibling;
                    const isActive = submenu.classList.contains('active');
                    
                    // Close all other submenus
                    document.querySelectorAll('.mobile-submenu.active').forEach(activeSubmenu => {
                        if (activeSubmenu !== submenu) {
                            activeSubmenu.classList.remove('active');
                            activeSubmenu.previousElementSibling.querySelector('i').classList.remove('fa-chevron-right');
                            activeSubmenu.previousElementSibling.querySelector('i').classList.add('fa-chevron-down');
                        }
                    });
                    
                    // Toggle current submenu
                    submenu.classList.toggle('active');
                    
                    // Rotate chevron icon
                    const icon = this.querySelector('i');
                    if (submenu.classList.contains('active')) {
                        icon.classList.remove('fa-chevron-right');
                        icon.classList.add('fa-chevron-down');
                    } else {
                        icon.classList.remove('fa-chevron-down');
                        icon.classList.add('fa-chevron-right');
                    }
                });
            });
            
            // Close menu when clicking on a link (for navigation)
            mobileMenu.querySelectorAll('a:not(.mobile-menu-toggle)').forEach(link => {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
            
            // Handle window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    // Close mobile menu if window is resized to larger than mobile breakpoint
                    hamburger.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                    
                    // Reset all submenus
                    document.querySelectorAll('.mobile-submenu.active').forEach(submenu => {
                        submenu.classList.remove('active');
                        submenu.previousElementSibling.querySelector('i').classList.remove('fa-chevron-right');
                        submenu.previousElementSibling.querySelector('i').classList.add('fa-chevron-down');
                    });
                }
            });
        });