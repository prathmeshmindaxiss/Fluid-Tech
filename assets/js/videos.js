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

// --- VIDEO MODAL LOGIC ---

// 1. Function to open the video
function openVideoModal(url) {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('videoPlayer');

  // Convert standard YouTube links to Embed links
  let embedUrl = url;
  if (url.includes('youtu.be/')) {
    // Converts "https://youtu.be/ID" to "https://www.youtube.com/embed/ID?autoplay=1"
    embedUrl = url.replace('youtu.be/', 'www.youtube.com/embed/') + '?autoplay=1';
  } else if (url.includes('watch?v=')) {
    embedUrl = url.replace('watch?v=', 'embed/') + '&autoplay=1';
  }

  // Set the iframe source and show the modal
  player.src = embedUrl;
  modal.style.display = 'flex';
}

// 2. Function to close the video
function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('videoPlayer');
  
  // Hide modal and clear the video source so it stops playing in the background
  modal.style.display = 'none';
  player.src = ''; 
}

// Optional: Close modal if user clicks outside the video area
window.onclick = function(event) {
  const modal = document.getElementById('videoModal');
  if (event.target === modal) {
    closeVideoModal();
  }
}