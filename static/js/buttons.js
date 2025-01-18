// Delete input field
document.getElementById('del-input-field')?.addEventListener('click', () => {
    const translation = document.getElementById('input');
    if (translation) {
        translation.value = '';
    }
});

//Insert
document.getElementById('insert')?.addEventListener('click', async () => {
    try {
        const clipboardText = await navigator.clipboard.readText(); 
        const inputField = document.getElementById('input');
        if (inputField) {
            inputField.value = clipboardText; 
        }
    } catch (err) {
        console.error('Failed to read clipboard contents: ', err);
    }
});

// Delete translation field
document.getElementById('del-translation-field')?.addEventListener('click', () => {
    const translation = document.getElementById('translation');
    if (translation) {
        translation.value = '';
    }
});

// Copy
document.getElementById('copy-btn')?.addEventListener('click', () => {
    const translation = document.getElementById('translation');
    if (translation) {
        translation.select();
        document.execCommand('copy');
        alert('Text copied to clipboard!');
    }
});

// Swap
document.getElementById('swap-btn')?.addEventListener('click', () => {
    const sourceLang = document.getElementById('source_lang');
    const targetLang = document.getElementById('target_lang');

    if (sourceLang && targetLang) {
        // Swap values
        [sourceLang.value, targetLang.value] = [targetLang.value, sourceLang.value];
    } else {
        console.error('One or both of the language elements are missing.');
    }

});
