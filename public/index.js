// function toggleMobileMenu() {
//     const menu = document.querySelector('.mobile-nav-menu');
//     menu.classList.toggle('hidden'); // Show/hide the menu
// }

// function toggleMenu() {
//     const mobileMenu = document.getElementById("mobile-menu");
//     const burgerIcon = document.getElementById("burger-icon");
//     const closeIcon = document.getElementById("close-icon");

//     mobileMenu.classList.toggle("hidden");
//     burgerIcon.classList.toggle("hidden");
//     closeIcon.classList.toggle("hidden");
// }


document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".navbar-burger"); // Menu button
    const closeBtn = document.querySelector("#mobile-nav .close-btn"); // Close button
    const mobileNav = document.getElementById("mobile-nav"); // Mobile navigation container
    const body = document.body; // Body element
    
    // Open navigation and disable scrolling
    menuBtn.addEventListener("click", () => {
        mobileNav.classList.remove("hidden");
        body.classList.add("no-scroll");  // Lock scrolling by adding the class
    });

    // Close navigation and enable scrolling
    closeBtn.addEventListener("click", () => {
        mobileNav.classList.add("hidden");
        body.classList.remove("no-scroll");  // Unlock scrolling by removing the class
    });
});






function toggleDescription(contentId, buttonId) {
    // Get the specific description element and button element by id
    const description = document.getElementById(contentId);
    const button = document.getElementById(buttonId);

    // Toggle the visibility of the clicked description
    description.classList.toggle("hidden");

    // Toggle the button text between "+" and "×" based on the visibility
    if (description.classList.contains("hidden")) {
      button.textContent = "+";
    } else {
      button.textContent = "×";
    }
  }



document.addEventListener("DOMContentLoaded", function() {
    // Select the testimonials
    const testimonial1 = document.getElementById("testimonial1");
    const testimonial2 = document.getElementById("testimonial2");

    // Select the buttons within each testimonial
    const buttons1 = testimonial1.querySelectorAll("button");
    const buttons2 = testimonial2.querySelectorAll("button");

    // Function to hide both testimonials
    function hideAllTestimonials() {
        testimonial1.classList.add("hidden");
        testimonial2.classList.add("hidden");
    }

    // Show Testimonial 2 when a button in Testimonial 1 is clicked
    buttons1[1].addEventListener("click", function() {
        hideAllTestimonials();
        testimonial2.classList.remove("hidden"); // Show testimonial 2
    });

    // Show Testimonial 1 when a button in Testimonial 2 is clicked
    buttons2[0].addEventListener("click", function() {
        hideAllTestimonials();
        testimonial1.classList.remove("hidden"); // Show testimonial 1
    });
});

function toggleFAQ(button) {
    // Find the content associated with the clicked button
    const content = button.querySelector('.faq-content');

    // Get the current state of aria-expanded
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // Toggle the hidden class
    content.classList.toggle('hidden');

    // Update aria-expanded attribute
    button.setAttribute('aria-expanded', !isExpanded);

    // Optionally rotate the icon (if you add one)
    const icon = button.querySelector('.faq-icon');
    if (icon) {
        icon.classList.toggle('rotate-180', !isExpanded);
    }
}