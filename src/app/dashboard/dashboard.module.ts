import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../_materialModule/material.module';
import { DashboardComponent } from './dashboard.component';
import { TabsComponent } from '../starWarsComponents/tabs/tabs.component';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { DialogComponent } from '../starWarsComponents/dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material';
import { ItemComponent } from '../starWarsComponents/item/item.component';
import { ListComponent } from '../starWarsComponents/list/list.component';
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
    ItemComponent,
    ListComponent
  ],
  declarations: [
    DashboardComponent,
    DialogComponent,
    TabsComponent,
    ItemComponent,
    ListComponent
  ],
    entryComponents: [
      DialogComponent
    ]
})
export class DashboardModule {}
