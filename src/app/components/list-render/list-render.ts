import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { Animal } from '../../interfaces-model/Animal';
import { ListService } from '../../services/list-service';

@Component({
  selector: 'app-list-render',
  imports: [NgFor],
  templateUrl: './list-render.html',
  styleUrl: './list-render.css',
})
export class ListRender {


  showDetails = '';
  listService = inject(ListService);


  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 4 },
    { name: 'Tom', type: 'Cat', age: 2 },
    { name: 'Frida', type: 'Bird', age: 1 },
    { name: 'Bob', type: 'Horse', age: 3 },

  ];

  showAge(animal: Animal): void {
    this.showDetails ="O pet " + animal.name + " tem " + animal.age + " anos de idade";
    console.log(this.showDetails);
  }

  removeAnimal(animal: Animal): void {
    console.log('Removendo animal...', animal.name);
    this.animals = this.listService.remove(this.animals, animal);
    this.showDetails = '';
  }

  removeLastAnimal(): void {
    if (!this.animals.length) return;
    this.removeAnimal(this.animals[this.animals.length - 1]);
  }

}
