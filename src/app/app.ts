import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FirstComponet } from './components/first-componet/first-componet';
import { ParentData } from './components/parent-data/parent-data';
import { Directives } from './components/directives/directives';
import { IfRender } from './components/if-render/if-render';
import { Eventos } from './components/eventos/eventos';
import { Emitter } from './components/emitter/emitter';
import { ListRender } from './components/list-render/list-render';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponet, ParentData,Directives, IfRender, Eventos, Emitter, ListRender],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  userName = "Sermac Turismo";
  titulo = "Desenvolvendo com Angular";

  userDateCompatilhado = {
    email: 'sermac@gmail.com',
    role: 'admin',
  }
  protected readonly title = signal('curso-angular');
}
