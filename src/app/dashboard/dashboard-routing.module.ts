import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PeopleItemComponent } from '../starWarsComponents/people-item/people-item.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'people',
        component: PeopleItemComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
