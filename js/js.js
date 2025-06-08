// js/script.js

// Dropdown Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    
    if (dropdown && dropdownToggle) {
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });

        // Close dropdown when pressing Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                dropdown.classList.remove('active');
            }
        });
    }
});

// Main Gallery Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Gallery data
    const galleryData = [
        {
            image: 'https://via.placeholder.com/800x500/CDD293/333333?text=E-commerce+Backend',
            title: 'E-commerce Platform Backend Optimization',
            description: 'Optimized the backend infrastructure for a client\'s e-commerce site, reducing load times by 20%.'
        },
        {
            image: 'https://via.placeholder.com/800x500/A8B5A2/333333?text=API+Gateway',
            title: 'Secure API Gateway Implementation',
            description: 'Designed and implemented a secure API gateway for microservices architecture, enhancing data protection.'
        },
        {
            image: 'https://via.placeholder.com/800x500/9FA692/333333?text=Cloud+Migration',
            title: 'Cloud Migration Strategy',
            description: 'Assisted in developing a phased cloud migration strategy for legacy applications, ensuring minimal disruption.'
        },
        {
            image: 'https://via.placeholder.com/800x500/BCC080/333333?text=Performance+Audit',
            title: 'Website Performance Audit',
            description: 'Conducted a comprehensive audit of client websites, identifying bottlenecks and implementing performance improvements.'
        },
        {
            image: 'https://via.placeholder.com/800x500/D4D9B5/333333?text=CI-CD+Pipeline',
            title: 'Automated Deployment Pipeline',
            description: 'Contributed to setting up an automated CI/CD pipeline for faster and more reliable software deployments.'
        },
        {
            image: 'https://via.placeholder.com/800x500/E8EBBF/333333?text=Custom+CMS',
            title: 'Custom CMS Development Interface',
            description: 'Worked on the infrastructure supporting a custom CMS, ensuring robust database and server performance.'
        }
    ];
    
    let currentImageIndex = 0;
    
    // Get DOM elements
    const mainImage = document.getElementById('mainGalleryImage');
    const galleryTitle = document.getElementById('galleryTitle');
    const galleryDescription = document.getElementById('galleryDescription');
    const currentNumber = document.getElementById('currentNumber');
    const totalNumber = document.getElementById('totalNumber');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const thumbnailBtns = document.querySelectorAll('.thumbnail-btn');
    
    // Set total number
    totalNumber.textContent = galleryData.length;
    
    // Update gallery content
    function updateGallery() {
        const currentItem = galleryData[currentImageIndex];
        
        // Fade out current image
        mainImage.style.opacity = '0';
        
        setTimeout(() => {
            mainImage.src = currentItem.image;
            mainImage.alt = currentItem.title;
            galleryTitle.textContent = currentItem.title;
            galleryDescription.textContent = currentItem.description;
            currentNumber.textContent = currentImageIndex + 1;
            
            // Fade in new image
            mainImage.style.opacity = '1';
        }, 150);
        
        // Update thumbnail active state
        thumbnailBtns.forEach((btn, index) => {
            btn.classList.toggle('active', index === currentImageIndex);
        });
    }
    
    // Navigate to previous image
    function previousImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
        updateGallery();
    }
    
    // Navigate to next image
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryData.length;
        updateGallery();
    }
    
    // Navigate to specific image
    function goToImage(index) {
        currentImageIndex = index;
        updateGallery();
    }
    
    // Event listeners
    prevBtn.addEventListener('click', previousImage);
    nextBtn.addEventListener('click', nextImage);
    
    // Thumbnail click listeners
    thumbnailBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => goToImage(index));
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Only handle arrow keys if we're on the gallery page
        if (!document.getElementById('mainGalleryImage')) return;
        
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                previousImage();
                break;
            case 'ArrowRight':
                e.preventDefault();
                nextImage();
                break;
        }
    });
    
    // Initialize gallery
    updateGallery();
});

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
