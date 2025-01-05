// Example functionality if needed
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded successfully!');
    
    const button = document.querySelector('.button');
    button.addEventListener('mouseover', () => {
        console.log('Hovering over the main button!');
    });

    const discordLink = document.querySelector('.discord-link');
    discordLink.addEventListener('click', (event) => {
        console.log('Redirecting to Discord...');
    });
});
