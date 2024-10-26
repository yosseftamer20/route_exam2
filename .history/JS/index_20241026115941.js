let buttonOpenClose = document.querySelector('#buttonOpenClose');
        let navMenu = document.querySelector('.nav-menu');

        buttonOpenClose.addEventListener('click', function () {
            if (navMenu.classList.contains("open")) {
                // Close animation
                navMenu.classList.remove("animate__fadeInUp");
                navMenu.classList.add("animate__fadeOutDown");
                
                setTimeout(() => {
                    navMenu.classList.remove("open", "animate__fadeOutDown");
                }, 500); // Ensure timeout matches CSS animation duration
            } else {
                // Open animation
                navMenu.classList.add("open", "animate__fadeInUp");
            }

            // Toggle icon
            buttonOpenClose.classList.toggle("fa-x");
            buttonOpenClose.classList.toggle("fa-bars");
        });