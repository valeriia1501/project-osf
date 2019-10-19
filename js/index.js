let blocks = document.querySelectorAll('.advert__slider-block');
let buttons = document.querySelectorAll('.advert__slider-button');
let activeElement = document.querySelector('.active-element');
let activeButton = document.querySelector('.active-button');

let carouselBanner = {
    eventKeydownArrowRight() {
        document.addEventListener('keydown', (event) => {
            if (event.code == 'ArrowRight') {
                if (activeElement.nextElementSibling == undefined) {
                    blocks[0].classList.add('active-element');
                    buttons[0].classList.add('active-button');
                } else {
                    activeElement.nextElementSibling.classList.add('active-element');
                    activeButton.nextElementSibling.classList.add('active-button');
                }
                activeElement.classList.remove('active-element');
                activeElement = activeElement.nextElementSibling || blocks[0];
                activeButton.classList.remove('active-button');
                activeButton = activeButton.nextElementSibling || buttons[0];
            }
        });
    },
    eventKeydownArrowLeft() {
        document.addEventListener('keydown', (event) => {
            if (event.code == 'ArrowLeft') {
                if (activeElement.previousElementSibling == undefined) {
                    blocks[blocks.length - 1].classList.add('active-element');
                    buttons[buttons.length - 1].classList.add('active-button');
                } else {
                    activeElement.previousElementSibling.classList.add('active-element');
                    activeButton.previousElementSibling.classList.add('active-button');
                }
                activeElement.classList.remove('active-element');
                activeElement = activeElement.previousElementSibling || blocks[blocks.length - 1];
                activeButton.classList.remove('active-button');
                activeButton = activeButton.previousElementSibling || buttons[buttons.length - 1];
            }
        });
    },
    eventButtonClick() {
        document.addEventListener('click', (event) => {
            arrButtons = [...buttons];
            let index = arrButtons.indexOf(event.target);
            if (event.target.classList.contains('advert__slider-button')) {
                if (activeButton !== event.target) {
                    blocks[index].classList.add('active-element');
                    buttons[index].classList.add('active-button'); 
                    activeElement.classList.remove('active-element');
                    activeButton.classList.remove('active-button');
                    activeElement = blocks[index];
                    activeButton = buttons[index]; 
                }
            }   
        });
    }   
};

carouselBanner.eventKeydownArrowRight();
carouselBanner.eventKeydownArrowLeft();
carouselBanner.eventButtonClick();





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





let blocksProduct = document.querySelectorAll('.product-tile__slider-block');
let buttonsProduct = document.querySelectorAll('.product-tile__slider-button');
let activeElementProduct = document.querySelector('.active-element-product');
let activeButtonProduct = document.querySelector('.active-button-product');

let productTileCarousel = {
    eventKeydownArrowRight() {
        document.addEventListener('keydown', (event) => {
            if (event.code == 'ArrowRight') {
                if (activeElementProduct.nextElementSibling == undefined) {
                    blocksProduct[0].classList.add('active-element-product');
                    buttonsProduct[0].classList.add('active-button-product');
                } else {
                    activeElementProduct.nextElementSibling.classList.add('active-element-product');
                    activeButtonProduct.nextElementSibling.classList.add('active-button-product');
                }
                activeElementProduct.classList.remove('active-element-product');
                activeElementProduct = activeElementProduct.nextElementSibling || blocksProduct[0];
                activeButtonProduct.classList.remove('active-button-product');
                activeButtonProduct = activeButtonProduct.nextElementSibling || buttonsProduct[0];
            }
        });
    },
    eventKeydownArrowLeft() {
        document.addEventListener('keydown', (event) => {
            if (event.code == 'ArrowLeft') {
                if (activeElementProduct.previousElementSibling == undefined) {
                    blocksProduct[blocksProduct.length - 1].classList.add('active-element-product');
                    buttonsProduct[buttonsProduct.length - 1].classList.add('active-button-product');
                } else {
                    activeElementProduct.previousElementSibling.classList.add('active-element-product');
                    activeButtonProduct.previousElementSibling.classList.add('active-button-product');
                }
                activeElementProduct.classList.remove('active-element-product');
                activeElementProduct = activeElementProduct.previousElementSibling || blocksProduct[blocksProduct.length - 1];
                activeButtonProduct.classList.remove('active-button-product');
                activeButtonProduct = activeButtonProduct.previousElementSibling || buttonsProduct[buttonsProduct.length - 1];
            }
        });
    },
    eventButtonClick() {
        document.addEventListener('click', (event) => {
            arrButtons = [...buttonsProduct];
            let index = arrButtons.indexOf(event.target);
            if (event.target.classList.contains('product-tile__slider-button')) {
                if (activeButtonProduct !== event.target) {
                    blocksProduct[index].classList.add('active-element-product');
                    buttonsProduct[index].classList.add('active-button-product'); 
                    activeElementProduct.classList.remove('active-element-product');
                    activeButtonProduct.classList.remove('active-button-product');
                    activeElementProduct = blocksProduct[index];
                    activeButtonProduct = buttonsProduct[index]; 
                }
            }   
        });
    }   
};

