
let nav = document.querySelector('.nav');
let openButton = document.querySelector('.nav-open');
let closeButton = document.querySelector('.nav-close');
let advert = document.querySelector('.advert');
let outerDropDown = document.querySelector('.drop-down');
let innerDropDown = document.querySelectorAll('.drop-down-sub');
let subUl = document.querySelector('.nav__sub-ul');
let innerUl = document.querySelectorAll('.nav__inner-ul');
let navImg = document.querySelector('.nav__img');
let mq = window.matchMedia('(min-width: 768px)');

let dropDownMenu = {
    openMenu() {
        openButton.addEventListener('click', () => {
            nav.classList.add('active');
            openButton.classList.add('inactive');
            closeButton.classList.add('active');
            outerDropDown.style.color = '#ffffff';
        });
    },
    closeMenu() {
        closeButton.addEventListener('click', () => {
            nav.classList.remove('active');
            openButton.classList.remove('inactive');
            closeButton.classList.remove('active');
            outerDropDown.style.color = '#ffffff';
        });
    },
    toggleSubUl() {
        outerDropDown.addEventListener('click', (event) => {
            event.preventDefault();
            subUl.classList.toggle('active');
            outerDropDown.classList.toggle('drop-down-toggled');
        });
    },
    toggleInnerUl() {
        innerDropDown[0].addEventListener('click', (event) => {
            event.preventDefault();
            innerUl[0].classList.toggle('active');
            innerDropDown[0].classList.toggle('drop-down-toggled');
        });
        innerDropDown[1].addEventListener('click', (event) => {
            event.preventDefault();
            innerUl[1].classList.toggle('active');
            innerDropDown[1].classList.toggle('drop-down-toggled');
        });
    },
    hoverSubUlOver() {
        outerDropDown.addEventListener('mouseover', (event) => {
            if (mq.matches) {
                event.preventDefault();
                subUl.classList.add('active');
                outerDropDown.classList.add('drop-down-toggled');
                outerDropDown.classList.add('outer-drop-down');
                outerDropDown.style.color = '#ffffff';
                navImg.style.display = 'block';
                outerDropDown.classList.add('drop-down-toggled');
            }    
        });
    },
    hoverSubUlOut() {
        outerDropDown.addEventListener('mouseout', (event) => {
            if (mq.matches) {
                event.preventDefault();
                subUl.classList.remove('active');
                outerDropDown.classList.remove('drop-down-toggled');
                outerDropDown.classList.remove('outer-drop-down');
                outerDropDown.style.color = '#45413e';
                navImg.style.display = 'none';
                outerDropDown.classList.remove('drop-down-toggled');
            }    
        });
    },
    hoverOver() {
        subUl.addEventListener('mouseover', (event) => {
            if (mq.matches) {
                event.preventDefault();
                outerDropDown.classList.add('outer-drop-down');
                outerDropDown.style.color = '#ffffff';
                navImg.style.display = 'block';
                outerDropDown.classList.add('drop-down-toggled');
            }   
        });
    },
    hoverOut() {
        subUl.addEventListener('mouseout', (event) => {
            if (mq.matches) {
                event.preventDefault();
                outerDropDown.classList.remove('outer-drop-down');
                outerDropDown.style.color = '#45413e';
                navImg.style.display = 'none';
                outerDropDown.classList.remove('drop-down-toggled');
            }    
        });
    }
}

dropDownMenu.openMenu();
dropDownMenu.closeMenu();
dropDownMenu.toggleSubUl();
dropDownMenu.toggleInnerUl();
dropDownMenu.hoverSubUlOver();
dropDownMenu.hoverSubUlOut();
dropDownMenu.hoverOver();
dropDownMenu.hoverOut();








let copyright = document.querySelector('.footer__contact-copyright');
let contactButton = document.querySelector('.footer__contact-button');
let contactBlock = document.querySelector('.footer__contact-block');
let contactI = document.querySelector('.footer__contact-button-i');
let categoriestButton = document.querySelector('.footer__categoriest-button');
let categoriestText = document.querySelector('.footer__categoriest-text');
let categoriestI = document.querySelector('.footer__categoriest-button-i');
let aboutButton = document.querySelector('.footer__about-button');
let aboutText = document.querySelector('.footer__about-text');
let aboutI = document.querySelector('.footer__about-button-i');

let footer = {
    curYear() {
        let date = new Date;
        copyright.innerHTML= `© Copyright  ${date.getFullYear()}. <br> All Rights Reserved.`;
    },
    toggleContactBlock() {
        contactButton.addEventListener('click', () => {
            contactBlock.classList.toggle('active');
            contactI.classList.toggle('i-rotate');
        })
    },
    toggleCategoriestText() {
        categoriestButton.addEventListener('click', () => {
            categoriestText.classList.toggle('active');
            categoriestI.classList.toggle('i-rotate');
        })
    },
    toggleAboutText() {
        aboutButton.addEventListener('click', () => {
            aboutText.classList.toggle('active');
            aboutI.classList.toggle('i-rotate');
        })
    },
}

