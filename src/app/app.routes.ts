import { Routes } from '@angular/router';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { HomeComponent } from './home/home.component';
// import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: 'men',
    component: MenComponent,
  },
  {
    path: 'women',
    component: WomenComponent,
  },
  {
    path: 'accessories',
    component: AccessoriesComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // Uncomment if ContactComponent exists
  // {
  //   path: 'contact',
  //   component: ContactComponent,
  // },
];