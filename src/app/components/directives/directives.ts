import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [NgStyle, NgClass],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  size = 20;
  font = 'Arial';
  color = 'red';
  backgroundColor = 'yellow';

  classes = ['green-title', 'small-title', 'title'];

  underline = 'underline-title'; // underline-title é uma classe que está no arquivo directives.css

  constructor() {
    this.size = 50;
    this.font = 'Arial';
    this.color = 'red';
    this.backgroundColor = 'yellow';
  }
}
