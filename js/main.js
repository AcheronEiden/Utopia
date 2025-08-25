document.addEventListener("DOMContentLoaded", function() {
    fetch('/_nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });
});