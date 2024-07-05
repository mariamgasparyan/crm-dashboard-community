document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('sidebar-toggle-btn');
    const sidebar = document.getElementById('sidebar');

    // Add click event listener to the toggle button
    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('sidebar--minimized');
        document.body.classList.toggle('body--sidebar-minimized');
    });
});