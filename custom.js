document.addEventListener('DOMContentLoaded', function () {
    console.log('Custom JavaScript is running!');
    var toc = document.querySelector('.md-nav');
    if (toc) {
        toc.classList.add('md-nav--closed');
    }
});
