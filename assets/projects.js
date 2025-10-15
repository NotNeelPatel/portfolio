const projectTemplate = document.querySelector("[project-template]");
const projectContainer = document.querySelector("[project-container]");
var angle = 0;
const colours = ["#f4ebd4ee", "#f0f2d4ee", "#f2efdfee"];
fetch("./assets/projects.json")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((entry) => {
            let index = data.indexOf(entry);
            const card = projectTemplate.content.cloneNode(true).children[0];
            const title = card.querySelector("[project-title]");
            const description = card.querySelector("[project-description]");
            const img = card.querySelector("[project-img]");
            const gh = card.querySelector("[project-gh]");
            const gh2 = card.querySelector("[project-gh2]");
            const navUp = card.querySelector("[project-nav-up]");
            const navDown = card.querySelector("[project-nav-down]");
            const tech = card.querySelector("[project-tech]");
            const cardContent = card.querySelector("[project-content]");
            angle = (Math.round(Math.random() * 1.5) - 0.75) * 2;

            title.innerText = entry.title;
            description.innerHTML = entry.description;
            img.src = entry.img;
            gh.href = entry.gh;
            gh2.href = entry.gh;
            card.id = `card${index}`;
            navUp.href = `#card${index - 1 < 0 ? data.length - 1 : index - 1}`;
            navDown.href = `#card${index + 1 == data.length ? 0 : index + 1}`;
            cardContent.style.setProperty("--rotation", `${angle}deg`);
            cardContent.style.backgroundColor = colours[index % 3];

            entry.tech.forEach((t) => {
                const icon = document.createElement("i");
                icon.className = t;
                tech.append(icon);
            });

            projectContainer.append(card);
        });
    });