productTileCarousel.eventKeydownArrowRight();
productTileCarousel.eventKeydownArrowLeft();
productTileCarousel.eventButtonClick();







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
                console.log(n);
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






let loadMoreButton = document.querySelector('.product-tile__slider-load');

let productTileLoadMore = {
    fetchProductTiles() {
        fetch('../product-tile.json')
            .then(response => response.json())
            .then(json => {
	        	json.forEach(item => {
                    let newProductTile = document.createElement('div');
                    newProductTile.classList.add('product-tile__slider-block');
                    newProductTile.classList.add('product-tile__hover-state');
                    let newProductTileImg = document.createElement('img');
                    newProductTileImg.classList.add('product-tile__slider-block-img');
                    newProductTileImg.src = item.imageUrl;
                    let newProductTileName = document.createElement('p');
                    newProductTileName.classList.add('product-tile__slider-block-p');
                    newProductTileName.innerText = item.name;
                    let newProductTilePrice = document.createElement('p');
                    newProductTilePrice.classList.add('product-tile__slider-block-price');
                    newProductTilePrice.innerText = item.price;

                    let newProductTileHover = document.createElement('div');
                    newProductTileHover.classList.add('product-tile__slider-block-hover');

                        let newProductTileHoverPlus = document.createElement('div');
                        newProductTileHoverPlus.classList.add('product-tile__slider-block-hover-plus');
                        let newProductTileHoverHeart = document.createElement('div');
                        newProductTileHoverHeart.classList.add('product-tile__slider-block-hover-heart');

                            let newProductTileHoverPlusIcon = document.createElement('i');
                            newProductTileHoverPlusIcon.classList.add('fas');
                            newProductTileHoverPlusIcon.classList.add('fa-plus');
                            newProductTileHoverPlusIcon.classList.add('product-tile__slider-block-hover-plus-icon');

                            let newProductTileHoverHeartIcon = document.createElement('i');
                            newProductTileHoverHeartIcon.classList.add('fas');
                            newProductTileHoverHeartIcon.classList.add('fa-heart');
                            newProductTileHoverHeartIcon.classList.add('product-tile__slider-block-hover-heart-icon');
                    
                    newProductTileHoverPlus.appendChild(newProductTileHoverPlusIcon);
                    newProductTileHoverHeart.appendChild(newProductTileHoverHeartIcon);

                    newProductTileHover.appendChild(newProductTileHoverPlus);
                    newProductTileHover.appendChild(newProductTileHoverHeart);

                    newProductTile.appendChild(newProductTileImg);
                    newProductTile.appendChild(newProductTileName);
                    newProductTile.appendChild(newProductTilePrice);
                    newProductTile.appendChild(newProductTileHover);
                    
                    let productTileBlocks = document.querySelector('.product-tile__slider-blocks');
                    productTileBlocks.appendChild(newProductTile);
                });
                

	        	// ololo += '</ul>';
	        	// document.body.innerHTML = ololo;
	        })



	        // .then(json => {
	        // 	let ololo = '<ul>';
	        // 	json.forEach(item => {
	        // 		ololo += `<li>${item.name}</li>`;
	        // 	});
	        // 	ololo += '</ul>';
	        // 	document.body.innerHTML = ololo;
	        // })
	        .catch(err => console.error(err));
    },
    loadMore() {
        loadMoreButton.addEventListener('click', (event) => {
            event.preventDefault();
            productTileLoadMore.fetchProductTiles();
        })
    }
}

