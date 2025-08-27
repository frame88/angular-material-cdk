import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./pages/home/home') },
    { path: 'demo', loadComponent: () => import('./pages/demo/demo') },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
