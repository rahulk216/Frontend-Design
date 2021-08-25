var open = document.getElementById('open');
var close = document.getElementById('close');
var navlinks = document.querySelector('.nav-links');

function openfxn () {
    open.style.display = "none";
    close.style.display = 'block';
    navlinks.classList.add('active');
}

function closefxn () {
    open.style.display = "block";
    close.style.display = 'none';
    navlinks.classList.remove('active');
}