document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Navbar HTML Template
  const headerHTML = `
<div class="topbar">
  <div class="topbar-container">
    <div class="topbar-left">
      <a href="tel:+917261962201" class="topbar-contact-link topbar-phone">
        <i class="fa-solid fa-phone"></i>
        <span>+91 72619 62201</span>
      </a>
      <span class="topbar-divider"></span>
      <a href="mailto:fluidtechautomation@gmail.com" class="topbar-contact-link topbar-email">
        <i class="fa-solid fa-envelope"></i>
        <span>fluidtechautomation@gmail.com</span>
      </a>
    </div>
    <div class="topbar-right">
      <div class="topbar-socials">
        <a href="https://www.facebook.com" target="_blank" aria-label="Facebook" class="topbar-social-link"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/fluidtech_pune/" target="_blank" aria-label="Instagram" class="topbar-social-link"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn" class="topbar-social-link"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://wa.me/917261962201" target="_blank" aria-label="WhatsApp" class="topbar-social-link"><i class="fab fa-whatsapp"></i></a>
      </div>
    </div>
  </div>
</div>
<nav class="custom-navbar">
  <div class="nav-container">
    
    <!-- Brand & Logo -->
    <a href="index.html" class="nav-brand">
      <img src="assets/images/logo.webp" alt="FluidTech Logo" title="Fluid-Tech Automation" class="nav-logo-img">
      <div class="nav-brand-text">
        <span class="brand-title">Fluid-Tech</span>
        <span class="brand-subtitle">PROCESS &amp; AUTOMATION</span>
      </div>
    </a>

    <!-- Mobile Drawer Backdrop -->
    <div class="mobile-nav-backdrop" id="mobileNavBackdrop"></div>
    
    <!-- Navigation Off-Canvas Sidebar / Menu Wrapper -->
    <div class="mobile-sidebar" id="mobileSidebar">
      <!-- Header inside Mobile Sidebar -->
      <div class="sidebar-header">
        <a href="index.html" class="sidebar-brand">
          <img src="assets/images/logo.webp" alt="FluidTech Logo" title="Fluid-Tech Automation" class="sidebar-logo-img">
          <div class="sidebar-brand-text">
            <span class="sidebar-brand-title">Fluid-Tech</span>
            <span class="sidebar-brand-subtitle">PROCESS &amp; AUTOMATION</span>
          </div>
        </a>
        <button class="sidebar-close-btn" id="navCloseBtn" aria-label="Close Menu">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- 3. Navigation Menu Items -->
      <ul class="nav-menu" id="navMenu">
        <li><a href="index.html" class="nav-link" data-page="index.html"><i class="fas fa-home me-2"></i> HOME</a></li>
        <li><a href="about-us.html" class="nav-link" data-page="about-us.html">ABOUT US</a></li>
        <li class="custom-nav-dropdown">
          <a href="our-products.html" class="nav-link dropdown-toggle" data-page="our-products.html">
            <span>PRODUCTS</span> <i class="fas fa-chevron-down dropdown-icon"></i>
          </a>
          <ul class="custom-dropdown-menu">
            
            <!-- 1. PD Flow Meter Category & Submenu -->
            <li class="has-submenu">
              <a href="our-products.html?filter=meters" class="submenu-toggle-link">
                <span class="category-info">
                  <span class="cat-name">PD Flow Meter</span>
                </span>
                <i class="fas fa-chevron-right submenu-arrow"></i>
              </a>
              <ul class="custom-submenu">
                <li class="submenu-category-header">PD Flow Meters</li>
                <li><a href="pd-flow-meters-1-2-inch.html">1/2 Inch PD Flow Meter</a></li>
                <li><a href="pd-flow-meters-3-4-inch.html">3/4 Inch PD Flow Meter</a></li>
                <li><a href="pd-flow-meters-1-inch.html">1 Inch PD Flow Meter</a></li>
                <li><a href="pd-flow-meters-1-5-inch.html">1.5 Inch PD Flow Meter</a></li>
                <li><a href="pd-flow-meters-2-inch.html">2 Inch PD Flow Meter</a></li>
                <li><a href="pd-flow-meters-3-inch.html">3 Inch PD Flow Meter</a></li>
                <li><a href="industrial-pd-flow-meters.html">Industrial PD Flow Meter</a></li>
                <li><a href="pharmaceutical-pd-flow-meters.html">Pharma PD Flow Meter</a></li>
                <li><a href="chemical-pd-flow-meters.html">Chemical PD Flow Meter</a></li>
              </ul>
            </li>

            <!-- 2. System Category & Submenu -->
            <li class="has-submenu">
              <a href="our-products.html?filter=dispensing" class="submenu-toggle-link">
                <span class="category-info">
                  <span class="cat-name">System</span>
                </span>
                <i class="fas fa-chevron-right submenu-arrow"></i>
              </a>
              <ul class="custom-submenu">
                <li class="submenu-category-header">Systems</li>
                <li><a href="tanker-unloading-system.html">Tanker Unloading System</a></li>
                <li><a href="dg-fuel-consumption-monitoring-system.html">DG Fuel Consumption Monitoring System</a></li>
                <li><a href="preset-batching-system.html">Preset batching System</a></li>
                <li><a href="oil-dispensing-system.html">Oil Dispensing System</a></li>
                <li><a href="oil-dispensing-system-20w40-sae-90.html">20W40 &amp; SAE 90 Oil Dispensing System</a></li>
                <li><a href="coolant-dispensing-system.html">Coolant Dispensing System</a></li>
                <li><a href="industrial-dispenser.html">Industrial Dispenser</a></li>
                <li><a href="automobile-oil-dispenser.html">Automobile Industry Oil Dispenser</a></li>
              </ul>
            </li>

            <!-- 3. Filling machines Category & Submenu -->
            <li class="has-submenu">
              <a href="our-products.html?filter=purification-filling" class="submenu-toggle-link">
                <span class="category-info">
                  <span class="cat-name">Filling machines</span>
                </span>
                <i class="fas fa-chevron-right submenu-arrow"></i>
              </a>
              <ul class="custom-submenu">
                <li class="submenu-category-header">Filling &amp; Purification</li>
                <li><a href="dual-channel-oil-filling-machine.html">Dual Channel Oil Filling Machine</a></li>
                <li><a href="single-channel-oil-filling-machine.html">Single Channel Oil Filling Machine</a></li>
                <li><a href="oil-purification-filling-system.html">Purification &amp; Filling</a></li>
                <li><a href="diesel-tank-water-removal-system.html">Diesel Tank Water Removal System</a></li>
              </ul>
            </li>

          </ul>
        </li>
        <li><a href="photo-gallery.html" class="nav-link" data-page="photo-gallery.html">GALLERY</a></li>
        <li><a href="videos-gallery.html" class="nav-link" data-page="videos-gallery.html">VIDEOS</a></li>
        <li><a href="contact-us.html" class="nav-link" data-page="contact-us.html">CONTACT</a></li>
        <li class="nav-quote-mobile"><a href="contact-us.html" class="btn-get-quote-mobile">GET A QUOTE <i class="fa-solid fa-arrow-right"></i></a></li>
      </ul>
    </div>

    <!-- Right Side Navbar Actions -->
    <div class="nav-actions">
      <a href="contact-us.html" class="btn-get-quote">
        <span>GET A QUOTE</span>
        <i class="fa-solid fa-arrow-right"></i>
      </a>
      <!-- Mobile Toggle Button -->
      <button class="nav-toggle" id="navToggle" aria-label="Toggle Navigation">
        <i class="fas fa-bars"></i>
      </button>
    </div>

  </div>
</nav>
  `;

  // 2. Insert Navbar into the header div
  const headerContainer = document.getElementById("header");
  if (headerContainer) {
    headerContainer.innerHTML = headerHTML;

    // 3. Set up Mobile Menu Open & Close Controls
    const toggleBtn = document.getElementById("navToggle");
    const closeBtn = document.getElementById("navCloseBtn");
    const backdrop = document.getElementById("mobileNavBackdrop");
    const mobileSidebar = document.getElementById("mobileSidebar");

    const openSidebar = () => {
      if (mobileSidebar) mobileSidebar.classList.add("show");
      if (backdrop) backdrop.classList.add("show");
      document.body.classList.add('body-scroll-lock');
    };

    const closeSidebar = () => {
      if (mobileSidebar) mobileSidebar.classList.remove("show");
      if (backdrop) backdrop.classList.remove("show");
      document.body.classList.remove('body-scroll-lock');
    };

    if (toggleBtn) {
      toggleBtn.addEventListener("click", openSidebar);
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", closeSidebar);
    }

    if (backdrop) {
      backdrop.addEventListener("click", closeSidebar);
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeSidebar();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1100) {
        closeSidebar();
      }
    });

    // 4. Smart Active Link Logic
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");
    const productDetailPages = [
      "pd-flow-meters-1-2-inch.html", "pd-flow-meters-3-4-inch.html", "pd-flow-meters-1-inch.html",
      "pd-flow-meters-1-5-inch.html", "pd-flow-meters-2-inch.html", "pd-flow-meters-3-inch.html",
      "industrial-pd-flow-meters.html", "pharmaceutical-pd-flow-meters.html", "chemical-pd-flow-meters.html",
      "tanker-unloading-system.html", "dg-fuel-consumption-monitoring-system.html",
      "preset-batching-system.html", "oil-dispensing-system.html",
      "oil-dispensing-system-20w40-sae-90.html", "coolant-dispensing-system.html",
      "automobile-oil-dispenser.html", "industrial-dispenser.html",
      "dual-channel-oil-filling-machine.html", "single-channel-oil-filling-machine.html",
      "oil-purification-filling-system.html", "diesel-tank-water-removal-system.html"
    ];

    navLinks.forEach(link => {
      const pageToMatch = currentPath === "" ? "index.html" : currentPath;
      const dataPage = link.getAttribute("data-page");

      if (dataPage === pageToMatch || (dataPage === "our-products.html" && (pageToMatch === "our-products.html" || productDetailPages.includes(pageToMatch)))) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // 5. Accordion Logic for Mobile Navigation Menu (Products Dropdown)
    const dropdownToggles = document.querySelectorAll(".nav-menu .dropdown-toggle");

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener("click", (e) => {
        if (window.innerWidth <= 1100) {
          e.preventDefault();
          const parentDropdown = toggle.closest('.custom-nav-dropdown');
          const allDropdowns = document.querySelectorAll('.nav-menu .custom-nav-dropdown');

          allDropdowns.forEach(dropdown => {
            if (dropdown !== parentDropdown) {
              dropdown.classList.remove('open');
            }
          });
          parentDropdown.classList.toggle('open');
        }
      });
    });

    // 6. Submenu Accordion Logic for Mobile (PD Flow Meter, System, Filling machines)
    const submenuToggles = document.querySelectorAll(".nav-menu .submenu-toggle-link");

    submenuToggles.forEach(subToggle => {
      subToggle.addEventListener("click", (e) => {
        if (window.innerWidth <= 1100) {
          e.preventDefault();
          const parentSubmenu = subToggle.closest('.has-submenu');
          const siblingSubmenus = parentSubmenu.parentElement.querySelectorAll('.has-submenu');

          siblingSubmenus.forEach(item => {
            if (item !== parentSubmenu) {
              item.classList.remove('submenu-open');
            }
          });
          parentSubmenu.classList.toggle('submenu-open');
        }
      });
    });

    // 7. Auto-close mobile drawer on clicking any direct nav link or product link
    const allClickableLinks = document.querySelectorAll(".nav-menu a:not(.dropdown-toggle):not(.submenu-toggle-link)");
    allClickableLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 1100) {
          closeSidebar();
        }
      });
    });
  }
});

