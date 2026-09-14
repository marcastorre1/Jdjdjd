// ============================================
// ⚠️ НАСТРОЙКА — вставь свою ссылку
// ============================================
const CONTACT_LINK = 'https://t.me/pisdezix';

// ============================================
// ПОДСТАВЛЯЕМ ССЫЛКУ ВО ВСЕ КНОПКИ
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const buttons = ['headerBtn', 'heroBtn', 'priceBtn1', 'priceBtn2', 'priceBtn3', 'ctaBtn'];
    buttons.forEach(function(id) {
        const el = document.getElementById(id);
        if (el) el.href = CONTACT_LINK;
    });
});

// ============================================
// TELEGRAM (если внутри Telegram)
// ============================================
if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
}

// ============================================
// ЕДИНСТВЕННАЯ АНИМАЦИЯ — появление при прокрутке
// ============================================
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
});

document.querySelectorAll('.fade-in').forEach(function(el) {
    observer.observe(el);
});

// ============================================
// FAQ АККОРДЕОН
// ============================================
document.querySelectorAll('.faq-item').forEach(function(item) {
    item.querySelector('.faq-q').addEventListener('click', function() {
        item.classList.toggle('open');
    });
});
