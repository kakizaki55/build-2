import { food } from './food.js';

// console.log(food);

for (let item of food){

    const foodItem = document.createElement('li');
    foodItem.classList.add('food-item');

    const foodImg = document.createElement('img');
    foodImg.src = item.img;
    
    const foodName = document.createElement('span');
    foodName.classList.add('food-name');
    foodName.textContent = item.name;

    foodItem.append(foodImg, foodName);
    const foodList = document.getElementById('food-list');

    foodList.append(foodItem);
    
}



