import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';

const routes: Routes = [ { path :'' , component: AboutmeComponent},
// { path :'ContactMe' , component: ContactMeComponent},
// { path :'AllProjects' , component: AllProjectsComponent},
// { path :'AngularProjects' , component: AngularProjectsComponent},
// { path :'ReactProjects' , component: ReactProjectsComponent},
// { path :'IOTProjects' , component: IotprojectsComponent},
// { path :'CppProject' , component: CppprojectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
