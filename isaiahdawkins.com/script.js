const splash = document.querySelector('.splash');

/*
document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
})
*/
document.addEventListener('DOMContentLoaded', (e) => {
    // Check if the splash page has been seen before using sessionStorage
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');

    if (!hasSeenSplash) {
        // If not seen, show the splash page
        setTimeout(() => {
            splash.classList.add('display-none');

            // Set a sessionStorage item to indicate that the splash page has been seen
            sessionStorage.setItem('hasSeenSplash', 'true');
        }, 2000); // Adjust the duration based on your preference
    } else {
        // If seen before, hide the splash page immediately
        splash.classList.add('display-none');
    }
});
