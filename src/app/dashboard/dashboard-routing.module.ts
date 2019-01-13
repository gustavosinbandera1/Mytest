import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PeopleItemComponent } from '../starWarsComponents/people-item/people-item.component';
import { PeopleListComponent } from '../starWarsComponents/people-list/people-list.component';
import { FilmItemComponent } from '../starWarsComponents/film-item/film-item.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      /*{
        path: 'peoplelist/:id',
        component: PeopleItemComponent
      },*/
      {
        path: 'peoplelist',
        component: PeopleListComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
