document.querySelector('.scroll-link').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        document.querySelector('.recent').scrollIntoView({ behavior: 'smooth' });
    });