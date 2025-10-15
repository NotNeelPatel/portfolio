document.addEventListener("DOMContentLoaded", () => {
    const jobs = document.querySelectorAll(".dropdown-item");

    jobs.forEach((item) => {
        item.addEventListener("click", () => {
            const details = item.querySelector(".dropdown-content");
            const arrow = item.querySelector(".dropdown-arrow");
            item.classList.toggle("active");
            if (item.classList.contains("active")) {
                details.style.maxHeight = details.scrollHeight + "px";
                arrow.style.transform = "rotate(-135deg)";
                jobs.forEach((otherItem) => {
                    if (otherItem !== item) {
                        otherItem.classList.remove("active");
                        const otherDetails =
                            otherItem.querySelector(".dropdown-content");
                        const otherArrow =
                            otherItem.querySelector(".dropdown-arrow");
                        otherDetails.style.maxHeight = 0;
                        otherArrow.style.transform = "rotate(0deg)";
                    }
                });
            } else {
                details.style.maxHeight = 0;
                arrow.style.transform = "rotate(0deg)";
            }
        });
    });

    const hamburger = document.getElementById("hamburger");

    hamburger.addEventListener("click", () => {
        const experience = document.querySelector(".experience");
        if (experience.style.visibility === "visible") {
            experience.style.transform = "translateX(-100%)";
            hamburger.textContent = "☰";
            experience.style.visibility = "hidden";
            return;
        }
        experience.style.transform = "translateX(0)";
        experience.style.visibility = "visible";
        hamburger.textContent = "✕";
    });
});
