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

    const hamburger = document.getElementById('hamburger');

    hamburger.addEventListener('click', () => {
        const experience = document.querySelector('.experience');
        if (experience.style.visibility === "visible") {
            experience.style.transform = "translateX(-100%)";            hamburger.textContent = "☰"
            experience.style.visibility = "hidden"
            return;
        }
        experience.style.transform = "translateX(0)";
        experience.style.visibility = "visible"
        hamburger.textContent = "✕"
    });
});