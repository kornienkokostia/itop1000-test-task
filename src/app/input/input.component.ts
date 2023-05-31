import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'text-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() inputTitle: string;
  @Input() inputType: string;
  @Input() control: FormControl;

  inputFocused: boolean = false;

  handleFocus(e: FocusEvent) {
    const el = e.target as HTMLInputElement;
    el.value.length === 0 ? (this.inputFocused = !this.inputFocused) : false;
  }

  handleKeyDown(e: KeyboardEvent) {
    ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
  }
}
