
document.addEventListener('DOMContentLoaded', function() {
    const bubblesContainer = document.querySelector('.bubbles-container');

    for (let i = 0; i < 25; i++) {
        createBubble();
    }

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${Math.random() * 10 + 5}s`

        bubblesContainer.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
            createBubble();
        }, parseFloat(bubble.style.animationDuration) * 1000);
    }
});