footer.curYear();
footer.toggleContactBlock();
footer.toggleCategoriestText();
footer.toggleAboutText();







let logInButtons = document.querySelectorAll('.account-options__user');
let popup = document.querySelector('.popup');
let popupInner = document.querySelector('.popup__inner');
let passwordEye = document.querySelector('.popup__inner-form-input-icon');
let passwordInput = document.querySelector('.popup__inner-form-input-password');

let popupFunctionality = {
    showPopup() {
        let handler = (event) => {
            event.preventDefault();
            popup.classList.add('active');
        }
        logInButtons[0].addEventListener('click', handler);
        logInButtons[1].addEventListener('click', handler);
    },
    closePopup() {
        document.addEventListener('keydown', (event) => {
            if (event.code == 'Escape') {
                popup.classList.remove('active');
            }
        });
        popup.addEventListener('click', () => {
            popup.classList.remove('active');
        });
        popupInner.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    },
    togglePassword() {
        passwordEye.addEventListener('click', () => {
            if (passwordInput.getAttribute('type') === 'password') {
                passwordInput.setAttribute('type', 'text');
                passwordEye.classList.add('fa-eye-slash');
                passwordEye.classList.remove('fa-eye');
            } else {
                passwordInput.setAttribute('type', 'password');
                passwordEye.classList.remove('fa-eye-slash');
                passwordEye.classList.add('fa-eye');
            }
        })
    }
}

popupFunctionality.showPopup();
popupFunctionality.closePopup();
popupFunctionality.togglePassword();





let cookieAcceptButton = document.querySelector('.cookie-popup__inner-block-button');
let cokkiePopup = document.querySelector('.cookie-popup');
let closeCookieButton = document.querySelector('.cookie-popup__inner-close');

let cookieFunctionality = {
    tickAccept() {
        cookieAcceptButton.addEventListener('click', () => {
            localStorage.cookie = 'accept';
            cokkiePopup.classList.remove('active-cookie');
        })
    },
    showCookie() {
        if (localStorage.cookie !== 'accept') {
            setTimeout(() => {
                cokkiePopup.classList.add('active-cookie');
            }, 10000);
        } 
    },
    closeCookie() {
        closeCookieButton.addEventListener('click', () => {
            cokkiePopup.classList.remove('active-cookie');
        })
    }
}

cookieFunctionality.tickAccept();
cookieFunctionality.showCookie();
cookieFunctionality.closeCookie();




let optionsWish = document.querySelectorAll('.account-options__wish');
let optionsCart = document.querySelectorAll('.account-options__cart');

let productTileAddTo = {
    addToWish() {
        let n;
        if (localStorage.wish !== undefined) {
            n = localStorage.wish;
            optionsWish[0].style.display = 'block';
            optionsWish[1].style.display = 'block';
            optionsWish[0].innerText = `${n}`;
            optionsWish[1].innerText = `${n}`;
        } else {
            n = 0;
        }
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('product-tile__slider-block-hover-heart-icon') || 
                event.target.classList.contains('product-tile__slider-block-hover-heart')) {
                n++;
                localStorage.wish = n;
                optionsWish[0].innerText = `${n}`;
                optionsWish[1].innerText = `${n}`;
                optionsWish[0].style.display = 'block';
                optionsWish[1].style.display = 'block';
            }
        });
    },
    addToCart() {
        let n;
        if (localStorage.cart !== undefined) {
            n = localStorage.cart;
            optionsCart[0].style.display = 'block';
            optionsCart[1].style.display = 'block';
            optionsCart[0].innerText = `${n}`;
            optionsCart[1].innerText = `${n}`;
        } else {
            n = 0;
        }
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('product-tile__slider-block-hover-plus-icon') || 
                event.target.classList.contains('product-tile__slider-block-hover-plus') || 
                event.target.classList.contains('product-tile__slider-block-buttons-text')) {
                n++;
                localStorage.cart = n;
                optionsCart[0].innerText = `${n}`;
                optionsCart[1].innerText = `${n}`;
                optionsCart[0].style.display = 'block';
                optionsCart[1].style.display = 'block';
            }
            if (event.target.classList.contains('product-detailed__block-details-button')) {
                n = +n + +inputProduct.value;
                localStorage.cart = n;
                optionsCart[0].innerText = `${n}`;
                optionsCart[1].innerText = `${n}`;
                optionsCart[0].style.display = 'block';
                optionsCart[1].style.display = 'block';
            }
        });
    }
}

productTileAddTo.addToWish();
productTileAddTo.addToCart();