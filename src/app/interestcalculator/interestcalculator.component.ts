import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
	selector: 'app-interestcalculator',
	standalone: true,
	imports: [],
	templateUrl: './interestcalculator.component.html',
})
export class InterestcalculatorComponent {
	@ViewChild('principal') principal!: ElementRef;
	@ViewChild('rate') rate!: ElementRef;
	@ViewChild('years') years!: ElementRef;
	si = 0; 

	calculate(): void {
		const principalValue = Number(this.principal.nativeElement.value);
		const rateValue = Number(this.rate.nativeElement.value);
		const timeValue = Number(this.years.nativeElement.value); 

		if (isNaN(principalValue) || isNaN(rateValue) || isNaN(timeValue)) {
			alert('Please enter valid numeric values for all fields.');
			return;
		}

		this.si = principalValue * (rateValue / 100) * timeValue; 
	}
}