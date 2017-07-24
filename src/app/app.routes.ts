import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OtherComponent } from './components/other/other.component';
import { CosasComponent } from './components/cosas/cosas.component';
import { PerrosComponent } from './components/perros/perros.component';
import { PerroInfoComponent } from './components/perro-info/perro-info.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'other', component: OtherComponent },
    { path: 'cosas', component: CosasComponent },
    { path: 'perros', component: PerrosComponent },
    { path: 'perro/:id', component: PerroInfoComponent },
    { path: '**', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(routes);