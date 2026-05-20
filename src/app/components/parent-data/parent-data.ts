import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-parent-data',
  imports: [],
  templateUrl: './parent-data.html',
  styleUrl: './parent-data.css',
})
export class ParentData {

  @Input() name: string = 'Sem nome';
  @Input() titulo: string = 'Sem titulo';
  @Input() userDateCompatilhado: any = {
    email: 'Sem email',
    role: 'Sem role',
  };



}
