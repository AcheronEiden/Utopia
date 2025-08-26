document.addEventListener("DOMContentLoaded", function() {
    // Load the navigation bar
    fetch('/_nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });
    // Load the footer
    fetch('/_footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});