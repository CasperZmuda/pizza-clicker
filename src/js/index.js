'use strict';

const playGameBtn = document.querySelector('.form__button');
let restaurantName = document.querySelector('.form__input');
const welcomeText = document.querySelector('.welcome-text');
const welcomeTextText = document.querySelector('.welcome-text__text');
let welcomeTextRestaurantName = document.querySelector(
	'.welcome-text__restaurant'
);

const startGame = e => {
	if (restaurantName.value) {
		e.preventDefault();
		restaurantName = restaurantName.value;
		const startMenuContent = document.querySelector('.start-menu');
		const startMenuFooter = document.querySelector('.footer');
		startMenuContent.classList.add('disabled');
		startMenuFooter.classList.add('disabled');
		welcomeText.classList.remove('disabled');
		welcomeTextRestaurantName.textContent = restaurantName;
		welcomeTextInformation();
		setTimeout(loadGame, 8000);
	}
};

const welcomeTextInformation = () => {
	welcomeTextText.classList.add('animation1');
	welcomeTextRestaurantName.classList.add('animation2');
	setTimeout(() => {
		welcomeTextText.classList.add('disabled');
		welcomeTextRestaurantName.classList.add('disabled');
	}, 8000);
};

playGameBtn.addEventListener('click', startGame);
playGameBtn.addEventListener('keydown', e => {
	if ((e.key = 'enter')) {
		startGame();
	}
});

const loadGame = () => {
	window.location.href = `../game.kit`;
};
