var loaderSection = document.getElementById('loader-section');
var fill = document.getElementById('loader-fill');
var main = document.getElementById('main');

var percent = 0;
var timer = setInterval(function () {
    percent += 1;
    if (percent > 100) percent = 100;
    fill.style.width = percent + '%';

    if (percent === 100) {
        clearInterval(timer);
        loaderSection.style.display = 'none';
        main.style.display = 'block';
        window.dispatchEvent(new Event('registration-start'));
    }
}, 20);

