import { Routes } from '@angular/router';
import { Layout } from './layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        redirectTo: 'characters',
        pathMatch: 'full'
      },
      {
        path: 'characters',
        loadComponent: () => import('./characters/characters').then(m => m.Characters)
      }
    ]
  }
];
