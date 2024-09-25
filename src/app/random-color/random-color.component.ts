import { Component } from '@angular/core';

@Component({
selector:'app-random-color-generator',
templateUrl:'./random-color.component.html'
})
export class RandomColorGeneratorComponent {
color: string = '#ffffff';

generateColor() {
this.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
}