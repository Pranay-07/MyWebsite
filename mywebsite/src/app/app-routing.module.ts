import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AngularProjectsComponentComponent} from './angular-projects-component/angular-projects-component.component';
import { IotProjectsComponent } from './iot-projects/iot-projects.component';
import { CppprojectsComponent } from './cppprojects/cppprojects.component';
import { ReactProjectComponent } from './react-project/react-project.component';

const routes: Routes = [ { path :'' , component: AboutmeComponent},
{ path :'AboutMe' , component: AboutmeComponent},
{ path :'ContactMe' , component: ContactMeComponent},
{ path :'AllProjects' , component: AllProjectsComponent},
{ path :'AngularProjects' , component: AngularProjectsComponentComponent},
{ path :'ReactProjects' , component: ReactProjectComponent},
{ path :'IOTProjects' , component: IotProjectsComponent},
{ path :'CppProject' , component: CppprojectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
