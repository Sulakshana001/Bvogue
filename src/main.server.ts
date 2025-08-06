import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { LoginpageComponent } from './app/loginpage/loginpage.component';
import { MenComponent } from './app/men/men.component';

const bootstrap = () => bootstrapApplication(LoginpageComponent, config);

export default bootstrap;
