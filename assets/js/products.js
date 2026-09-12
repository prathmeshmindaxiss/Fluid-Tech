document.addEventListener("DOMContentLoaded", () => {
  const headerSlides = document.querySelectorAll('.header-slide');
  let currentHeaderSlide = 0;
  const headerSlideInterval = 4000; // 4 seconds

  if (headerSlides.length > 0) {
    setInterval(() => {
      headerSlides[currentHeaderSlide].classList.remove('active');
      currentHeaderSlide = (currentHeaderSlide + 1) % headerSlides.length;
      headerSlides[currentHeaderSlide].classList.add('active');
    }, headerSlideInterval);
  }
});

document.addEventListener('DOMContentLoaded', () => {

  // 1. Horizontal Image Scroller Logic
  const galleries = document.querySelectorAll('.product-gallery');

  galleries.forEach(gallery => {
    const container = gallery.querySelector('.slider-container');
    const prevBtn = gallery.querySelector('.prev-btn');
    const nextBtn = gallery.querySelector('.next-btn');

    // Calculate exact width of one image dynamically
    const scrollAmount = () => container.clientWidth;

    nextBtn.addEventListener('click', () => {
      container.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      container.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
    });
  });

  // 2. Scroll Animation (Intersection Observer)
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px', // Triggers slightly before it enters the viewport entirely
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active'); // This triggers the CSS animations
        observer.unobserve(entry.target);     // Only animate once
      }
    });
  }, observerOptions);

  // Apply observer to all product cards
  const products = document.querySelectorAll('.reveal-on-scroll');
  products.forEach(product => {
    observer.observe(product);
  });

  // 3. Dynamic Product Selector logic for PD Flow Meters
  const pdMeterData = {
    "1/2": {
      title: "Series FT2300-15 PD Flow Meter",
      description: "The FluidTech P.D Flow Meter are designed to accurately measure and monitor the precise quantities of liquid fuels and solvent, the result is that the meter can measure intermittent flows, very low flow rates, and liquids of almost any viscosity. It gives accurate and precise reading; The LCD with back light display ensures easy readability.",
      images: [
        "/assets/images/Series FT2300-15 PD Flow Meter.webp",
        "/assets/images/Series FT2300-15 PD Flow Meter-2.webp"
      ],
      specs: [
        { label: "Size", value: "DN- 15 (1/2\")" },
        { label: "Flow Range", value: "1 – 20 LPM" },
        { label: "Accuracy", value: "±0.25% of Reading" },
        { label: "Operating Temp", value: "90°C Max" },
        { label: "Output", value: "Pulse. NPN" },
        { label: "Power", value: "24 V DC From PLC" }
      ],
      features: [
        "High Accuracy P.D Flow Sensor",
        "LCD Matrix Display",
        "RS485 Serial Modbus Output",
        "Resettable & Cumulative Totalise"
      ]
    },
    "3/4": {
      title: "Series FT2300-20 PD Flow Meter",
      description: "The Fluid Tech P.D Flow Meter are designed to accurately measure and monitor the precise quantities of liquid fuels and solvent, the result is that the meter can measure intermittent flows, very low flow rates, and liquids of almost any viscosity. It gives accurate and precise reading; The LCD with back light display ensures easy readability.",
      images: [
        "/assets/images/Series FT2300-20 PD Flow Meter.webp",
        "/assets/images/Series FT2300-20 PD Flow Meter-2.webp",
        "/assets/images/Series FT2300-20 PD Flow Meter-3.webp"
      ],
      specs: [
        { label: "Size", value: "DN- 20 (3/4\")" },
        { label: "Flow Range", value: "2 – 35 LPM" },
        { label: "Accuracy", value: "±0.25% of Reading" },
        { label: "Max Pressure", value: "10 Kg/cm²" },
        { label: "Operating Temp", value: "90°C Max" },
        { label: "Output", value: "Pulse. NPN" }
      ],
      features: [
        "High Accuracy P.D Flow Sensor",
        "LCD Matrix Display",
        "RS485 Serial Modbus Output",
        "Resettable & Cumulative Totalise"
      ]
    },
    "1": {
      title: "Series FT2300-25 PD Flow Meter",
      description: "The Fluid Tech P.D Flow Meter are designed to accurately measure and monitor the precise quantities of liquid fuels and solvent, the result is that the meter can measure intermittent flows, very low flow rates, and liquids of almost any viscosity. It gives accurate and precise reading; The LCD with back light display ensures easy readability.",
      images: [
        "/assets/images/FT2300-25 PD Flow Meter.webp",
        "/assets/images/FT2300-25 PD Flow Meter-2.webp"
      ],
      specs: [
        { label: "Size", value: "DN- 25 (1\")" },
        { label: "Flow Range", value: "4 – 50 LPM" },
        { label: "Accuracy", value: "±0.1% of Reading" },
        { label: "Max Pressure", value: "20 Kg/cm²" },
        { label: "Operating Temp", value: "90°C Max" },
        { label: "Output", value: "Pulse. NPN" }
      ],
      features: [
        "Flame & Weather-proof Display",
        "High Accuracy P.D Sensor",
        "RS485 Serial Modbus Output",
        "Wide Flow Range Support"
      ]
    },
    "dn40": {
      title: "Series FT2300-40 PD Flow Meter",
      description: "The Fluid Tech P.D Flow Meter are designed to accurately measure and monitor the precise quantities of liquid fuels and solvent, the result is that the meter can measure intermittent flows, very low flow rates, and liquids of almost any viscosity. It gives accurate and precise reading; The LCD with back light display ensures easy readability.",
      images: [
        "/assets/images/FT2300-50.webp",
        "/assets/images/FT2300-50-1.webp"
      ],
      specs: [
        { label: "Size", value: "DN- 40 (1/2 - 1\")" },
        { label: "Flow Range", value: "4 – 80 LPM" },
        { label: "Accuracy", value: "±0.25% of Reading" },
        { label: "Pressure / Temp", value: "1 Kg/cm² Max / 80°C Max" },
        { label: "End Connection", value: "Adaptor (3/4\" & 1\" Nozzle Suitable)" },
        { label: "Mounting", value: "On Flange" }
      ],
      features: [
        "Flame & Weather-proof Display",
        "High Accuracy P.D Sensor",
        "LCD Matrix Display",
        "RS485 Serial Modbus Output",
        "Resettable & Cumulative Totalise"
      ]
    },
    "vane1_5": {
      title: "Industrial PD Flow Meter",
      description: "The FluidTech Manufactured Positive Displacement Flowmeters are based on the time tested Vane type design. An Extremely reliable for long period of operation.",
      images: [
        "/assets/images/PD Flow Meter.webp",
        "/assets/images/PD Flow Meter-1.webp"
      ],
      specs: [
        { label: "Size / Model", value: "DN-40 (1-1/2\")" },
        { label: "Flow Range", value: "600 – 6000 LPH" },
        { label: "Accuracy", value: "±0.25%" },
        { label: "MOC", value: "Aluminum / Stainless Steel" },
        { label: "Max Press / Temp", value: "10 kg/cm² / 90°C" },
        { label: "End Connection", value: "1-1/2\" ANSI 150 Std Flange" },
        { label: "Power Supply", value: "230 V AC / 12 V DC" }
      ],
      features: [
        "No Straight Pipe Lengths Required",
        "Zero Effect from Pipeline Vibration",
        "Ideal for Batching Applications",
        "Zero Warm-Up Time Required",
        "6-Digit Remote/Mounted LED Display",
        "Built-in 149 Micron Filtration"
      ],
      featuresHeader: "Design Features"
    },
    "2": {
      title: "Series FT2300-50 PD Flow Meter",
      description: "The Fluid Tech P.D Flow Meter are designed to accurately measure and monitor the precise quantities of liquid fuels and solvent, the result is that the meter can measure intermittent flows, very low flow rates, and liquids of almost any viscosity. It gives accurate and precise reading; The LCD with back light display ensures easy readability.",
      images: [
        "/assets/images/FT2300-50.webp",
        "/assets/images/FT2300-50-1.webp",
        "/assets/images/FT2300-50-2.webp"
      ],
      specs: [
        { label: "Size", value: "DN- 50 (2\") 2\" BSPF" },
        { label: "Flow Range", value: "20 – 200 LPM" },
        { label: "Accuracy", value: "±0.1% of Reading" },
        { label: "MOC", value: "Aluminium (ENP) / SS 304 / SS 316" },
        { label: "Max Press / Temp", value: "20 Kg/cm² / 90°C" },
        { label: "Power", value: "230 V AC / 12 V DC" }
      ],
      features: [
        "Flame & Weather-proof Enclosures",
        "High Accuracy P.D Sensor",
        "LCD Matrix Display",
        "RS485 Serial Modbus Output",
        "Resettable & Cumulative Totalise"
      ]
    },
    "3": {
      title: "Series FT2300-80 PD Flow Meter",
      description: "The Fluid Tech P.D Flow Meter are designed to accurately measure and monitor the precise quantities of liquid fuels and solvent, the result is that the meter can measure intermittent flows, very low flow rates, and liquids of almost any viscosity. It gives accurate and precise reading; The LCD with back light display ensures easy readability.",
      images: [
        "/assets/images/Series FT2300-80.webp",
        "/assets/images/Series FT2300-80-1.webp",
        "/assets/images/Series FT2300-80-2.webp",
        "/assets/images/Series FT2300-80-3.webp"
      ],
      specs: [
        { label: "Size", value: "DN- 80 (3\") 3\" BSPF" },
        { label: "Flow Range", value: "40 – 400 LPM" },
        { label: "Accuracy", value: "±0.1% of Reading" },
        { label: "MOC", value: "Aluminium (ENP) / SS 304 / SS 316" },
        { label: "Max Press / Temp", value: "20 Kg/cm² / 90°C" },
        { label: "Power", value: "230 V AC / 12 V DC" }
      ],
      features: [
        "Wide Range: 2400 to 24000 LPH",
        "Flame & Weather-proof Enclosures",
        "High Accuracy P.D Sensor",
        "LCD Matrix Display",
        "RS485 Serial Modbus Output"
      ]
    }
  };

  const sizeButtons = document.querySelectorAll('#size-selector-buttons button');
  const titleEl = document.getElementById('combined-title');
  const descEl = document.getElementById('combined-desc');
  const specsEl = document.getElementById('combined-specs');
  const featuresEl = document.getElementById('combined-features');
  const featuresHeaderEl = document.getElementById('combined-features-header');
  const sliderContainerEl = document.getElementById('combined-slider-container');

  function updatePDMeterCard(sizeKey) {
    const data = pdMeterData[sizeKey];
    if (!data) return;

    // Update Title & Desc
    titleEl.textContent = data.title;
    descEl.textContent = data.description;

    // Update Specs
    specsEl.innerHTML = data.specs.map(spec => `<li><strong>${spec.label}:</strong> ${spec.value}</li>`).join('');

    // Update Features Header
    featuresHeaderEl.innerHTML = `<i class="fas fa-list text-muted me-2"></i> ${data.featuresHeader || "Key Features"}`;

    // Update Features list
    featuresEl.innerHTML = data.features.map(feat => `<li><i class="fas fa-check text-success"></i> ${feat}</li>`).join('');

    // Update Images
    sliderContainerEl.innerHTML = data.images.map(imgSrc => `<img src="${imgSrc}" alt="${data.title}" title="${data.title}" class="slider-img">`).join('');

    // Reset slider scroll position to 0
    sliderContainerEl.scrollLeft = 0;
  }

  if (sizeButtons.length > 0) {
    sizeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        sizeButtons.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        // Update card
        updatePDMeterCard(btn.getAttribute('data-size'));
      });
    });
  }

  // 4. Product Category Filter System
  const filterButtons = document.querySelectorAll('.filter-tab');
  const productShowcases = document.querySelectorAll('.product-showcase');

  if (filterButtons.length > 0 && productShowcases.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active class on filter tabs
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        productShowcases.forEach(product => {
          // Restore display if it was hidden by a direct product link
          product.style.display = '';
          const category = product.getAttribute('data-category');

          if (filter === 'all' || category === filter) {
            if (product.classList.contains('filtered-out')) {
              // Prepare it on the right side to slide in
              product.style.transition = 'none'; // Temporarily disable transitions
              product.classList.remove('filtered-out-left');
              product.classList.add('filtered-out-right');

              // Force reflow
              product.offsetHeight;

              // Remove filtering classes to let it slide into center
              product.style.transition = '';
              product.classList.remove('filtered-out');
              product.classList.remove('filtered-out-right');
            } else {
              product.classList.remove('filtered-out');
              product.classList.remove('filtered-out-left');
              product.classList.remove('filtered-out-right');
            }
            product.classList.add('active');
          } else {
            // Slide out to the left
            product.classList.remove('filtered-out-right');
            product.classList.add('filtered-out-left');
            product.classList.add('filtered-out');
            product.classList.remove('active');
          }
        });
      });
    });
  }

  // 5. Auto-filter & Auto-scroll based on URL query parameters (supports both category filter and specific product scroll)
  function parseUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    const productParam = urlParams.get('product');

    if (filterParam && filterButtons.length > 0) {
      const targetTab = Array.from(filterButtons).find(btn => btn.getAttribute('data-filter') === filterParam);
      if (targetTab) {
        setTimeout(() => {
          targetTab.click();
          const filterContainer = document.querySelector('.category-filter-container');
          if (filterContainer) {
            filterContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      }
    }

    if (productParam) {
      const showcases = document.querySelectorAll('.product-showcase');
      const cleanProductParam = productParam.toLowerCase().trim();
      
      if (cleanProductParam.startsWith('pd-flow-meter-') || cleanProductParam === 'industrial-pd-flow-meter') {
        let sizeKey = cleanProductParam.replace('pd-flow-meter-', '');
        if (sizeKey === '1.5' || sizeKey === '1_5' || sizeKey === '1-1/2') sizeKey = 'dn40';
        if (sizeKey === 'industrial' || cleanProductParam === 'industrial-pd-flow-meter') sizeKey = 'vane1_5';
        
        // Hide all showcases initially
        showcases.forEach(showcase => {
          showcase.classList.remove('active');
          showcase.style.display = 'none';
        });

        const combinedCard = document.querySelector('.pd-meters-combined-card');
        if (combinedCard) {
            combinedCard.classList.remove('filtered-out', 'filtered-out-left', 'filtered-out-right');
            combinedCard.classList.add('active');
            combinedCard.style.display = ''; // Restore display
        }

        // Deselect filter tabs
        if (filterButtons.length > 0) {
           filterButtons.forEach(b => b.classList.remove('active'));
        }

        // Find and click the size button on the combined card
        const sizeBtn = Array.from(sizeButtons).find(btn => btn.getAttribute('data-size') === sizeKey);
        if (sizeBtn) {
          setTimeout(() => {
            sizeBtn.click();
            if (combinedCard) {
              combinedCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
              combinedCard.classList.add('glow-highlight');
              setTimeout(() => combinedCard.classList.remove('glow-highlight'), 2500);
            }
          }, 400);
        }
      } else {
        // Find normal product showcase cards
        let foundAny = false;
        showcases.forEach(showcase => {
          const titleEl = showcase.querySelector('.product-title');
          const dataProductId = (showcase.getAttribute('data-product-id') || showcase.id || '').toLowerCase();

          let isMatch = false;

          if (dataProductId && (dataProductId.includes(cleanProductParam) || cleanProductParam.includes(dataProductId.split(' ')[0]))) {
            isMatch = true;
          }

          if (!isMatch && titleEl) {
            const slug = titleEl.textContent.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            if (slug.includes(cleanProductParam) || cleanProductParam.includes(slug)) {
              isMatch = true;
            } else {
              // Custom alias fallback
              const normParam = cleanProductParam.replace(/[^a-z0-9]/g, '');
              const normSlug = slug.replace(/[^a-z0-9]/g, '');
              if ((normParam.includes('3302') && (normSlug.includes('3302') || normSlug.includes('mobilefuel'))) ||
                  (normParam.includes('3301') && (normSlug.includes('3301') || normSlug.includes('fueldispens'))) ||
                  (normParam.includes('mobilefuel') && (normSlug.includes('mobilefuel') || normSlug.includes('ft3302'))) ||
                  (normParam.includes('automobile') && (normSlug.includes('mobilefuel') || normSlug.includes('ft3302'))) ||
                  (normParam.includes('industrialdispenser') && (normSlug.includes('ft3301') || normSlug.includes('fueldispens'))) ||
                  (normParam.includes('automatedfuel') && (normSlug.includes('ft3301') || normSlug.includes('fueldispens'))) ||
                  (normParam.includes('hydraulicoil') && normSlug.includes('dieseltankwater')) ||
                  (normParam.includes('dieseltankwater') && normSlug.includes('dieseltankwater'))) {
                isMatch = true;
              }
            }
          }

          if (isMatch) {
            showcase.classList.remove('filtered-out', 'filtered-out-left', 'filtered-out-right');
            showcase.classList.add('active');
            showcase.style.display = '';
            foundAny = true;
            
            // Scroll and glow
            setTimeout(() => {
              showcase.scrollIntoView({ behavior: 'smooth', block: 'center' });
              showcase.classList.add('glow-highlight');
              setTimeout(() => showcase.classList.remove('glow-highlight'), 2500);
            }, 400);
          } else {
            showcase.classList.remove('active');
            showcase.style.display = 'none';
          }
        });
        
        if (foundAny && filterButtons.length > 0) {
           filterButtons.forEach(b => b.classList.remove('active'));
        }
      }
    }
  }

  // Parse parameters initially
  parseUrlParameters();

  // 6. Dynamic link click interception (prevents reload when clicking product links on our-products.html)
  document.addEventListener('click', (e) => {
    const productLink = e.target.closest('a[href*="product="]');
    if (productLink && (window.location.pathname.includes('our-products.html') || window.location.pathname.includes('products.html'))) {
      const href = productLink.getAttribute('href');
      if (href && href.includes('product=')) {
        e.preventDefault();

        // Update URL bar without reloading
        const queryIndex = href.indexOf('?');
        const queryString = queryIndex !== -1 ? href.substring(queryIndex) : '';
        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + queryString;
        window.history.pushState({ path: newUrl }, '', newUrl);

        // Re-run parameter parser dynamically
        parseUrlParameters();
      }
    }
  });
});
