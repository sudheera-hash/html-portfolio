document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav span a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            const href = this.getAttribute('href');
            openPage(href); 
        });
    });

    function openPage(page) {
        window.location.href = page;
    }

    createFloatingShapes();
});

function createFloatingShapes() {
    const container = document.querySelector('.floating-shapes');

    if (container) {
        for (let i = 0; i < 15; i++) {
            const shape = document.createElement('div');
            shape.classList.add('floating-shape');
            shape.style.backgroundColor = getRandomColor();
            shape.style.border = `1px solid #fff`; 
            shape.style.top = `${Math.random() * 100}vh`;
            shape.style.left = `${Math.random() * 100}vw`;
            shape.style.animationDuration = `${5 + Math.random() * 10}s`;
            container.appendChild(shape);
        }
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.8)`; 
}
