document.addEventListener("DOMContentLoaded", function () {
  const logoScroll = document.querySelector(".logo-scroll");
  const logos = Array.from(logoScroll.children);

  // Clone the logos and append them to the end of the container
  logos.forEach((logo) => {
    const clone = logo.cloneNode(true);
    logoScroll.appendChild(clone);
  });
  scrollLogos();
});

// Input Form Date
window.onload = () => {
  let today = new Date().toISOString().split("T")[0];
  document.getElementById("pickup").value = today;
  document.getElementById("return").value = new Date(
    Date.now() + 7 * 86400000
  )
    .toISOString()
    .split("T")[0];
};

// Data for each car
const carData = {
  nissan: {
    image: "img/nissanfleet.png",
    price: "$120.00",
    model: "Hatchback",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
  },
  audi: {
    image: "img/audifleet.png",
    price: "$100.00",
    model: "Compact",
    doors: 4,
    seats: 4,
    transmission: "Manual",
  },
  porsche: {
    image: "img/porschefleet.png",
    price: "$180.00",
    model: "Coupé",
    doors: 2,
    seats: 2,
    transmission: "Automatic",
  },
  bmw: {
    image: "img/bmwfleet.png",
    price: "$100.00",
    model: "Sedan",
    doors: 2,
    seats: 4,
    transmission: "Automatic",
  },
  mercedes: {
    image: "img/mercedesfleet.png",
    price: "$130.00",
    model: "Roadster",
    doors: 2,
    seats: 4,
    transmission: "Automatic",
  },
};

// Function to update car details
function updateCarDetails(car) {
  const data = carData[car];

  document.getElementById("car-image").src = data.image;
  document.getElementById("car-price").innerText = data.price + " rent per day";
  document.getElementById("car-model").innerText = data.model;
  document.getElementById("car-doors").innerText = data.doors;
  document.getElementById("car-seats").innerText = data.seats;
  document.getElementById("car-transmission").innerText = data.transmission;
}

// Add event listeners to car buttons
const carButtons = document.querySelectorAll(".car-button");

carButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all buttons
    carButtons.forEach((btn) => btn.classList.remove("active"));

    // Add 'active' class to clicked button
    button.classList.add("active");

    // Get the car from the data attribute and update details
    const selectedCar = button.getAttribute("data-car");
    updateCarDetails(selectedCar);
  });
});
// Initialize with the first car details
updateCarDetails("nissan");
document
  .querySelector(".car-button[data-car='nissan']")
  .classList.add("active");

// JavaScript to handle FAQ toggle
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector(".faq-answer");
    const icon = button.querySelector(".faq-icon");

    // Toggle "active" class for the button
    button.classList.toggle("active");
    answer.classList.toggle("show");

    // Change icon direction
    if (icon.textContent === "▼") {
      icon.textContent = "▲";
    } else {
      icon.textContent = "▼";
    }

    // Close other open answers
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== faqItem) {
        item.querySelector(".faq-question").classList.remove("active");
        item.querySelector(".faq-answer").classList.remove("show");
        item.querySelector(".faq-icon").textContent = "▼";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 6000,
    slidesPerView: 2.5,
    spaceBetween: 20,
    centeredSlides: true,
    allowTouchMove: true,
    breakpoints: {
      // When window width is <= 560px
      560: {
        slidesPerView: 1.5, // Adjust the number of slides visible
        spaceBetween: 10, // Adjust space between slides
      },
      // When window width is <= 400px
      300: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
    },
  });
});
// Header
let header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});
// Menu Open Close
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".menu");

menu.onclick = () => {
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
};
// Close Menu On Scroll
window.onscroll = () => {
  menu.classList.remove("move");
  navbar.classList.remove("open-menu");
};

// Scroll Reveal Animation
document.addEventListener("DOMContentLoaded", function () {
  const animate = ScrollReveal({
    distance: "75px",        // Smaller movement to minimize layout shift
    duration: 1000,           // Shorter duration for quicker reveal
    easing: "ease-out",      // Smooth easing
    reset: false             // Prevent re-triggering on scroll up
  });

  animate.reveal(".hero", { distance: "0px", delay: 0 });
  animate.reveal(".hero-content", { origin: "left", distance: "75px", delay: 300 });
  animate.reveal(".hero-image", { origin: "right", distance: "75px", delay: 400 });
  animate.reveal(".search-bar", { origin: "bottom", distance: "75px", delay: 550 });

  // Reveal each section as it appears on the screen
  animate.reveal(".how-it-works", { interval: 300, origin: "bottom", scale: 0.9 });
  animate.reveal(".steps .step", { interval: 300, origin: "bottom", scale: 0.9 });
  animate.reveal(".logo-carousel", { origin: "bottom", delay: 700, distance: "120px", duration: 1800, scale: 0.9 });
  animate.reveal(".why-choose-us-content", { origin: "left", delay: 300, distance: "120px", duration: 1800, scale: 0.9 });
  animate.reveal(".rental-fleet", { origin: "bottom", delay: 300, distance: "120px", duration: 1800, scale: 0.9 });
  animate.reveal(".stories-section", { origin: "bottom", delay: 300, distance: "120px", duration: 1800, scale: 0.9 });
  animate.reveal(".faq-section", { origin: "top", delay: 300, distance: "120px", duration: 1800, scale: 0.9 });
  animate.reveal(".testimonials-header", { origin: "top", delay: 300, distance: "120px", duration: 1800, scale: 0.9 });
  animate.reveal(".swiper-container", { origin: "bottom", delay: 400, distance: "120px", duration: 1800, scale: 0.9 });
  animate.reveal(".download-section", { origin: "bottom", delay: 500, distance: "120px", duration: 1800, scale: 0.9 });
});


