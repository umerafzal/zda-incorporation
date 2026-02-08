/* =============================================
   ZDA INCORPORATION LIMITED — Main JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar Scroll Effect ---
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      navLinks.classList.toggle('mobile-open');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // --- Active Nav Link Highlighting ---
  const sections = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.nav-links a');

  const highlightNav = () => {
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinkItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav);
  highlightNav();

  // --- Scroll Animations (Intersection Observer) ---
  const animatedElements = document.querySelectorAll('[data-animate]');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-delay') || 0;
        setTimeout(() => {
          entry.target.classList.add('animated');
        }, parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));

  // --- Counter Animation ---
  const counters = document.querySelectorAll('[data-count]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'));
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;

        const updateCounter = () => {
          current += increment;
          if (current < target) {
            el.textContent = Math.ceil(current);
            setTimeout(updateCounter, stepTime);
          } else {
            el.textContent = target;
          }
        };

        updateCounter();
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  // --- Set Current Year in Footer ---
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --- Contact Form Handler ---
  // Form submits to FormSubmit.co which emails aliafzalch@zdaincorporation.com
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      // Client-side validation
      if (!data.name || !data.email || !data.subject || !data.message) {
        e.preventDefault();
        showNotification('Please fill in all fields.', 'error');
        return;
      }

      // Show sending state (form will submit natively to FormSubmit.co)
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;
    });
  }

  // --- Notification System ---
  function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
      </div>
    `;

    // Styles
    Object.assign(notification.style, {
      position: 'fixed',
      top: '100px',
      right: '24px',
      zIndex: '10000',
      padding: '16px 24px',
      borderRadius: '12px',
      background: type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
      border: `1px solid ${type === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
      color: type === 'success' ? '#34d399' : '#f87171',
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.9rem',
      fontWeight: '500',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      transform: 'translateX(120%)',
      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      maxWidth: '400px',
    });

    const content = notification.querySelector('.notification-content');
    Object.assign(content.style, {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    });

    document.body.appendChild(notification);

    // Animate in
    requestAnimationFrame(() => {
      notification.style.transform = 'translateX(0)';
    });

    // Auto-dismiss
    setTimeout(() => {
      notification.style.transform = 'translateX(120%)';
      setTimeout(() => notification.remove(), 400);
    }, 4000);
  }

  // --- Smooth Scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

});
