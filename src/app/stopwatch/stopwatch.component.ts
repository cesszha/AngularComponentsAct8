import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
})
export class StopwatchComponent {
  seconds: number = 0;
  interval: any;

  start() {
    this.stop();
    this.interval = setInterval(() => {
      this.seconds++;
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  reset() {
    this.stop();
    this.seconds = 0;
  }
}