const tg = window.Telegram.WebApp;
if (tg) { tg.ready(); tg.expand(); }

// ============================================
// ⚠️ НАСТРОЙКА
// ============================================
const TELEGRAM_USERNAME = 'pisdezix';

// ============================================
// ОТКРЫТИЕ TELEGRAM
// ============================================
function openTelegram() {
    const text = 'Здравствуйте! Хочу заказать сайт. Расскажите про цены и сроки.';
    const url = 'https://t.me/' + TELEGRAM_USERNAME + '?text=' + encodeURIComponent(text);
    if (tg) tg.openTelegramLink(url);
    else window.open(url, '_blank');
}

// ============================================
// FAQ АККОРДЕОН
// ============================================
document.querySelectorAll('.faq-item').forEach(function(item) {
    item.querySelector('.faq-q').addEventListener('click', function() {
        item.classList.toggle('open');
    });
});
