import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
standalone: true,
imports: [CommonModule],
selector:'app-emoji-selector-simple',
templateUrl:'./emoji-selector.component.html'
})
export class EmojiSelectorSimpleComponent {

emojis:string[]=['😀','😂','😍','😎','🤔','😢','😡'];
selectedEmoji:string='';

selectEmoji(emoji:string) {
this.selectedEmoji=emoji;
}

}