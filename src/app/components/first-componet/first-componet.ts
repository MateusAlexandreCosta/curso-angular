import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-componet',
  imports: [],
  templateUrl: './first-componet.html',
  styleUrl: './first-componet.css',
})
export class FirstComponet implements OnInit {
  name = "Mateus Alexandre";
  idade = 31;
  job = "Desenvolvedor Full Stack";
  hobbies = ['Programar', 'Jogar', 'Estudar'];
  car = {
    marca: 'Toyota',
    modelo: 'Hilux',
    ano: 2022,
  };

  constructor() {
    console.log('FirstComponet constructor');
  }

  ngOnInit(): void {
    console.log('FirstComponet ngOnInit');
  }
}
