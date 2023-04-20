
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


//--------------------------------------------------------//


var phrases =[
    'Рекламно-производственные решения любой сложности',
    'Комлпексный интернет-маркетинг',
]

async function writePhrase(phraseContainer, helloPhrases, speed) {
    let phraseIndex = 0;
    let currentPhrase = helloPhrases[phraseIndex];
    let currentLetter = 0;
    let delayCounter = 20;

    let typingInterval = setInterval(() => {
        if (delayCounter > 0) {
            delayCounter--;
        }
        else {
            if (currentLetter > currentPhrase.length) {
                phraseIndex = (phraseIndex + 1) % helloPhrases.length;
                currentPhrase = helloPhrases[phraseIndex];
                currentLetter = 0;
            }

            currentLetter++;
            phraseContainer.innerHTML = currentPhrase.substr(0, currentLetter);

            if (currentLetter == currentPhrase.length) {
                delayCounter = 30;
            }
        }
    }, speed);
}

writePhrase(document.getElementById('result'), phrases, 75);