// ===============================================

// Array of 6 products for the auto-slider
const products = [
  {
    title: "Positive Displacement Flow Meter",
    description: "Available in Carbon Steel and Stainless Steel with end connection flanged end to raised face. Visual search results available in Carbon Steel and Stainless Steel with end connection flanged end to raised face.",
    image: "/assets/images/slider-1.webp"
  },
  {
    title: "Chemical Flow Meter",
    description: "High-performance industrial valves designed for precise flow control in demanding environments. Available in multiple configurations.",
    image: "/assets/images/slider-2.webp"
  },
  {
    title: "Fuel Consumption Monitoring System",
    description: "Durable structural steel connectors engineered for maximum load-bearing capacity and seamless integration into large-scale frameworks.",
    image: "/assets/images/slider-3.webp"
  },
  {
    title: "Tanker Unloading System",
    description: "Custom heavy-duty iron gate fabrication work offering superior security and long-lasting durability for industrial properties.",
    image: "/assets/images/slider-4.webp"
  },
  {
    title: "Coolant Dispensing System",
    description: "Industrial grade heavy-duty screws and fasteners, providing high tensile strength for robust structural integrity.",
    image: "/assets/images/slider-5.webp"
  },
  {
    title: "Oil Dispensing System",
    description: "Premium fabrication services for industrial roofing sheds, providing excellent weather resistance and structural stability.",
    image: "/assets/images/slider-6.webp"
  }
];

