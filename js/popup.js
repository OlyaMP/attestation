let loginButton = document.querySelector('.login-button');
let loginPopUp = document.querySelector('.login-popup');

console.log(loginButton); //отладка в консоли
console.log(loginPopUp);

loginButton.addEventListener('click', showPopup);

function showPopup(evt) {
    console.log(evt);
    evt.preventDefault();

    loginPopUp.classList.toggle('show-popup');
};

let closeButton = document.querySelector('.popup-close');
closeButton.addEventListener('click', closePopup);

function closePopup() {
    loginPopUp.classList.remove('show-popup');
};