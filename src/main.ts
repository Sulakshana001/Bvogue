import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginpageComponent } from './app/loginpage/loginpage.component';
import { MenComponent } from './app/men/men.component';
import { RegisterComponent } from './app/register/register.component';

bootstrapApplication( RegisterComponent, appConfig)
  .catch((err) => console.error(err));
