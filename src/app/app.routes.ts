import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'first-component', pathMatch: 'full' },
  {
    path: 'first-component',
    loadComponent: () =>
      import('./components/first-componet/first-componet').then((m) => m.FirstComponet),
  },
  {
    path: 'parent-data',
    loadComponent: () =>
      import('./components/parent-data/parent-data').then((m) => m.ParentData),
  },
  {
    path: 'directives',
    loadComponent: () =>
      import('./components/directives/directives').then((m) => m.Directives),
  },
  {
    path: 'if-render',
    loadComponent: () =>
      import('./components/if-render/if-render').then((m) => m.IfRender),
  },
  {
    path: 'eventos',
    loadComponent: () =>
      import('./components/eventos/eventos').then((m) => m.Eventos),
  },
  {
    path: 'emitter',
    loadComponent: () =>
      import('./components/emitter/emitter').then((m) => m.Emitter),
  },
  {
    path: 'list-render',
    loadComponent: () =>
      import('./components/list-render/list-render').then((m) => m.ListRender),
  },
  {
    path: 'pipes',
    loadComponent: () =>
      import('./components/pipes/pipes').then((m) => m.Pipes),
  },
  {
    path: 'two-way-binding',
    loadComponent: () =>
      import('./components/two-way-binding/two-way-binding').then((m) => m.TwoWayBinding),
  },
  { path: '**', redirectTo: 'first-component' },
];
