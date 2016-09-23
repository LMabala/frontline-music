import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../components/contactComponent/contact.component';
import { PlayerComponent } from '../components/playerComponent/player.component';
import { HomeComponent } from '../components/homeComponent/home.component';
import { PageNotFoundComponent } from '../components/pageNotFoundComponent/pageNotFound.component';

const appRoutes: Routes = [
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'player',
    component: PlayerComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
