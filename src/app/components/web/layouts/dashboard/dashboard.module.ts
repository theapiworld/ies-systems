import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MaincontainerComponent} from './maincontainer/maincontainer.component';
import {SidebarleftComponent} from './sidebarleft/sidebarleft.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AlertModule} from "../../../../_alert";
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        DashboardComponent,
        FooterComponent,
        HeaderComponent,
        MaincontainerComponent,
        SidebarleftComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        AlertModule,
        FormsModule,
        IonicModule,
        DashboardRoutingModule,
    ]
})
export class DashboardModule {
}