// DOM Elements
const sliderTitle = document.getElementById('slider-title');
const sliderDesc = document.getElementById('slider-desc');
const sliderImage = document.getElementById('slider-image');

if (sliderTitle && sliderDesc && sliderImage) {
  let currentIndex = 0;

  // Function to update the slider content
  function updateSlider() {
    // Fade out effect before changing content (optional smooth transition)
    sliderImage.style.opacity = '0.5';

    setTimeout(() => {
      // Update content
      sliderTitle.textContent = products[currentIndex].title;
      sliderDesc.textContent = products[currentIndex].description;
      sliderImage.src = products[currentIndex].image;
      sliderImage.alt = products[currentIndex].title;

      // Fade back in
      sliderImage.style.opacity = '1';
    }, 200); // Small delay to allow fade effect

    // Move to the next index, loop back to 0 if at the end
    currentIndex = (currentIndex + 1) % products.length;
  }

  // Set the slider to auto-play every 5 seconds (5000 milliseconds)
  setInterval(updateSlider, 5000);
}

// =================================================

document.addEventListener('DOMContentLoaded', () => {

  // Set up the Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px', // Triggers slightly before the element fully enters the screen
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the 'active' class to trigger CSS animation
        entry.target.classList.add('active');

        // Stop observing once the animation has played
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select all elements with the 'reveal' class and observe them
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

});

