import { Component } from '@angular/core';
import { ChangeNumber } from '../change-number/change-number';
@Component({
  selector: 'app-emitter',
  imports: [ChangeNumber],
  templateUrl: './emitter.html',
  styleUrl: './emitter.css',
})
export class Emitter {

  myNumber = 0;

  onChangeNumber(): void {
    console.log("Deu certo");
    this.myNumber = Math.floor(Math.random() * 100);
  }

}
