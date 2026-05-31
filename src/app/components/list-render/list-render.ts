import { afterNextRender, Component, inject, signal } from '@angular/core';
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
  animals = signal<Animal[]>([]);

  constructor() {
    afterNextRender(() => this.loadAnimals());
  }

  showAge(animal: Animal): void {
    this.showDetails = 'O pet ' + animal.name + ' tem ' + animal.age + ' anos de idade';
    alert(this.showDetails);
  }

  removeAnimal(animal: Animal): void {
    this.animals.update((list) => this.listService.remove(list, animal));
    this.showDetails = '';
  }

  removeLastAnimal(): void {
    const list = this.animals();
    if (!list.length) return;
    this.removeAnimal(list[list.length - 1]);
  }

  private loadAnimals(): void {
    this.listService.getAnimals().subscribe({
      next: (data) => this.animals.set(data),
      error: (err) => console.error('Erro ao carregar animais:', err),
    });
    console.log('Animais carregados:', this.animals());
  }
}
