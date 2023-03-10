import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Group1Component } from './group1/group1.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServiceComponent } from './service/service.component';
import { CommunicationComponent } from './communication/communication.component';
import { FacilityComponent } from './facility/facility.component';
import { ResearchComponent } from './research/research.component';
import { TrainingComponent } from './training/training.component';
import { TeamComponent } from './team/team.component';
import { ProjectComponent } from './project/project.component';
import { ClientComponent } from './client/client.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Group1Component,
    AboutusComponent,
    ServiceComponent,
    CommunicationComponent,
    FacilityComponent,
    ResearchComponent,
    TrainingComponent,
    TeamComponent,
    ProjectComponent,
    ClientComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
