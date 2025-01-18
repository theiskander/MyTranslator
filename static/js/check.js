const sourceLang = document.getElementById('source_lang');
const targetLang = document.getElementById('target_lang');

function updateOptions() {
    const selectedSource = sourceLang.value;
    const selectedTarget = targetLang.value;

    // Updating target language
    Array.from(targetLang.options).forEach(option => {
        option.style.display = option.value === selectedSource ? 'none' : 'block';
    });

    // Updating source language
    Array.from(sourceLang.options).forEach(option => {
        option.style.display = option.value === selectedTarget ? 'none' : 'block';
    });

    // Checking the difference between target and source languages
    if (selectedSource === selectedTarget) {
        targetLang.value = Array.from(targetLang.options).find(option => option.style.display !== 'none').value;
    }
}

// Listeners for both lists
sourceLang.addEventListener('change', updateOptions);
targetLang.addEventListener('change', updateOptions);

// Initialize the state when the page is loaded
window.addEventListener('DOMContentLoaded', updateOptions);