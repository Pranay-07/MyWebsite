import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColouselComponent } from './colousel/colousel.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { AngularProjectsComponentComponent } from './angular-projects-component/angular-projects-component.component';
import { ReactProjectComponent } from './react-project/react-project.component';
import { IotProjectsComponent } from './iot-projects/iot-projects.component';
import { CppprojectsComponent } from './cppprojects/cppprojects.component';


@NgModule({
  declarations: [
    AppComponent,
    ColouselComponent,
    AboutmeComponent,
    ContactMeComponent,
    AllProjectsComponent,
    AngularProjectsComponentComponent,
    ReactProjectComponent,
    IotProjectsComponent,
    CppprojectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
