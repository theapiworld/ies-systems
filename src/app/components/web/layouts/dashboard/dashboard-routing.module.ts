import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {CanActivateRouteGuard} from "../../../../services/security/can-activate-route.guard";

const routes: Routes = [
    {
        path: '', component: DashboardComponent, canActivate: [CanActivateRouteGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
