/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

// menu show
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

// menu hidden
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
	const navMenu = document.getElementById("nav-menu");
	//when we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
	const header = document.getElementById("header");

	this.scrollY >= 50
		? header.classList.add("blur-header")
		: header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
	const scrollUp = document.getElementById("scroll-up");
	this.scrollY >= 450
		? scrollUp.classList.add("show-scroll")
		: scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
	const scrollDown = window.scrollY;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute("id"),
			sectionClass = document.querySelector(
				".nav__menu a[herf*=]" + sectionId + "]"
			);
		if (
			scrollDown > sectionTop &&
			scrollDown <= sectionTop + sectionHeight
		) {
			sectionClass.classList.add("active-link");
		} else {
			sectionClass.classList.remove("active-link");
		}
	});
};

/*=============== SCROLL REVEAL ANIMATION ===============*/
