document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.slide-up-fade');
    elements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('slide-up-fade-in');
        }, 200 + i * 120);
    });
}); 