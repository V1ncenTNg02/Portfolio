import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ExperienceComponent } from './components/pages/experience/experience.component';
import { ContactComponent } from './components/pages/contact/contact.component';

export const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'experience', component:ExperienceComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component: NotFoundComponent}
];
