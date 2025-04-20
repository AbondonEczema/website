// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Video lazy-loading (optional)
    const videoContainer = document.querySelector('.video-container');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            const iframe = videoContainer.querySelector('iframe');
            iframe.src = iframe.dataset.src;
            observer.unobserve(videoContainer);
        }
    }, { threshold: 0.5 });

    observer.observe(videoContainer);
});