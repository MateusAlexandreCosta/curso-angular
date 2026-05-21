import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-eventos',
  imports: [NgIf],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css',
})
export class Eventos {

  show: boolean = false;

  showMessage(): void {
    this.show = !this.show;
    console.log(this.show);
    
  }

  showAlert(): void {
    alert('Evento foi executado');
  }
}
