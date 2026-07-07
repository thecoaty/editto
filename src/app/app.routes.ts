import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:"full"},
    {path:'home', component:Home},
    {path:'login', component:Login},
    {path:'dashboard', canActivate: [authGuard] , component:Dashboard}
];
