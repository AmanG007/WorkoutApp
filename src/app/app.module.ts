import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingupComponent } from './auth/singup/singup.component';
import { LoginComponent } from './auth/login/login.component';
import { TraingingComponent } from './trainging/trainging.component';
import { PastTrainingsComponent } from './trainging/past-trainings/past-trainings.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { CurrentTraingingComponent } from './trainging/current-training/current-trainging.component';
import { NewTraingingComponent } from './trainging/new-trainging/new-trainging.component';
import { StopTrainingComponent } from './trainging/current-training/stop-training.component';
import { AuthService } from './auth/auth.service';
import { TrainingService } from './trainging/training.service';

@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    LoginComponent,
    TraingingComponent,
    CurrentTraingingComponent,
    PastTrainingsComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NewTraingingComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, TrainingService],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent]
})
export class AppModule { }
