import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  imports: [],
  templateUrl: './change-number.html',
  styleUrl: './change-number.css',
})
export class ChangeNumber {

  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handleClick(): void {
    this.changeNumber.emit();
    console.log('Alterar número');
  }
}
