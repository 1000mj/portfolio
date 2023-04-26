window.addEventListener('scroll', function() {
    var gaugeBar = document.getElementById('gauge-bar');
    var scrollPosition = window.scrollY || window.pageYOffset;
    var pageHeight = document.documentElement.scrollHeight;
    var windowHeight = window.innerHeight;
    var fillRatio = scrollPosition / (pageHeight - windowHeight);
    gaugeBar.style.width = (fillRatio * 100) + '%';
});