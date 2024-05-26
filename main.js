document.querySelector('.burger').addEventListener('click', function() {
    var list = document.querySelector('.navbar');
    if (list.style.display === 'none' ) {
        list.style.display = 'flex';
    } else {
        list.style.display = 'none';
    }
});