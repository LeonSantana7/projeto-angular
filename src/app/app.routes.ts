import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './services/auth.service';


export const routes: Routes = [
    {
        path: "login",
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
    },
    {
        path: "home",
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        canActivate: [AuthService]
    },
    {
        path: '',
        redirectTo: 'login',
    }
];