window.onload = function(){
    //navigator
    addNavigatorClickHandler();
    //Tags
    addTagsClickHandler();
    //PortfolioPhoto
    addPortfolioClickHandler();
    //sliderTouchButton
    addSliderButtonClickHandler();
    //sliderTouchPhone
    addSliderPhoneClickHandler();
    //MessageSubmit
    addMessageSubmitClickHandler();
    //MessageClose
    addMessageCloseClickHandler();
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

//addTagsClickHandler
const addTagsClickHandler = () => {
    document.querySelector('.tags__list').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeSelectedTag();
            selectClickedTag(clickedTag);
            if (clickedTag.innerText === 'All') {
                showAllWorks();
            } else {
                filterWorksBySelectedTag(clickedTag.innerText);
            }
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
const showAllWorks = () => {
    let works = document.querySelectorAll('.works .works__image');
    works.forEach(work =>{
        work.classList.remove('hidden');
    })

}
const filterWorksBySelectedTag = (selectedTag) =>{
    let works = document.querySelectorAll('.works .works__image');
    works.forEach(work => {
        work.classList.add('hidden');
        work.querySelectorAll('.tag').forEach( tag =>{
            if (tag.innerText === selectedTag) {
                work.classList.remove('hidden');
            }
        }) 
    })
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
            var n;
            var slides = document.querySelectorAll('.slider__images');
            for (let i =0; i<slides.length; i++){
                if (slides[i].classList.contains('sliderShow')){
                    n = i;    
                } 
            }
            let ClickedButton = e.target;
            if (ClickedButton.classList.contains('slider__button_right')){
                ShowNextSlide(slides,n);
            } else {
                ShowPreviousSlide(slides,n);
            }
        }  
    })
}
const ShowNextSlide = (slides,n) =>{
    slides[n].classList.remove('sliderShow');
    if (n < (slides.length -1)) {
        slides[n+1].classList.add('sliderShow'); 
    } else {
        n=0;
        slides[n].classList.add('sliderShow');
    }
}
const ShowPreviousSlide = (slides,n) =>{
    slides[n].classList.remove('sliderShow');
    if (n != 0) {
        slides[n-1].classList.add('sliderShow'); 
    } else {
        n=(slides.length-1);
        slides[n].classList.add('sliderShow');
    }
}
//sliderTouchPhone
const addSliderPhoneClickHandler = () => {
    document.querySelector('.slider').addEventListener('click', (e) => {
        if (e.target.classList.contains('phone__touch_horizontal')) {
            phone = document.querySelector('.phone__screen_horizontal');
            if (phone.classList.contains('hidden')){
                phone.classList.remove('hidden');
            } else {
                phone.classList.add('hidden');
            }
        };
        if (e.target.classList.contains('phone__touch_vertical')) {
            phone = document.querySelector('.phone__screen_vertical');
            if (phone.classList.contains('hidden')){
                phone.classList.remove('hidden');
            } else {
                phone.classList.add('hidden');
            }
        };
        if (e.target.classList.contains('phone__touch_green')) {
            phone = document.querySelector('.phone__screen_vertical_green');
            if (phone.classList.contains('hidden')){
                phone.classList.remove('hidden');
            } else {
                phone.classList.add('hidden');
            }
        };
    })
}
// MessageSibmit
const addMessageSubmitClickHandler = () => {
    document.querySelector('.quote__container').addEventListener('click', (e)=> {
        if (e.target.classList.contains('submit')) {
            let name = document.getElementById('name');
            let email = document.getElementById('email');
            if (name.checkValidity() && email.checkValidity()) {
                e.preventDefault();
                let message = document.querySelector('.quote__container .quote__message');
                message.classList.remove('hidden');
                let subject = document.getElementById('subject').value.toString();
                let description = document.getElementById('description').value.toString();
                if ( subject != '' ) {
                    document.querySelector('.quote__container .message__subject').innerText = 'Subject: ' + subject;
                } else {
                    document.querySelector('.quote__container .message__subject').innerText = 'Without subject';
                };
                if (description != '') {
                    document.querySelector('.quote__container .message__description').innerText = 'Description: ' + description;
                } else {
                    document.querySelector('.quote__container .message__description').innerText = 'Without description';
                };
            }
        }
    })
}; 
// MessageClose
const addMessageCloseClickHandler = () => {
    document.querySelector('.quote__container').addEventListener('click', (e)=>{
        if (e.target.classList.contains('close')) {
            let message = document.querySelector('.quote__container .quote__message');
            message.classList.add('hidden');
        }
    })
}
