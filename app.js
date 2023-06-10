window.addEventListener('load', function() {
    let myDiv = document.querySelector('.myDiv');
    let arrow = document.querySelector('.arrow-downwards');

    myDiv.classList.add('visible');

    setTimeout(function() {
        arrow.classList.add('visible');
    }, 2000);
});

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY || window.pageYOffset;
    let cube = document.getElementById('cube');

    let rotation = scrollPosition * 0.5;

    cube.style.transform = 'rotateY(' + rotation + 'deg)';
});

