import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, TitleCasePipe, LowerCasePipe, DatePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {


  today = new Date();


}
