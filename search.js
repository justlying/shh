const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function normalizeUrl(rawValue) {
    const value = rawValue.trim();
    if (!value) return null;

    const hasProtocol = /^[a-zA-Z]+:\/\//.test(value);
    const hasDot = value.includes('.') || value.includes('/');

    if (hasProtocol) return value;
    if (hasDot) return 'https://' + value;

    return 'https://www.google.com/search?q=' + encodeURIComponent(value);
}

function handleSearch() {
    const target = normalizeUrl(searchInput.value);
    if (!target) return;

    const newTab = window.open('about:blank', '_blank');
    if (!newTab) {
        alert('Popup blocked. Please allow popups and try again.');
        return;
    }

    // Write HTML with iframe to keep address bar as about:blank
    newTab.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                * { margin: 0; padding: 0; }
                body { width: 100%; height: 100vh; }
                iframe { width: 100%; height: 100%; border: none; }
            </style>
        </head>
        <body>
            <iframe src="${target}" sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"></iframe>
        </body>
        </html>
    `);
    newTab.document.close();
}

if (searchBtn) {
    searchBtn.addEventListener('click', handleSearch);
}

if (searchInput) {
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') handleSearch();
    });
}