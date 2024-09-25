import { Component } from '@angular/core';

@Component({
selector:'app-recipe-card',
templateUrl:'./recipe-card.component.html'
})
export class RecipeCardComponent {
recipe = {
title: 'Beef Tacos',
ingredients: ['Ground Beef', 'Taco Shells', 'Lettuce', 'Tomato', 'Cheese'],
instructions: 'Cook beef, fill taco shells with beef and toppings.'
};
}