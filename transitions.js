document.addEventListener('DOMContentLoaded', () => {
    // Add transition class to the body
    document.body.classList.add('transition-fade');
    
    // Handle all internal navigation links
    document.querySelectorAll('a').forEach(link => {
        // Only handle internal links
        if (link.href.includes(window.location.origin) && !link.hasAttribute('target')) {
            link.addEventListener('click', e => {
                e.preventDefault();
                const target = link.href;
                
                // Add animation class
                document.documentElement.classList.add('is-animating');
                
                // After animation, navigate to the new page
                setTimeout(() => {
                    window.location.href = target;
                }, 500);
            });
        }
    });
});

// When page loads, trigger entrance animation
window.addEventListener('load', () => {
    document.documentElement.classList.remove('is-animating');
}); 