const followBtn = document.getElementById('followBtn');
const popup = document.getElementById('popup');
const popupClose = document.querySelector('.popup-close');

// The homepage button opens the popup but stays in a fixed position.
if (followBtn) {
    followBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        if (popup) popup.classList.remove('hidden');
    });
}

if (popupClose) {
    popupClose.addEventListener('click', (event) => {
        event.stopPropagation();
        if (popup) popup.classList.add('hidden');
    });
}

if (popup) {
    popup.addEventListener('click', (event) => {
        if (event.target === popup) popup.classList.add('hidden');
    });
}

const keyBtn = document.getElementById('keyBtn');
const linksPopup = document.getElementById('linksPopup');

if (keyBtn && linksPopup) {
    keyBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        linksPopup.classList.remove('hidden');
    });

    const closeBtn = linksPopup.querySelector('.popup-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            linksPopup.classList.add('hidden');
        });
    }

    linksPopup.addEventListener('click', (event) => {
        if (event.target === linksPopup) linksPopup.classList.add('hidden');
    });
}

// Keep popup contents from triggering the overlay click handler.
document.querySelectorAll('.popup-content').forEach((content) => {
    content.addEventListener('click', (event) => event.stopPropagation());
});