productTileLoadMore.loadMore();







let blocksFeatured = document.querySelectorAll('.featured-products__slider-container-blocks');
let prevButtonFeatured = document.querySelector('.featured-products__slider-nav-prev');
let nextButtonFeatured = document.querySelector('.featured-products__slider-nav-next');
let activeElementFeatured = document.querySelector('.active-element-featured');
let activeButtonFeatured = document.querySelector('.active-button-featured');

let featuredProductsCarousel = {
    setIntervalNext() {
        let timer = setInterval(() => {
            if (activeElementFeatured.nextElementSibling == undefined) {
                blocksFeatured[0].classList.add('active-element-featured');
            } else {
                activeElementFeatured.nextElementSibling.classList.add('active-element-featured');
            }
            activeElementFeatured.classList.remove('active-element-featured');
            activeElementFeatured = activeElementFeatured.nextElementSibling || blocksFeatured[0];
        }, 5000);
    },
    eventKeydownArrowRight() {
        document.addEventListener('keydown', (event) => {
            if (event.code == 'ArrowRight') {
                if (activeElementFeatured.nextElementSibling == undefined) {
                    blocksFeatured[0].classList.add('active-element-featured');
                } else {
                    activeElementFeatured.nextElementSibling.classList.add('active-element-featured');
                }
                activeElementFeatured.classList.remove('active-element-featured');
                activeElementFeatured = activeElementFeatured.nextElementSibling || blocksFeatured[0];
            }
        });
    },
    eventClickNext() {
        nextButtonFeatured.addEventListener('click', () => {
            if (activeElementFeatured.nextElementSibling == undefined) {
                blocksFeatured[0].classList.add('active-element-featured');
            } else {
                activeElementFeatured.nextElementSibling.classList.add('active-element-featured');
            }
            activeElementFeatured.classList.remove('active-element-featured');
            activeElementFeatured = activeElementFeatured.nextElementSibling || blocksFeatured[0];
        });
    },
    eventKeydownArrowLeft() {
        document.addEventListener('keydown', (event) => {
            if (event.code == 'ArrowLeft') {
                if (activeElementFeatured.previousElementSibling == undefined) {
                    blocksFeatured[blocksFeatured.length - 1].classList.add('active-element-featured');
                } else {
                    activeElementFeatured.previousElementSibling.classList.add('active-element-featured');
                }
                activeElementFeatured.classList.remove('active-element-featured');
                activeElementFeatured = activeElementFeatured.previousElementSibling || blocksFeatured[blocksFeatured.length - 1];
            }
        });
    },
    eventClickPrev() {
        prevButtonFeatured.addEventListener('click', () => {
            if (activeElementFeatured.previousElementSibling == undefined) {
                blocksFeatured[blocksFeatured.length - 1].classList.add('active-element-featured');
            } else {
                activeElementFeatured.previousElementSibling.classList.add('active-element-featured');
            }
            activeElementFeatured.classList.remove('active-element-featured');
            activeElementFeatured = activeElementFeatured.previousElementSibling || blocksFeatured[blocksFeatured.length - 1];
        });
    }
};

featuredProductsCarousel.eventKeydownArrowRight();
featuredProductsCarousel.eventKeydownArrowLeft();
featuredProductsCarousel.eventClickNext();
featuredProductsCarousel.eventClickPrev();
featuredProductsCarousel.setIntervalNext();




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
        });
    },
    toggleCategoriestText() {
        categoriestButton.addEventListener('click', () => {
            categoriestText.classList.toggle('active');
            categoriestI.classList.toggle('i-rotate');
        });
    },
    toggleAboutText() {
        aboutButton.addEventListener('click', () => {
            aboutText.classList.toggle('active');
            aboutI.classList.toggle('i-rotate');
        });
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

