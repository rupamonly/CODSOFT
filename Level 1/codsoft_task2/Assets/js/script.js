// function to smoothly scroll to sections from a href.........................................

function smoothScroll(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const targetY = section.getBoundingClientRect().top + window.scrollY;
        const startY = window.scrollY;
        const distance = targetY - startY;
        const duration = 1000;
        let startTime;

        function scrollStep(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            window.scrollTo(0, startY + distance * progress);

            if (progress < 1) {
                requestAnimationFrame(scrollStep);
            }
        }

        requestAnimationFrame(scrollStep);
    }
}



// function to get a fade-in animation on scroll......................................... 

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event
function handleScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();



// function to remove the fade-in effect when below 1000px................................

function handleResize() {
    const fadeElements = document.querySelectorAll('.fade-in');
    if (window.innerWidth < 1000) {
        fadeElements.forEach((element) => {
            element.classList.remove('fade-in');
            // Reset the elements to their initial state if needed
            element.style.opacity = 1;
            element.style.transform = 'none';
        });
    } else {
        // If the window width is 1000px or more, add back the fade-in class
        fadeElements.forEach((element) => {
            element.classList.add('fade-in');
        });
    }
}

// Attach the resize event listener
window.addEventListener('resize', handleResize);

// Initial check on page load
handleResize();