// ==============================================

document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer config for scroll animations
  const revealOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Run once per reload
      }
    });
  }, revealOptions);

  // Initialize observer on all targeted elements
  const elementsToReveal = document.querySelectorAll('.reveal-up');
  elementsToReveal.forEach(el => scrollObserver.observe(el));
});

// ============================================

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.reveal-up');
  animatedElements.forEach(el => scrollObserver.observe(el));
});

// ==========================================

// clients scroller
/* ── Client Auto-Scroller Infinite Loop ───────────────────── */
function initClientScroller() {
  const track = document.getElementById('clientScrollerTrack');
  if (!track) return;

  // Clone the original items to create a seamless infinite loop
  const originalItems = Array.from(track.children);

  originalItems.forEach(item => {
    // Deep clone the logo card
    const clone = item.cloneNode(true);
    // Prevents assistive tech from reading the cloned logos twice
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });
}

document.addEventListener('DOMContentLoaded', initClientScroller);

/* ── Hero Background Carousel / Slider ───────────────────── */
function initHeroSlider() {
  const slider = document.getElementById('heroSlider');
  if (!slider) return;

  const slides = slider.querySelectorAll('.hero-slide');
  const dots = slider.querySelectorAll('.hero-slider-dots .dot');
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');

  if (slides.length === 0) return;

  let currentSlide = 0;
  let slideInterval = null;
  const slideDuration = 4000; // 4 seconds per auto-slide

  const heroTextWrapper = slider.querySelector('.hero-text-wrapper');

  const slideContent = [
    {
      badge: '<i class="fas fa-industry"></i> FluidTech - Powering Fluid Management Worldwide.',
      title: 'FluidTech - <span class="hero-gradient-text">Measuring Excellence</span>, Delivering Precision.',
      sub: 'Explore our full range of precision-engineered fluid handling, dispensing &amp; monitoring systems.'
    },
    {
      badge: '<i class="fas fa-truck-droplet"></i> High-Accuracy Tanker Unloading &amp; Fuel Transfer',
      title: 'Advanced <span class="hero-gradient-text">Fluid Handling</span> &amp; Metering Skids.',
      sub: 'Engineered for high flow rates, custody transfer, and severe industrial plant duty.'
    },
    {
      badge: '<i class="fas fa-cogs"></i> Industrial Automation &amp; Process Control Solutions',
      title: 'Next-Gen <span class="hero-gradient-text">Automation Systems</span> For Modern Industry.',
      sub: 'Custom-engineered fluid dispensing, monitoring &amp; control systems built for maximum efficiency.'
    },
    {
      badge: '<i class="fas fa-gas-pump"></i> Precision Mobile Oil Dispensing Systems',
      title: 'Smart <span class="hero-gradient-text">Oil Dispensing</span> &amp; Monitoring Units.',
      sub: 'PLC touchscreen-controlled mobile dispensing systems with real-time flow rate tracking.'
    }
  ];

  function showSlide(index) {
    if (index < 0) {
      currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });

    // Re-trigger bottom-to-top text animation on each slide change
    if (heroTextWrapper) {
      heroTextWrapper.classList.remove('hero-text-animate-in');
      void heroTextWrapper.offsetWidth; // Force DOM reflow to restart CSS keyframe animation

      if (slideContent[currentSlide]) {
        const badgeEl = heroTextWrapper.querySelector('.hero-badge');
        const titleEl = heroTextWrapper.querySelector('h1');
        const subEl = heroTextWrapper.querySelector('.hero-sub');
        if (badgeEl) badgeEl.innerHTML = slideContent[currentSlide].badge;
        if (titleEl) titleEl.innerHTML = slideContent[currentSlide].title;
        if (subEl) subEl.innerHTML = slideContent[currentSlide].sub;
      }

      heroTextWrapper.classList.add('hero-text-animate-in');
    }
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startAutoSlide() {
    stopAutoSlide();
    slideInterval = setInterval(nextSlide, slideDuration);
  }

  function stopAutoSlide() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  // Next / Prev Screen Floating Button clicks
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
      resetAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
      resetAutoSlide();
    });
  }

  // Capsule Mini Arrow clicks
  const capsulePrevBtn = document.getElementById('capsulePrevBtn');
  const capsuleNextBtn = document.getElementById('capsuleNextBtn');

  if (capsuleNextBtn) {
    capsuleNextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
      resetAutoSlide();
    });
  }

  if (capsulePrevBtn) {
    capsulePrevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
      resetAutoSlide();
    });
  }

  // Dot Navigation clicks
  dots.forEach((dot, index) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      showSlide(index);
      resetAutoSlide();
    });
  });

  // Pause only when hovering directly over interactive capsule controls
  const dotsContainer = document.getElementById('heroSliderDots');
  if (dotsContainer) {
    dotsContainer.addEventListener('mouseenter', stopAutoSlide);
    dotsContainer.addEventListener('mouseleave', startAutoSlide);
  }

  // Page visibility support (pause when tab is inactive, resume when active)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoSlide();
    } else {
      startAutoSlide();
    }
  });

  // Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      resetAutoSlide();
    }
  }, { passive: true });

  // Start auto-rotation immediately
  startAutoSlide();
}

