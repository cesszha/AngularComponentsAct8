import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports:[FormsModule, CommonModule],
  selector: 'app-alphabetical-sorter',
  templateUrl: './alphabetical-sorter.component.html',
})
export class AlphabeticalSorterComponent {
  inputWords: string = '';
  sortedWords: string[] = [];

  sortWords() {
   
    const wordsArray = this.inputWords.split(',').map(word => word.trim()).filter(word => word !== '');
    
    
    this.sortedWords = wordsArray.sort((a, b) => a.localeCompare(b));
  }
}