document.addEventListener("DOMContentLoaded", () => {
  // Hero Background Slideshow
  const headerSlides = document.querySelectorAll('.header-slide');
  let currentHeaderSlide = 0;
  const headerSlideInterval = 4000;

  if (headerSlides.length > 0) {
    setInterval(() => {
      headerSlides[currentHeaderSlide].classList.remove('active');
      currentHeaderSlide = (currentHeaderSlide + 1) % headerSlides.length;
      headerSlides[currentHeaderSlide].classList.add('active');
    }, headerSlideInterval);
  }

  // Reveal Animations on Scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToReveal = document.querySelectorAll('.reveal-fade, .reveal-up');
  elementsToReveal.forEach(el => revealObserver.observe(el));

  // ==========================================
  // PINTEREST CATEGORY FILTERING & LIGHTBOX
  // ==========================================
  const filterPills = document.querySelectorAll(".pin-filter-pill");
  const pinCards = Array.from(document.querySelectorAll(".pin-card"));
  
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("lightboxImg");
  const modalCaption = document.getElementById("lightboxCaption");
  const modalSubcaption = document.getElementById("lightboxSubcaption");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  let currentVisiblePins = [...pinCards];
  let currentPinIndex = -1;

  // Filter functionality
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      const filterValue = pill.getAttribute("data-filter");

      pinCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          card.classList.remove("pin-hidden");
        } else {
          card.classList.add("pin-hidden");
        }
      });

      // Update currently visible pins list for lightbox navigation
      currentVisiblePins = pinCards.filter(card => !card.classList.contains("pin-hidden"));
    });
  });

  // Function to open Lightbox at specific index in currentVisiblePins
  function openLightbox(index) {
    if (index < 0 || index >= currentVisiblePins.length) return;
    currentPinIndex = index;
    const pin = currentVisiblePins[currentPinIndex];
    const img = pin.querySelector("img");
    const caption = pin.getAttribute("data-caption") || (img ? img.alt : "");
    const tag = pin.getAttribute("data-tag") || "";

    if (img) {
      modalImg.src = img.src;
      modalImg.alt = img.alt || "Pin Image";
      modalImg.title = img.title || img.alt || "Pin Image";
      if (modalCaption) modalCaption.textContent = caption;
      if (modalSubcaption) {
        modalSubcaption.textContent = tag;
        modalSubcaption.style.display = tag ? "inline-block" : "none";
      }

      modal.style.display = "flex";
      setTimeout(() => {
        modal.classList.add("active");
        document.body.classList.add("lightbox-open");
      }, 10);
    }
  }

  function showNextPin() {
    if (currentVisiblePins.length <= 1) return;
    currentPinIndex = (currentPinIndex + 1) % currentVisiblePins.length;
    openLightbox(currentPinIndex);
  }

  function showPrevPin() {
    if (currentVisiblePins.length <= 1) return;
    currentPinIndex = (currentPinIndex - 1 + currentVisiblePins.length) % currentVisiblePins.length;
    openLightbox(currentPinIndex);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("active");
    document.body.classList.remove("lightbox-open");
    setTimeout(() => {
      modal.style.display = "none";
      if (modalImg) modalImg.src = "";
      if (modalCaption) modalCaption.textContent = "";
      if (modalSubcaption) modalSubcaption.textContent = "";
      currentPinIndex = -1;
    }, 350);
  }

  // Attach click listener to each pin card
  pinCards.forEach(card => {
    card.addEventListener("click", () => {
      // Refresh current visible pins in case of changes
      currentVisiblePins = pinCards.filter(c => !c.classList.contains("pin-hidden"));
      const index = currentVisiblePins.indexOf(card);
      if (index !== -1) {
        openLightbox(index);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); showPrevPin(); });
  if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); showNextPin(); });

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  window.addEventListener("keydown", (e) => {
    if (!modal || !modal.classList.contains("active")) return;
    if (e.key === "Escape") {
      closeModal();
    } else if (e.key === "ArrowRight") {
      showNextPin();
    } else if (e.key === "ArrowLeft") {
      showPrevPin();
    }
  });
});