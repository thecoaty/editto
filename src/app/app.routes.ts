import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:"full"},
    {path:'home', component:Home},
    {path:'login', component:Login},
    {path:'dashboard', canActivate: [authGuard] , loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard)}
];
