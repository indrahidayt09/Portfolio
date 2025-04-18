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
function portfolioFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          
          // Add active class to clicked button
          button.classList.add('active');
          
          const filterValue = button.getAttribute('data-filter');
          
          portfolioItems.forEach(item => {
              if (filterValue === 'all') {
                  item.style.display = 'block';
              } else {
                  const categories = item.getAttribute('data-category').split(',');
                  if (categories.includes(filterValue)) {
                      item.style.display = 'block';
                  } else {
                      item.style.display = 'none';
                  }
              }
          });
      });
  });
}

// Portfolio Hover Effects
function portfolioHover() {
  const portfolioItems = document.querySelectorAll('.portfolio-item-inner');
  
  portfolioItems.forEach(item => {
      const img = item.querySelector('.portfolio-img img');
      const overlay = item.querySelector('.portfolio-overlay');
      const overlayContent = item.querySelector('.portfolio-overlay-content');
      
      item.addEventListener('mouseenter', () => {
          img.style.transform = 'scale(1.1)';
          overlay.style.opacity = '1';
          overlayContent.style.transform = 'translateY(0)';
      });
      
      item.addEventListener('mouseleave', () => {
          img.style.transform = 'scale(1)';
          overlay.style.opacity = '0';
          overlayContent.style.transform = 'translateY(20px)';
      });
  });
}

// Portfolio Modal
function portfolioModal() {
  const modal = document.querySelector('.portfolio-modal');
  const modalContainer = document.querySelector('.modal-container');
  const modalClose = document.querySelector('.modal-close');
  const modalContent = document.querySelector('.modal-content');
  const viewButtons = document.querySelectorAll('.portfolio-view-btn');
  
  // Sample project data (in a real scenario, you might fetch this from an API)
  const projects = [
      {
          id: 1,
          title: "Rupa DarsanA",
          category: "Photography Web Portfolio",
          description: "Dirancang dengan desain responsif dan modern, memastikan tampilan yang optimal di semua perangkat. Menggunakan layout minimalis, fokus utama pada foto, dengan navigasi yang mudah dan galeri gambar interaktif.",
          image: "assets/images/img1.jpg",
          client: "Rupa Darsana.",
          date: "April 2025",
          technologies: "HTML, CSS, JavaScript",
          liveUrl: "https://indrahidayt09.github.io/Rupa-Darsana/",
          githubUrl: "https://github.com/indrahidayt09/Rupa-Darsana"
      },
      {
          id: 2,
          title: "Langit Janji",
          category: "Wedding Website",
          description: "Website pernikahan ini dirancang elegan dan responsif, memudahkan pengunjung melihat detail acara, galeri foto, dan jadwal pernikahan. Desain sederhana dan navigasi intuitif membuatnya mudah diakses di semua perangkat.",
          image: "assets/images/img3.jpg",
          client: "Langit Janji.",
          date: "Januri 2025",
          technologies: "HTML, CSS, JavaScript",
          liveUrl: "https://indrahidayt09.github.io/Langit-Janji/",
          githubUrl: "https://github.com/indrahidayt09/Langit-Janji"
      },
      {
          id: 3,
          title: "Hijrah Harmoni",
          category: "Travel Haji & Umrah Website",
          description: "Didesain responsif dan informatif, memudahkan jamaah mengakses info paket, jadwal keberangkatan, dan layanan. Tampilannya modern dan sederhana, dengan navigasi yang mudah di semua perangkat.",
          image: "assets/images/img2.jpg",
          client: "Hijrah Harmoni",
          date: "November 2024",
          technologies: "HTML, CSS, JavaScript",
          liveUrl: "https://indrahidayt09.github.io/Hijrah-Harmoni/",
          githubUrl: "https://github.com/indrahidayt09/Hijrah-Harmoni"
      },
      {
          id: 4,
          title: "Sandykala Coffe",
          category: "Website Jualan Kopi Aceh",
          description: "Didesain modern dan responsif, menampilkan produk secara menarik dan mudah diakses di semua perangkat. Navigasi simpel memudahkan pelanggan memilih varian kopi, membaca deskripsi, dan melakukan pemesanan dengan cepat.",
          image: "assets/images/img4.png",
          client: "Sandykala Coffe",
          date: "September 2024",
          technologies: "HTML, CSS, JavaScript",
          liveUrl: "https://indrahidayt09.github.io/SandykalaCoffee/",
          githubUrl: "https://github.com/indrahidayt09/SandykalaCoffee"
      },

      {
          id: 5,
          title: "Rejeki Kita",
          category: "Website Yayasan Amal",
          description: "Didesain modern dan responsif, menampilkan informasi yang mudah diakses dan dibaca. Navigasi simpel memudahkan para orang baik untuk bersedekah.",
          image: "assets/images/rejekita.png",
          client: "Rejeki Kita",
          date: "September 2024",
          technologies: "HTML, CSS, JavaScript",
          liveUrl: "https://indrahidayt09.github.io/Rejeki-Kita/",
          githubUrl: "https://github.com/indrahidayt09/Rejeki-Kita"
      }
  ];
  
  viewButtons.forEach(button => {
      button.addEventListener('click', () => {
          const projectId = parseInt(button.getAttribute('data-project'));
          const project = projects.find(p => p.id === projectId);
          
          if (project) {
              modalContent.innerHTML = `
                  <img src="${project.image}" alt="${project.title}">
                  <h2>${project.title}</h2>
                  <span class="project-category">${project.category}</span>
                  <p class="project-description">${project.description}</p>
                  
                  <div class="project-details">
                      <div class="detail-item">
                          <i data-feather="user"></i>
                          <div>
                              <h4>Client</h4>
                              <p>${project.client}</p>
                          </div>
                      </div>
                      <div class="detail-item">
                          <i data-feather="calendar"></i>
                          <div>
                              <h4>Date</h4>
                              <p>${project.date}</p>
                          </div>
                      </div>
                      <div class="detail-item">
                          <i data-feather="code"></i>
                          <div>
                              <h4>Technologies</h4>
                              <p>${project.technologies}</p>
                          </div>
                      </div>
                  </div>
                  
                  <div class="project-links">
                      <a href="${project.liveUrl}" class="btn live-demo" target="_blank">
                          <i data-feather="external-link"></i>
                          Live Demo
                      </a>
                      <a href="${project.githubUrl}" class="btn github" target="_blank">
                          <i data-feather="github"></i>
                          View Code
                      </a>
                  </div>
              `;
              
              modal.classList.add('active');
              document.body.style.overflow = 'hidden';
              feather.replace();
          }
      });
  });
  
  // Close modal
  function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
  }
  
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
      if (e.target === modal) {
          closeModal();
      }
  });
  
  // Close with ESC key
  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
          closeModal();
      }
  });
}

// Initialize portfolio functionality
document.addEventListener('DOMContentLoaded', function() {
  portfolioFilter();
  portfolioHover();
  portfolioModal();
});












