import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../_materialModule/material.module';
import { DashboardComponent } from './dashboard.component';
import { PeopleListComponent } from '../starWarsComponents/people-list/people-list.component';
import { PeopleItemComponent } from '../starWarsComponents/people-item/people-item.component';
import { FilmListComponent } from '../starWarsComponents/film-list/film-list.component';
import { FilmItemComponent } from '../starWarsComponents/film-item/film-item.component';
import { VehicleListComponent } from '../starWarsComponents/vehicle-list/vehicle-list.component';
import { VehicleItemComponent} from '../starWarsComponents/vehicle-item/vehicle-item.component';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { DialogComponent } from '../starWarsComponents/dialog/dialog.component';
import { MatFormFieldModule, MatDialogConfig } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    DashboardRoutingModule,
    MatFormFieldModule
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
    VehicleListComponent,
    DialogComponent],
    entryComponents: [
      DialogComponent
    ]
})
export class DashboardModule {}
