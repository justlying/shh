// Password authentication for s3hhh page
const correctPassword = "B@lencimanchrom3hearts";

function initPasswordGate() {
    const passwordScreen = document.getElementById('passwordScreen');
    const passwordInput = document.getElementById('passwordInput');
    const submitButton = document.getElementById('submitPassword');
    const errorMessage = document.getElementById('passwordError');
    const mainContent = document.getElementById('mainContent');

    // Only run on s3hhh page
    if (!passwordScreen) return;

    // Check if password was already entered in this session
    if (sessionStorage.getItem('s3hhhUnlocked') === 'true') {
        passwordScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        return;
    }

    submitButton.addEventListener('click', () => {
        const enteredPassword = passwordInput.value;
        
        if (enteredPassword === correctPassword) {
            sessionStorage.setItem('s3hhhUnlocked', 'true');
            passwordScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
            errorMessage.textContent = '';
        } else {
            errorMessage.textContent = 'Incorrect password';
            passwordInput.value = '';
            passwordInput.focus();
        }
    });

    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitButton.click();
        }
    });

    passwordInput.focus();
}

initPasswordGate();