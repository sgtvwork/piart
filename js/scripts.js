
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

const modalInfo = [
    {
        id: 0,
        header: 'Ошибка загрузки данных',
        text: 'Все виновные в ошибке уже уволены, как новый специалист будет найден мы обязательно все починим.',
        images: ['assets/img/modal/0.jpg']
    },
    {
        id: 1,
        header: 'Страница находится в разработке',
        text: 'Страница еще не готова, как будет готова она появится тут.',
        images: ['assets/img/modal/1.jpg']
    },
    {
        id: -1,
        header: 'Страница находится в разработке',
        text: 'Страница еще не готова, как будет готова она появится тут.',
        images: [
            'assets/img/modal/0.jpg',
            'assets/img/modal/1.jpg'
        ]
    }
]

function openModal(modalInfoId){
    
    var header = document.getElementById('ModalHeader');
    var img = document.getElementById('ModalImage');
    var text = document.getElementById('ModalText');
    var info = modalInfo.find(x=>x.id == modalInfoId);
    var modal = new bootstrap.Modal(document.getElementById('portfolioModal'));

    if(info == undefined){
        info = modalInfo.find(x=>x.id == 0);
    }
    
    header.innerText = info.header;
    img.src = info.images[0];
    text.innerText = info.text;

    modal.show();
}