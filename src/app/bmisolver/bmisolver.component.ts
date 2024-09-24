import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
	selector: 'app-bmisolver',
	standalone: true,
	imports: [],
	templateUrl: './bmisolver.component.html',
})
export class BmisolverComponent {
  @ViewChild('height') height!: ElementRef;
	@ViewChild('weight') weight!: ElementRef;
	Result = 0;
  
	calculate(): void {
	  const heightInMeters = Number(this.height.nativeElement.value) / 100;
	  this.Result =
		Number(this.weight.nativeElement.value) / Math.pow(heightInMeters, 2);
	}
	}
