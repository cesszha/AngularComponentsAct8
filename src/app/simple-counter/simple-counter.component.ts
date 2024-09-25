import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-counter',
  templateUrl: './simple-counter.component.html',
})
export class SimpleCounterComponent {
  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}