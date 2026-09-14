// ============================================
// ⚠️ НАСТРОЙКА
// ============================================
// Вставь сюда СВОЮ ссылку — Telegram, WhatsApp, VK, почту.
// Пример: 'https://t.me/pisdezix' или 'mailto:you@mail.com'
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
// TELEGRAM (если открыто внутри Telegram)
// ============================================
if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
}

// ============================================
// FAQ АККОРДЕОН
// ============================================
document.querySelectorAll('.faq-item').forEach(function(item) {
    item.querySelector('.faq-q').addEventListener('click', function() {
        item.classList.toggle('open');
    });
});
