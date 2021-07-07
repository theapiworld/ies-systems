import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/security/login/login.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'dashboard/principal', loadChildren: () => import('./components/web/layouts/dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
