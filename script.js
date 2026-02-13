function setLanguage(lang) {
    // 1. Update Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });

    // 2. toggle 'lang-it' / 'lang-en' class on body (for CSS hooks if needed)
    document.body.classList.remove('lang-it', 'lang-en');
    document.body.classList.add(`lang-${lang}`);

    // 3. Show/Hide Elements
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        if (el.getAttribute('data-lang') === lang) {
            el.style.display = ''; // Reset to default (block/inline)
        } else {
            el.style.display = 'none';
        }
    });

    // 4. Save preference (optional)
    localStorage.setItem('leone-lang', lang);
}

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}


// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('leone-lang') || 'it';
    setLanguage(savedLang);
});
