'use strict';

document.title = '0 - Pizza Clicker 🍕';

const pizza = document.querySelector('.pizza');
let POINT = 0;

const addPizzaPoint = () => {
	POINT += 1;
	writePizzaPoints();
};

const pizzaSlicesCounter = document.querySelector('.pizza-slices');
const pizzaPlaceName = document.querySelector('.pizzaplace-name');

const writePizzaPoints = () => {
	pizzaSlicesCounter.textContent = POINT;
	document.title = `${POINT} - Pizza Clicker 🍕`;
};

pizza.addEventListener('click', addPizzaPoint);
