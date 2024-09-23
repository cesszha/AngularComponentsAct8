import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  standalone: true,
  imports: [],
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.css'
})
export class SimpleFormComponent {
  @ViewChild('firstName') firstName!: ElementRef;
  @ViewChild('middleInitial') middleInitial!: ElementRef;
  @ViewChild('lastName') lastName!: ElementRef;
  firstNameValue = '';
  lastNameValue = '';
  middleInitialValue = '';
  submitInformation(): void {
      this.firstNameValue = this.firstName.nativeElement.value;
      this.middleInitialValue = this.middleInitial.nativeElement.value;
      this.lastNameValue = this.lastName.nativeElement.value;
  }
}
