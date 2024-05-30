function showSection(sectionId) {
    // Hide all sections except the hero section
    document.querySelectorAll('section').forEach(section => {
        if (section.id !== 'hero') {
            section.style.display = 'none';
        }
    });
    // Show the clicked section
    document.getElementById(sectionId).style.display = 'block';
}

// Show the hero section and the overview section by default
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('section').forEach(section => {
        if (section.id !== 'hero') {
            section.style.display = 'none';
        }
    });
    document.getElementById('overview').style.display = 'block';

    // Handle form submission
    document.getElementById('enrollment-form').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('enrollment-form').style.display = 'none';
        document.getElementById('thank-you').style.display = 'block';
    });
});
