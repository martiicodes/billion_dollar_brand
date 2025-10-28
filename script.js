// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // ======== END-OF-DAY COUNTDOWN ========
    function startEndOfDayCountdown(displayId) {
        const display = document.getElementById(displayId);
        if (!display) {
            console.error(`Element with id "${displayId}" not found.`);
            return;
        }

        const interval = setInterval(() => {
            const now = new Date();

            // Today at 23:59:59
            const endOfDay = new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate(),
                23, 59, 59
            );

            const distance = endOfDay - now;

            if (distance <= 0) {
                clearInterval(interval);
                display.textContent = "EXPIRED!";
                return;
            }

            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            display.textContent =
                `${hours.toString().padStart(2, '0')}h ` +
                `${minutes.toString().padStart(2, '0')}m ` +
                `${seconds.toString().padStart(2, '0')}s`;
        }, 1000);
    }

    startEndOfDayCountdown('timer');

    // ======== FAQ TOGGLE WITH SLIDE ANIMATION ========
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        // Prepare answer for slide animation
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.4s ease';

        question.addEventListener('click', () => {
            item.classList.toggle('active');

            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });

});