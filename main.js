import "./style.css";

import { header } from "./components/header";
import { homeContent } from "./components/homeContent";
import { languagesContent } from "./components/languagesContent";
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

const createSectionLanguages = document.createElement("section");
createSectionLanguages.classList.add("languagesContent");

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
document.querySelector("main").appendChild(createSectionLanguages);
document.querySelector("main").appendChild(createSectionExperience);
document.querySelector("main").appendChild(createSectionProjects);
document.querySelector("main").appendChild(createScrollUp);
document.body.appendChild(createFooter);

document.querySelector("header").innerHTML = header;
document.querySelector(".homeContent").innerHTML = homeContent;
document.querySelector(".languagesContent").innerHTML = languagesContent;
document.querySelector(".experienceContent").innerHTML = experienceContent;
document.querySelector(".projectsContent").innerHTML = projectsContent;
document.querySelector("footer").innerHTML = footer;
document.querySelector(".scrollup").innerHTML = scrollUp;

// Lógica

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
	`.hero-container, .keypoints, .experienceContent > h2, .projects-section > h2, .experience-container > div:nth-child(1), .experience-container > div:nth-child(3)`,
	{ origin: "left" }
);
sr.reveal(`.image-container, .experience-container > div:nth-child(2) `, {
	origin: "right",
});
sr.reveal(`.card, .projects-list > ul`, { interval: 150 });
