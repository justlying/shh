const correctPassword = 'B@lencimanchrom3hearts';

function openAboutBlankWithIframe(targetUrl) {
    const newTab = window.open('about:blank', '_blank');
    if (!newTab) {
        alert('Please allow popups to continue.');
        return;
    }

    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                * { box-sizing: border-box; }
                html, body { margin: 0; width: 100%; height: 100%; background: #111; }
                iframe { width: 100%; height: 100%; border: 0; }
            </style>
        </head>
        <body>
            <iframe src="${targetUrl}" sandbox="allow-scripts allow-forms allow-popups allow-same-origin allow-top-navigation"></iframe>
        </body>
        </html>
    `;

    newTab.document.open();
    newTab.document.write(html);
    newTab.document.close();
}

function unlockSite() {
    localStorage.setItem('portalUnlocked', 'true');
    const overlay = document.getElementById('passwordScreen');
    const content = document.getElementById('mainContent');

    if (overlay) overlay.classList.add('hidden');
    if (content) content.classList.remove('hidden');

    openAboutBlankWithIframe('https://manmansecuredgamesgithubio.vercel.app');
}

function initAuth() {
    const passwordScreen = document.getElementById('passwordScreen');
    const passwordInput = document.getElementById('passwordInput');
    const submitButton = document.getElementById('submitPassword');
    const errorMessage = document.getElementById('passwordError');
    const mainContent = document.getElementById('mainContent');

    if (!passwordScreen) return;

    if (localStorage.getItem('portalUnlocked') === 'true') {
        passwordScreen.classList.add('hidden');
        if (mainContent) mainContent.classList.remove('hidden');
        return;
    }

    const handleUnlock = () => {
        const value = passwordInput.value;
        if (value === correctPassword) {
            unlockSite();
            if (errorMessage) errorMessage.textContent = '';
        } else {
            if (errorMessage) errorMessage.textContent = 'Incorrect password';
            passwordInput.value = '';
            passwordInput.focus();
        }
    };

    if (submitButton) submitButton.addEventListener('click', handleUnlock);
    if (passwordInput) {
        passwordInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') handleUnlock();
        });
        passwordInput.focus();
    }
}

initAuth();
