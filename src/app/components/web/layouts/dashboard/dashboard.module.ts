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
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { FormularioComponent } from './maincontainer/formulario/formulario.component';
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {authInterceptorProviders} from "../../../../services/security/auth.interceptor.service";
import {CanActivateRouteGuard} from "../../../../services/security/can-activate-route.guard";

@NgModule({
    declarations: [
        DashboardComponent,
        FooterComponent,
        HeaderComponent,
        MaincontainerComponent,
        SidebarleftComponent,
        FormularioComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        AlertModule,
        FormsModule,
        IonicModule,
        DashboardRoutingModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatSelectModule,
        MatButtonModule,
    ],
    providers: [ authInterceptorProviders, CanActivateRouteGuard]
})
export class DashboardModule {
}
