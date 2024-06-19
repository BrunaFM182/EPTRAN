var btn = document.querySelector('#show-or-hide');
var container_menu = document.querySelector('.container_menu');

btn.addEventListener('click', function() {

    if(container_menu.style.display === 'block') {
        container_menu.style.display = 'none';
    } else {
        container_menu.style.display = 'block'
    }
});
