import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginpageComponent } from './app/loginpage/loginpage.component';
import { MenComponent } from './app/men/men.component';
import { RegisterComponent } from './app/register/register.component';
import { WomenComponent } from './app/women/women.component';
import { AccessoriesComponent } from './app/accessories/accessories.component';

bootstrapApplication( AppComponent, appConfig)
  .catch((err) => console.error(err));
