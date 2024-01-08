import "./style.css";

import { header } from "./components/header";
import { homeContent } from "./components/homeContent";
import { techContent } from "./components/techContent";
import { experienceContent } from "./components/experienceContent";
import { projectsContent } from "./components/projectsContent";
import { footer } from "./components/footer";
import { scrollUp } from "./components/scrollUp";

// HTML

const createMain = document.createElement("main");
const createHeader = document.createElement("header");

const createSectionHome = document.createElement("section");
createSectionHome.classList.add("homeContent");
createSectionHome.id = "home";

const createSectionTech = document.createElement("section");
createSectionTech.classList.add("techContent");

const createSectionExperience = document.createElement("section");
createSectionExperience.classList.add("experienceContent");
createSectionExperience.id = "experience";

const createSectionProjects = document.createElement("section");
createSectionProjects.classList.add("projectsContent");
createSectionProjects.id = "projects";

const createFooter = document.createElement("footer");

const createScrollUp = document.createElement("div");
createScrollUp.classList.add("scrollup");

document.body.appendChild(createHeader);
document.body.appendChild(createMain);
document.querySelector("main").appendChild(createSectionHome);
document.querySelector("main").appendChild(createSectionTech);
document.querySelector("main").appendChild(createSectionExperience);
document.querySelector("main").appendChild(createSectionProjects);
document.querySelector("main").appendChild(createScrollUp);
document.body.appendChild(createFooter);

document.querySelector("header").innerHTML = header;
document.querySelector(".homeContent").innerHTML = homeContent;
document.querySelector(".techContent").innerHTML = techContent;
document.querySelector(".experienceContent").innerHTML = experienceContent;
document.querySelector(".projectsContent").innerHTML = projectsContent;
document.querySelector("footer").innerHTML = footer;
document.querySelector(".scrollup").innerHTML = scrollUp;

// Funcionalidad

const themeButton = document.getElementById("change-theme-button");
const body = document.body;

themeButton.style.cursor = "pointer";
themeButton.style.fontSize = "1.5rem";

themeButton.addEventListener("click", function () {
	body.classList.toggle("dark-theme");

	if (body.classList.contains("dark-theme")) {
		themeButton.classList.remove("ri-sun-line");
		themeButton.classList.add("ri-moon-line");
	} else {
		themeButton.classList.remove("ri-moon-line");
		themeButton.classList.add("ri-sun-line");
	}
});

const navMenu = document.querySelector(".main-menu");
const navToggle = document.querySelector(".navbar-toggle");
const navClose = document.querySelector(".close-nav");

if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}

window.addEventListener("resize", function () {
	const contact = document.querySelector(".contact");

	if (this.window.innerWidth < 768) {
		document.querySelector(".keypoints").appendChild(contact);
	} else {
		document.querySelector(".hero-container").appendChild(contact);
	}
});

const sr = ScrollReveal({
	origin: "top",
	distance: "60px",
	duration: 2500,
	delay: 300,
	reset: false,
});

sr.reveal(
	`.hero-container, .keypoints, .experienceContent > h2, .projects-section > h2, .experience-container > div:nth-child(1), .experience-container > div:nth-child(3), .mySearch`,
	{ origin: "left" }
);
sr.reveal(`.image-container, .experience-container > div:nth-child(2) `, {
	origin: "right",
});
sr.reveal(`.card, .projects-list > ul`, { interval: 150 });

function myFunction() {
	let input, filter, cards;
	input = document.getElementById("mySearch");
	filter = input.value.toUpperCase();
	cards = document.querySelectorAll(".card");

	for (let i = 0; i < cards.length; i++) {
		let title = cards[i].querySelector(".text");
		if (title.innerText.toUpperCase().indexOf(filter) > -1) {
			cards[i].style.display = "";
		} else {
			cards[i].style.display = "none";
		}
	}
}

document.getElementById("mySearch").onkeyup = myFunction;
