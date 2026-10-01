// Follow button functionality
const followBtn = document.getElementById('followBtn');
const popup = document.getElementById('popup');
const popupClose = document.querySelector('.popup-close');

if (followBtn) {
    followBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        popup.classList.remove('hidden');
    });

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const width = followBtn.offsetWidth;
        const height = followBtn.offsetHeight;
        
        followBtn.style.position = 'fixed';
        followBtn.style.left = (x + 15) + 'px';
        followBtn.style.top = (y + 15) + 'px';
    });
}

// Close popup when clicking X
if (popupClose) {
    popupClose.addEventListener('click', (e) => {
        e.stopPropagation();
        popup.classList.add('hidden');
    });
}

// Close popup when clicking outside content
if (popup) {
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.add('hidden');
        }
    });
}

// Key button functionality (only on r0x page)
const keyBtn = document.getElementById('keyBtn');
const linksPopup = document.getElementById('linksPopup');

if (keyBtn) {
    keyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        linksPopup.classList.remove('hidden');
    });
}

// Close links popup when clicking X
if (linksPopup) {
    const closeBtn = linksPopup.querySelector('.popup-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            linksPopup.classList.add('hidden');
        });
    }

    linksPopup.addEventListener('click', (e) => {
        if (e.target === linksPopup) {
            linksPopup.classList.add('hidden');
        }
    });
}

// Prevent popup from closing when clicking inside
const popupContent = document.querySelector('.popup-content');
if (popupContent) {
    popupContent.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}