document.addEventListener('DOMContentLoaded', initHeroSlider);

// ========================================

document.addEventListener("DOMContentLoaded", () => {

  // 1. Fetch the footer.html file
  fetch("footer.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load footer");
      }
      return response.text();
    })
    .then(htmlData => {
      // 2. Insert the HTML into the div
      document.getElementById("footer-placeholder").innerHTML = htmlData;

      // 3. Scroll to Top Logic
      const topBtn = document.getElementById('scrollTopBtn');

      if (topBtn) {
        // Show button when scrolled down 300px
        window.addEventListener('scroll', () => {
          if (window.scrollY > 300) {
            topBtn.classList.add('show');
          } else {
            topBtn.classList.remove('show');
          }
        });

        // Scroll smoothly to top on click
        topBtn.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
    })
    .catch(error => {
      console.error("Error loading the footer:", error);
    });
});

// --- Bottom Hero Gallery Slider Script ---
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("heroSliderTrack");
  const prevBtn = document.getElementById("sliderPrevBtn");
  const nextBtn = document.getElementById("sliderNextBtn");

  if (!track) return;

  // Clone original cards to enable infinite seamless loop
  const originalCards = Array.from(track.children);
  originalCards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });

  let scrollPosition = 0;
  let isPaused = false;
  let speed = 0.8; // scroll speed in pixels per frame
  let isNudging = false;
  let scrollLimit = 0;

  function getCardWidthAndGap() {
    if (originalCards.length === 0) return { width: 0, gap: 16 };
    const firstCard = originalCards[0];
    const rect = firstCard.getBoundingClientRect();
    const trackStyle = window.getComputedStyle(track);
    const gap = parseFloat(trackStyle.gap) || 16;
    return {
      width: rect.width,
      gap: gap
    };
  }

  function updateScrollLimit() {
    const { width, gap } = getCardWidthAndGap();
    scrollLimit = originalCards.length * (width + gap);
  }

  // Set initial scroll limit
  updateScrollLimit();

  // Animation frame loop
  function animate() {
    if (!isPaused && !isNudging) {
      scrollPosition += speed;
      if (scrollPosition >= scrollLimit) {
        scrollPosition -= scrollLimit;
      }
      track.style.transform = `translateX(-${scrollPosition}px)`;
    }
    requestAnimationFrame(animate);
  }

  // Hover interactions
  track.addEventListener("mouseenter", () => {
    isPaused = true;
  });

  track.addEventListener("mouseleave", () => {
    if (!isNudging) {
      isPaused = false;
    }
  });

  // Touch/Drag interactions for mobile device support
  let startX = 0;
  let initialScrollPos = 0;
  let isDragging = false;

  track.addEventListener("touchstart", (e) => {
    isPaused = true;
    isDragging = true;
    startX = e.touches[0].clientX;
    initialScrollPos = scrollPosition;
  }, { passive: true });

  track.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    scrollPosition = initialScrollPos + diff;

    // Boundary wrapping
    if (scrollPosition < 0) {
      scrollPosition += scrollLimit;
    } else if (scrollPosition >= scrollLimit) {
      scrollPosition -= scrollLimit;
    }
    track.style.transform = `translateX(-${scrollPosition}px)`;
  }, { passive: true });

  track.addEventListener("touchend", () => {
    isDragging = false;
    isPaused = false;
  }, { passive: true });

  // Nudge function for arrow navigation
  function nudge(direction) {
    if (isNudging) return;
    isNudging = true;
    isPaused = true;

    const { width, gap } = getCardWidthAndGap();
    const step = width + gap;

    const startPos = scrollPosition;
    // Calculate nearest exact multiple of step for the target position
    let targetIndex;
    if (direction === "next") {
      targetIndex = Math.floor(startPos / step) + 1;
    } else {
      targetIndex = Math.ceil(startPos / step) - 1;
    }
    const targetPos = targetIndex * step;

    const duration = 500; // ms
    let startTime = null;

    function stepAnimate(now) {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Cubic ease-out transition
      const ease = 1 - Math.pow(1 - progress, 3);
      let currentPos = startPos + (targetPos - startPos) * ease;

      // Bound wrapping logic during nudge animation
      if (currentPos < 0) {
        currentPos += scrollLimit;
      } else if (currentPos >= scrollLimit) {
        currentPos -= scrollLimit;
      }

      scrollPosition = currentPos;
      track.style.transform = `translateX(-${scrollPosition}px)`;

      if (progress < 1) {
        requestAnimationFrame(stepAnimate);
      } else {
        isNudging = false;
        // Keep paused for 2 seconds after nudge for better UX, unless hovered
        setTimeout(() => {
          if (!track.matches(":hover") && !document.querySelector(".slider-arrow-btn:hover")) {
            isPaused = false;
          }
        }, 2000);
      }
    }

    requestAnimationFrame(stepAnimate);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => nudge("next"));
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => nudge("prev"));
  }

  // Re-calculate the scroll boundary on screen size change
  window.addEventListener("resize", () => {
    updateScrollLimit();
    // Re-clamp position within bounds if needed
    if (scrollPosition >= scrollLimit) {
      scrollPosition = scrollPosition % scrollLimit;
    }
  });

  // Start smooth scrolling animation loop after a delay to ensure accurate DOM dimensions
  setTimeout(() => {
    updateScrollLimit();
    requestAnimationFrame(animate);
  }, 300);

  // 10. Global Inner Page Hero Slider
  const headerSlides = document.querySelectorAll('.header-slide');
  let currentHeaderSlide = 0;
  const headerSlideInterval = 4000;

  if (headerSlides.length > 1) {
    setInterval(() => {
      headerSlides[currentHeaderSlide].classList.remove('active');
      currentHeaderSlide = (currentHeaderSlide + 1) % headerSlides.length;
      headerSlides[currentHeaderSlide].classList.add('active');
    }, headerSlideInterval);
  }
});
