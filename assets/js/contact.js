document.addEventListener("DOMContentLoaded", () => {

  /* --- 1. SCROLL REVEAL ANIMATIONS --- */
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToReveal = document.querySelectorAll('.reveal-up');
  elementsToReveal.forEach(el => revealObserver.observe(el));


  /* --- 2. WHATSAPP FORM SUBMISSION & VALIDATION --- */
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    // Helper to validate a specific field
    const validateField = (id, val, errorId, validateFn) => {
      const inputEl = document.getElementById(id);
      const errorEl = document.getElementById(errorId);
      if (!inputEl || !errorEl) return true;

      if (!validateFn(val)) {
        inputEl.classList.add('invalid');
        errorEl.style.display = 'block';
        return false;
      } else {
        inputEl.classList.remove('invalid');
        errorEl.style.display = 'none';
        return true;
      }
    };

    // Get current fields values and validation rules
    const getFieldRules = () => {
      const name = document.getElementById('userName') ? document.getElementById('userName').value.trim() : '';
      const phone = document.getElementById('userPhone') ? document.getElementById('userPhone').value.trim() : '';
      const email = document.getElementById('userEmail') ? document.getElementById('userEmail').value.trim() : '';
      const address = document.getElementById('userAddress') ? document.getElementById('userAddress').value.trim() : '';
      const subject = document.getElementById('userSubject') ? document.getElementById('userSubject').value.trim() : '';
      const topic = document.getElementById('userTopic') ? document.getElementById('userTopic').value : '';
      const message = document.getElementById('userMessage') ? document.getElementById('userMessage').value.trim() : '';

      return [
        { id: 'userName', val: name, errorId: 'userNameError', validate: v => v !== "" },
        { id: 'userPhone', val: phone, errorId: 'userPhoneError', validate: v => /^[0-9]{10}$/.test(v) },
        { id: 'userEmail', val: email, errorId: 'userEmailError', validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
        { id: 'userAddress', val: address, errorId: 'userAddressError', validate: v => v !== "" },
        { id: 'userSubject', val: subject, errorId: 'userSubjectError', validate: v => v !== "" },
        { id: 'userTopic', val: topic, errorId: 'userTopicError', validate: v => v !== "" && v !== null },
        { id: 'userMessage', val: message, errorId: 'userMessageError', validate: v => v !== "" }
      ];
    };

    // Attach real-time input/change listeners for active validation
    getFieldRules().forEach(rule => {
      const inputEl = document.getElementById(rule.id);
      if (inputEl) {
        const eventType = inputEl.tagName === 'SELECT' ? 'change' : 'input';
        inputEl.addEventListener(eventType, () => {
          const rules = getFieldRules();
          const currentRule = rules.find(r => r.id === rule.id);
          if (currentRule) {
            validateField(currentRule.id, currentRule.val, currentRule.errorId, currentRule.validate);
          }
        });
      }
    });

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let isValid = true;
      const rules = getFieldRules();

      rules.forEach(rule => {
        const isFieldValid = validateField(rule.id, rule.val, rule.errorId, rule.validate);
        if (!isFieldValid) {
          isValid = false;
        }
      });

      if (!isValid) {
        return;
      }

      const name = document.getElementById('userName').value.trim();
      const phone = document.getElementById('userPhone').value.trim();
      const email = document.getElementById('userEmail').value.trim();
      const address = document.getElementById('userAddress').value.trim();
      const subject = document.getElementById('userSubject') ? document.getElementById('userSubject').value.trim() : '';
      const topic = document.getElementById('userTopic').value;
      const message = document.getElementById('userMessage').value.trim();

      // --- WHATSAPP REDIRECTION ---
      const whatsappNumber = "917261962201";

      const whatsappText = `*New Machinery / Solution Quote Request*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Address:* ${address}%0A*Subject:* ${subject}%0A*Machinery Type:* ${topic}%0A*Message / Specs:* ${message}`;

      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

      window.open(whatsappURL, '_blank');

      contactForm.reset();
    });

    // Ripple effect for submit button
    const submitBtn = contactForm.querySelector('.submit-btn');
    if (submitBtn) {
      submitBtn.addEventListener('click', function (e) {
        const rect = submitBtn.getBoundingClientRect();
        const ripple = document.createElement('span');

        ripple.className = 'ripple';
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
        ripple.style.left = e.clientX - rect.left - ripple.offsetWidth / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - ripple.offsetHeight / 2 + 'px';

        submitBtn.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    }
  }

});


document.addEventListener("DOMContentLoaded", () => {

  // Dynamic Business Hours Logic (Checks IST Time)
  function checkBusinessHours() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const ist = new Date(utc + (3600000 * 5.5));

    const day = ist.getDay(); // 0 = Sun, 1 = Mon ... 6 = Sat
    const hours = ist.getHours();
    const minutes = ist.getMinutes();
    const timeFloat = hours + (minutes / 60);

    const badgeElement = document.getElementById('storeStatusBadge');
    const textElement = document.getElementById('storeStatusText');

    if (!badgeElement || !textElement) return;

    let isOpen = false;

    // Mon-Sat: 9:30 AM to 6:30 PM
    if (day >= 1 && day <= 6) {
      if (timeFloat >= 9.5 && timeFloat < 18.5) {
        isOpen = true;
      }
    }

    if (isOpen) {
      badgeElement.className = 'status-badge open';
      textElement.innerText = 'Open Now';
    } else {
      badgeElement.className = 'status-badge closed';
      textElement.innerText = 'Closed';
    }
  }

  checkBusinessHours();
  setInterval(checkBusinessHours, 60000);

});