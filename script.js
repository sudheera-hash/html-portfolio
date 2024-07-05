document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            const page = this.getAttribute('data-page');
            openPage(page); 
        });
    });

    
    function openPage(page) {
        window.open(page, '_blank');
    }

    
    createFloatingShapes();
});


function createFloatingShapes() {
    const container = document.querySelector('.floating-shapes');

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


function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.8)`; 
}
