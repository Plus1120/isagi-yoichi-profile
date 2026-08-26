function toggleInfo() {
    const details = document.getElementById('info-details');
    const btn = document.querySelector('.toggle-btn');
    
    if (details.style.display === 'none') {
        details.style.display = 'block';
        btn.textContent = '▲ Hide Details';
    } else {
        details.style.display = 'none';
        btn.textContent = '▼ Show Details';
    }
}

function toggleContent(element) {
    const content = element.querySelector('.toggle-section-content');
    const header = element.querySelector('strong');
    
    if (content.style.display === 'none' || !content.style.display) {
        content.style.display = 'block';
        header.textContent = header.textContent.replace('▼', '▲');
    } else {
        content.style.display = 'none';
        header.textContent = header.textContent.replace('▲', '▼');
    }
}

// Highlight active navigation link
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});