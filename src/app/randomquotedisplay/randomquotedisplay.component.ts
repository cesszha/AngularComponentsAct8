import { Component } from '@angular/core';

@Component({
	selector: 'app-randomquotedisplay',
	standalone: true,
	imports: [],
	templateUrl: './randomquotedisplay.component.html',
})
export class RandomquotedisplayComponent {
	quotesArray = [
		"Success is not the destination; it’s the journey. Enjoy every step along the way!",
		"You are capable of amazing things. Believe in yourself and watch the magic unfold.",
		"Great things are not done by impulse, but by a series of small things brought together.",
		"Every day may not be good, but there is something good in every day.",
		"Challenges are what make life interesting; overcoming them is what makes life meaningful.",
		"Be the change you wish to see in the world.",
		"Your dreams don’t have an expiration date. Take a deep breath and try again!",
	  "Start each day with a grateful heart, and you'll find joy in the little things.",
		"Success is not final, failure is not fatal: It is the courage to continue that counts.",
	];
	quote = '';

	generateRandomQuote(): void {
		this.quote =
			this.quotesArray[
				Math.floor(Math.random() * this.quotesArray.length)
			];
	}
}