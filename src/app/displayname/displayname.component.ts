import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-displayname',
  standalone: true,
  imports: [],
  templateUrl: './displayname.component.html',
  styleUrl: './displayname.component.css'
})
export class DisplaynameComponent {
  @ViewChild('nameField') nameField!: ElementRef;
  name = '';
  displayName(): void {
      this.name = this.nameField.nativeElement.value;
  }
}
