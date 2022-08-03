document.addEventListener('DOMContentLoaded', () => {


    console.log('overlay')
    document.body.querySelectorAll('.overlay__close-btn').forEach(btn => {
        console.log('overlay-btn')
        btn.addEventListener('click', () => {
            console.log('clicked')
            document.querySelectorAll('.overlay').forEach(overlay => overlay.style.display = 'none')
        });
    });

});