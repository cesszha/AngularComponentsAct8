import { Component } from '@angular/core';

@Component({
selector:'app-countdown-timer-simple',
templateUrl:'./count-down-timer.component.html'
})
export class CountdownTimerSimpleComponent {

timeLeft:number=600;

startCountdown() {

const interval=setInterval(() => {

if(this.timeLeft >0) {

this.timeLeft--;

} else {

clearInterval(interval);

}

},1000);

}

resetCountdown() {

this.timeLeft=600;

}

}