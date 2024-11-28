document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.dropdown-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.querySelector(".dropdown-content");
            const arrow = item.querySelector(".dropdown-arrow");
            item.classList.toggle("active");
            if(item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";;
                arrow.style.transform = "rotate(-135deg)";
            } else {
                answer.style.maxHeight = 0
                arrow.style.transform = "rotate(0deg)";
            }        
        });
    });
});