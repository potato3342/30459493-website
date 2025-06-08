// js/script.js

// Existing Lightbox/Gallery placeholder code (if any)
/*
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item a');
    galleryItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const fullImageUrl = this.getAttribute('href');
            const imageTitle = this.getAttribute('data-title');
            console.log('Image clicked:', fullImageUrl, 'Title:', imageTitle);
            // alert('Imagine a full image pop-up here! Image: ' + fullImageUrl); // Removed for actual form JS
        });
    });
});
*/

// Contact Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent default form submission to handle validation
            event.preventDefault();

            let isValid = true;

            // Get form fields
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');

            // Get error message divs
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const subjectError = document.getElementById('subjectError');
            const messageError = document.getElementById('messageError');
            const formSuccess = document.getElementById('formSuccess');

            // Clear previous messages
            nameError.textContent = '';
            emailError.textContent = '';
            subjectError.textContent = '';
            messageError.textContent = '';
            formSuccess.textContent = '';
            nameError.style.display = 'none';
            emailError.style.display = 'none';
            subjectError.style.display = 'none';
            messageError.style.display = 'none';
            formSuccess.style.display = 'none';

            // Validate Name
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required.';
                nameError.style.display = 'block';
                isValid = false;
            }

            // Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Email is required.';
                emailError.style.display = 'block';
                isValid = false;
            } else if (!emailRegex.test(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address.';
                emailError.style.display = 'block';
                isValid = false;
            }

            // Validate Subject
            if (subjectInput.value.trim() === '') {
                subjectError.textContent = 'Subject is required.';
                subjectError.style.display = 'block';
                isValid = false;
            }

            // Validate Message
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Message is required.';
                messageError.style.display = 'block';
                isValid = false;
            }

            // If all fields are valid, simulate submission and show success message
            if (isValid) {
                formSuccess.textContent = 'Thank you for your message! I will get back to you shortly.';
                formSuccess.style.display = 'block';
                contactForm.reset(); // Clear the form
            }
        });
    }
});
