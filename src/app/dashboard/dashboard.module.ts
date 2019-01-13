import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../_materialModule/material.module';
import { DashboardComponent } from './dashboard.component';
import { PeopleListComponent } from '../starWarsComponents/people-list/people-list.component';
import { PeopleItemComponent } from '../starWarsComponents/people-item/people-item.component';
import { FilmListComponent } from '../starWarsComponents/film-list/film-list.component';
import { FilmItemComponent } from '../starWarsComponents/film-item/film-item.component';
import { VehicleListComponent } from '../starWarsComponents/vehicle-list/vehicle-list.component';
import { VehicleItemComponent} from '../starWarsComponents/vehicle-item/vehicle-item.component';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardComponent,
    PeopleListComponent,
    PeopleItemComponent,
    FilmListComponent,
    FilmItemComponent,
    VehicleItemComponent,
    VehicleListComponent],
  declarations: [
    DashboardComponent,
    PeopleListComponent,
    PeopleItemComponent,
    FilmListComponent,
    FilmItemComponent,
    VehicleItemComponent,
    VehicleListComponent]
})
export class DashboardModule {}
