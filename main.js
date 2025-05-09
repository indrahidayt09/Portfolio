document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const header = document.querySelector('.header');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  // Toggle mobile menu
  navbarToggler.addEventListener('click', function() {
      navbarCollapse.classList.toggle('show');
      
      // Change icon based on state
      const icon = this.querySelector('i');
      if (navbarCollapse.classList.contains('show')) {
          icon.setAttribute('data-feather', 'x');
      } else {
          icon.setAttribute('data-feather', 'menu');
      }
      feather.replace();
  });

//   NAVLINK ACTIVE
// Ambil semua elemen nav-link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Hapus class 'active' dari semua link
    navLinks.forEach(nav => nav.classList.remove('active'));

    // Tambahkan class 'active' ke link yang diklik
    this.classList.add('active');
  });
});

  // Add scroll class to header
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
  
  // Initialize scroll if not at top
  if (window.scrollY > 50) {
      header.classList.add('scrolled');
  }
  
 // Update fungsi parallax untuk elemen baru
function updateParallax() {
    const scrollPosition = window.pageYOffset;
    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.offsetHeight;
    const heroOffset = heroSection.offsetTop;
    
    if (scrollPosition < heroOffset + heroHeight) {
        document.querySelectorAll('[data-speed]').forEach(element => {
            const speed = parseFloat(element.getAttribute('data-speed'));
            const yPos = -(scrollPosition * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
}
  
  window.addEventListener('scroll', updateParallax);
  window.addEventListener('resize', updateParallax);
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              const headerHeight = document.querySelector('.header').offsetHeight;
              const targetPosition = targetElement.offsetTop - headerHeight;
              
              window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Scroll indicator click event
  const scrollIndicator = document.querySelector('.hero-scroll-indicator');
  if (scrollIndicator) {
      scrollIndicator.addEventListener('click', function() {
          const aboutSection = document.querySelector('#about');
          if (aboutSection) {
              const headerHeight = document.querySelector('.header').offsetHeight;
              const targetPosition = aboutSection.offsetTop - headerHeight;
              
              window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
              });
          }
      });
  }
});

// =========== SERVICES =========== //
// Service Card Animation
function animateServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach((card, index) => {
        // Initial state (for animation)
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        // Animate in with delay based on index
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    animateServiceCards();
    
    // Re-animate when services come into view
    const servicesSection = document.querySelector('.services');
    if (servicesSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateServiceCards();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(servicesSection);
    }
});


// =========== Portfolio Filtering =========== //
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather Icons
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
          const categories = item.getAttribute('data-category').split(',');
          
          if (filterValue === 'all' || categories.includes(filterValue)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  
    // Toggle category dropdown
    const categoryToggle = document.querySelector('.category-toggle');
    const category = document.querySelector('.category');
    
    if (categoryToggle) {
      categoryToggle.addEventListener('click', function() {
        category.classList.toggle('active');
      });
    }
  
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!category.contains(e.target) && !e.target.classList.contains('category-toggle')) {
        category.classList.remove('active');
      }
    });
  
    // Portfolio item click functionality
    const viewButtons = document.querySelectorAll('.portfolio-view-btn');
    
    viewButtons.forEach(button => {
      button.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        // Here you can add functionality to show project details
        console.log(`Viewing project ${projectId}`);
        // Example: window.location.href = `project-details.html?id=${projectId}`;
      });
    });
  });