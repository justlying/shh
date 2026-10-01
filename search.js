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

    newTab.location.href = target;
}

if (searchBtn) {
    searchBtn.addEventListener('click', handleSearch);
}

if (searchInput) {
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') handleSearch();
    });
}
