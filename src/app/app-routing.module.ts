import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
 /*  { path: 'home', loadChildren: './home/home.module#HomePageModule' }, */
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  /*{path: '', component: DashboardComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
