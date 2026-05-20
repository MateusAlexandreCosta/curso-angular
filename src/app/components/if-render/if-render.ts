import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-if-render',
  imports: [NgIf],
  templateUrl: './if-render.html',
  styleUrl: './if-render.css',
})
export class IfRender {

  canShow = true;

}
