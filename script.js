// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
});

// 📋 UNIVERSAL COPY FUNCTION
function copyEmail(text = 'bermundokyle7@gmail.com') {
    navigator.clipboard.writeText(text).then(() => {
        showToast(text.includes('@') ? '📧 Email copied!' : '✅ Copied to clipboard!');
    }).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast('✅ Copied!');
    });
}

// Toast notifications
function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position:fixed;top:20px;right:20px;background:#667eea;color:white;
        padding:1rem 1.5rem;border-radius:10px;box-shadow:0 10px 30px rgba(102,126,234,0.4);
        z-index:10000;font-weight:600;font-family:'Inter',sans-serif;
        animation:slideIn 0.3s ease;
    `;
    document.body.appendChild(toast);
    setTimeout(()=>toast.remove(),3000);
}

// Skill bar animations
function animateSkillBars() {
    document.querySelectorAll('.fill').forEach(bar => {
        if (bar.getBoundingClientRect().top < window.innerHeight - 100) {
            bar.style.width = bar.getAttribute('data-width');
        }
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.background = window.scrollY > 100 ? 
        'rgba(15,15,35,0.98)' : 'rgba(15,15,35,0.95)';
});

// Load events
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);