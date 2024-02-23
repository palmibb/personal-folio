document.querySelector('.scroll-link').addEventListener('click', function(event) {
    event.preventDefault();

    const targetSection = document.querySelector('.recent');
    const targetPosition = targetSection.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const scrollAmount = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, scrollAmount);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
});
// ----------------------------------- Scrolling-to--------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
  const checkbox = document.getElementById('themeToggle');
  
  // Retrieve the theme state from local storage
  const themeState = localStorage.getItem("themeState");

  // If the theme state is true, check the checkbox and apply the theme
  if (themeState === "true") {
    checkbox.checked = true;
    document.body.classList.add('dark-theme');
  }

  // Add event listener to toggle the theme
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    // Store the theme state in local storage
    localStorage.setItem("themeState", this.checked);
  });
});


// --------------------------------------------DarkTheme----------------------------------------------------