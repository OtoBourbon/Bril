const toggle = document.querySelector('.navbar-toggle');
const menu = document.querySelector('.navbar-menu');
const animatedDiv = document.getElementById('animatedDiv')

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        animatedDiv.classList.toggle('jumpingDiv');
    });

    window.addEventListener('scroll', () => {
        const scrollButton = document.querySelector('#scroll-button');
        
        if (window.scrollY === 0) {
          scrollButton.style.display = 'block';
        } else {
          scrollButton.style.display = 'none';
        }
      });

      function reloadPage() {
        location.reload();
      }

      window.addEventListener('scroll', () => {
        const scrollButton = document.querySelector('#scroll-button');
        
        if (window.scrollY === 0) {
          scrollButton.style.opacity = '1';
        } else {
          scrollButton.style.opacity = '0';
        }
      });