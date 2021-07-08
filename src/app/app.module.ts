import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/security/login/login.component';
import {MatIconModule} from "@angular/material/icon";
import { HeaderComponent } from './components/web/shared/header/header.component';
import { FooterComponent } from './components/web/shared/footer/footer.component';
import {AlertModule, AlertService} from "./_alert";
import {AuthPublicService} from "./services/security/auth-public.service";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { IonicModule } from '@ionic/angular';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    AlertModule,
    IonicModule.forRoot(),

  ],
  providers: [AlertService, AuthPublicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
