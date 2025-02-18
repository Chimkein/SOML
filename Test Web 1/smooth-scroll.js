document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            
            if (this.getAttribute('href').charAt(0) === '#') {
                e.preventDefault();
                
                
                document.querySelector('header').style.top = '0';
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                
                
                setTimeout(() => {
                    if (!document.querySelector('header:hover') && 
                        !document.querySelector('.header-trigger:hover')) {
                        document.querySelector('header').style.top = '-70px';
                        
                                setTimeout(() => {
                            
                            if (document.querySelector('header').style.top === '-70px') {
                                document.querySelector('header').style.removeProperty('top');
                            }
                        }, 350); 
                    }
                }, 2000);
            }
        });
    });
});