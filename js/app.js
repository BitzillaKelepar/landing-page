/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const menu = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));
let section;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// Check if section is in viewport
function isInViewport(s) {
    const view = s.getBoundingClientRect();
    return (view.top <= 150 && view.bottom >= 150);
}

// Check if section is active
function isActive(s) {
    return s.classList.contains("active");
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Create Menu: For each section a list item is created dynamically
function createMenu() {
    for (section of sections) {
        const sectionName = section.getAttribute("data-nav");
        const sectionId = section.getAttribute("id");
        const navItem = document.createElement("li");
        navItem.innerHTML = `<a class="menu__link" href="#${sectionId}">${sectionName}</a>`;
        menu.appendChild(navItem);
    }
}

// Add class 'active' to section when it is near top of viewport
// Make section active and remove active
function makeSectionActive() {
    for (section of sections) {
        if (isInViewport(section) && isActive(section) === false) {
            section.classList.add("active");
            //TODO: change menu__link to active state
        } else if (isInViewport(section) === false && isActive(section)) {
            section.classList.remove("active");
            //TODO: remove active state from menu__link
        }
    }
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu 
createMenu();

// Scroll smoothly to section on link click
// TODO: solve non-working smooth-scrolling
const anchor = document.querySelectorAll('a[href^="#"]');
anchor.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const scroll = document.querySelector(this.getAttribute("href"));
        scroll.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Set sections as active
document.addEventListener("scroll", makeSectionActive);




