window.onload = function(){
    //navigator
    addNavigatorClickHandler();
    addNavigatorScrollHandler();
    //Tags
    addTagsClickHandler();
    //PortfolioPhoto
    addPortfolioClickHandler();
    //sliderTouchButton
    addSliderButtonClickHandler();
    //sliderTouchPhone
    addSliderPhoneClickHandler();
    //MessageSubmit
    addSubmitMessageClickHandler();
    //MessageClose
    addCloseMessageClickHandler();
    addHamburgerMenuClickHandler();
}

// addNavigatorClickHandler
const addNavigatorClickHandler = () => {
    document.querySelector('.navigator').addEventListener('click',(e)=>{
        if (e.target.classList.contains('navigator__link')) {
            let clickedLink = e.target;
            removeSelectedLink();
            selectClickedLink(clickedLink);
        }
    })
}
const removeSelectedLink = () =>{
    let links = document.querySelectorAll('.navigator .navigator__link');
    links.forEach( link => {
        link.classList.remove('active');
    })
} 
const selectClickedLink = (clickedLink) =>{
    clickedLink.classList.add('active');
}
//addNavigatorScrollHandler
const addNavigatorScrollHandler = () => {
    Sections = document.querySelectorAll('section');
    links = document.querySelectorAll('.navigator .navigator__link');
    window.addEventListener('scroll', () => {
        posScroll = window.scrollY;
        posNull = document.getElementById('header').offsetHeight;
        Sections.forEach( section => {  
            posSection = section.offsetTop;
            heightSection = section.offsetHeight; 
            if ((posScroll >= (posSection - posNull)) && (posScroll < (posSection - posNull + heightSection))) {
                links.forEach( link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
                        link.classList.add('active');
                    }
                })
            }
        })
    })
}
//addTagsClickHandler
const addTagsClickHandler = () => {
    document.querySelector('.tags__list').addEventListener('click', (e) => {
        if ((e.target.classList.contains('tag')) && (e.target.classList.contains('active'))) {
            removeSelectedTag();
        } else {
            let clickedTag = e.target;
            removeSelectedTag();
            selectClickedTag(clickedTag);
            randomWorksBySelectedTag();
        }
    })
}
const removeSelectedTag = () => {
    let tags = document.querySelectorAll('.tags__list .tag');
    tags.forEach( tag =>{
        tag.classList.remove('active');
    })
}
const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('active');
} 
const randomWorksBySelectedTag = () =>{
    let works = document.querySelectorAll('.works .works__image');
    let worksNew = [];
    let numbers = [];
    let number;
    for ( j=0; j< works.length;j++) {
        let a = true;
        while (a) {
            a = false;
            number = Math.floor(Math.random()*(works.length));
            numbers.forEach( el =>{ 
                if (el == number) {
                    a = true; 
                }
            }) 
        }
        numbers[j] = number; 
        worksNew[j] = works[number];
    }
    document.querySelector('.works').innerHTML = '';
    document.querySelector('.works').append(...worksNew);
}
// addPortfolioClickHandler
const addPortfolioClickHandler =() => {
    document.querySelector('.works').addEventListener('click',(e)=>{
        if (e.target.classList.contains('works__image')) {
            let clickedImage = e.target;
            if (clickedImage.classList.contains('active')) {
                removeSelectedImage();
            } else {
                removeSelectedImage();
                selectClickedImage(clickedImage);
            }     
        }
    })
}
const removeSelectedImage = () =>{
    let Images = document.querySelectorAll('.works .works__image');
    Images.forEach( image =>{
        image.classList.remove('active');
    })
}
const selectClickedImage = (clickedImage) =>{
    clickedImage.classList.add('active');
}
// addSliderButtonClickHandler
const addSliderButtonClickHandler = () => {
    document.querySelector('.slider').addEventListener('click' , (e) => {
        if (e.target.classList.contains('slider__button')) {
            let ClickedButton = e.target;
            let n;
            let slides = document.querySelectorAll('.slider__images');
            for (let i=0; i<slides.length; i++){
                if (slides[i].classList.contains('active')){
                    n = i;
                    slides[n].classList.remove('active');  
                }
                if (slides[i].classList.contains('sliderShowLeft')){
                    n = i;
                    slides[n].classList.remove('sliderShowLeft');  
                }
                if (slides[i].classList.contains('sliderShowRight')){
                    n = i;
                    slides[n].classList.remove('sliderShowRight');
                }
            }
            if (ClickedButton.classList.contains('slider__button_right')){
                ShowNextSlide(slides,n);
            } else {
                ShowPrevSlide(slides,n);
            }
        }  
    })
}
const ShowNextSlide = (slides,n) =>{
    if (n < (slides.length -1)) {
        slides[n+1].classList.add('sliderShowRight');
    } else {
        n=0;
        slides[n].classList.add('sliderShowRight');
    }
}
const ShowPrevSlide = (slides,n) =>{
    if (n > 0) {
        slides[n-1].classList.add('sliderShowLeft'); 
    } else {
        n=(slides.length-1);
        slides[n].classList.add('sliderShowLeft');
    }
}
//sliderTouchPhone
const addSliderPhoneClickHandler = () => {
    document.querySelector('.slider').addEventListener('click', (e) => {
        if (e.target.classList.contains('phone__touch_horizontal')) {
            clickedPhone = document.querySelector('.phone__screen_horizontal');
            PowerDisplayONorOff(clickedPhone);
        };
        if (e.target.classList.contains('phone__touch_vertical')) {
            clickedPhone = document.querySelector('.phone__screen_vertical');
            PowerDisplayONorOff(clickedPhone);
        };
        if (e.target.classList.contains('phone__touch_green')) {
            clickedPhone = document.querySelector('.phone__screen_vertical_green');
            PowerDisplayONorOff(clickedPhone);
        };
    })
}
const PowerDisplayONorOff = (clickedPhone) =>{
    if (clickedPhone.classList.contains('hidden')){
        clickedPhone.classList.remove('hidden');
    } else {
        clickedPhone.classList.add('hidden');
    }
}
// MessageSubmit
const addSubmitMessageClickHandler = () => {
    document.querySelector('.quote__container').addEventListener('click', (e)=> {
        if (e.target.classList.contains('submit')) {
            let event = e;
            ShowModalityWindow(event);
        }
    })
};
const ShowModalityWindow = (event) => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    if (name.checkValidity() && email.checkValidity()) {
        event.preventDefault();
        let message = document.querySelector('.quote__container .quote__message');
        message.classList.remove('hidden');
        addSubjectInModalityWindow();
        addDescriptionInModalityWindow();
    }
}
const addSubjectInModalityWindow = () =>{
    let subject = document.getElementById('subject').value.toString();
    if ( subject != '' ) {
        document.querySelector('.quote__container .message__subject').innerText = 'Subject: ' + subject;
    } else {
        document.querySelector('.quote__container .message__subject').innerText = 'Without subject';
    };
}
const addDescriptionInModalityWindow = () =>{
    let description = document.getElementById('description').value.toString();
    if (description != '') {
        document.querySelector('.quote__container .message__description').innerText = 'Description: ' + description;
    } else {
        document.querySelector('.quote__container .message__description').innerText = 'Without description';
    };
} 
// MessageClose
const addCloseMessageClickHandler = () => {
    document.querySelector('.quote__container').addEventListener('click', (e)=>{
        if (e.target.classList.contains('close')) {
            let message = document.querySelector('.quote__container .quote__message');
            message.classList.add('hidden');
            document.querySelector('form').reset();
        }
    })
}
//HamburgerMenuClickHandler
const addHamburgerMenuClickHandler = () => {
    let HamburgerBlock = document.querySelector('.header__hamburger');
    let HamburgerMenu = document.querySelector('.header__navigation');
    let HeaderLogo = document.querySelector('.header__logo');
    HamburgerBlock.addEventListener('click',(e) => {
        if (HamburgerBlock.classList.contains('hamburger_active')) {
            HamburgerBlock.classList.remove('hamburger_active');
            HamburgerMenu.classList.remove('header__navigation_active');
            HeaderLogo.classList.remove('header__logo_active');
        } else {
            HamburgerBlock.classList.add('hamburger_active');
            HamburgerMenu.focus();
            HamburgerMenu.classList.add('header__navigation_active');
            HeaderLogo.classList.add('header__logo_active');
        }
    })
    HamburgerMenu.addEventListener('click', (e) => {
        ClickLink = e.target;
        if (ClickLink.classList.contains('navigator__link')) {
            HamburgerBlock.classList.remove('hamburger_active');
            HamburgerMenu.classList.remove('header__navigation_active');
            HeaderLogo.classList.remove('header__logo_active');
        }
    })
    window.addEventListener("resize", () => {
        if(document.documentElement.clientWidth >= 768) {
            HamburgerBlock.classList.remove('hamburger_active');
            HamburgerMenu.classList.remove('header__navigation_active');
            HeaderLogo.classList.remove('header__logo_active');
        }
      });

}