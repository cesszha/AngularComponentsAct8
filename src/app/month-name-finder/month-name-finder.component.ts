import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  imports: [FormsModule,CommonModule],
  selector: 'app-month-name-finder',
  templateUrl: './month-name-finder.component.html',
})
export class MonthNameFinderComponent {
  monthNumber: number | null = null;
  monthName: string = '';

  findMonthName() {
    const monthNames: string[] = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    if (this.monthNumber && this.monthNumber >= 1 && this.monthNumber <= 12) {
      this.monthName = monthNames[this.monthNumber - 1]; // Adjust for zero-based index
    } else {
      this.monthName = 'Invalid month number. Please enter a number between 1 and 12.';
    }
  }
}