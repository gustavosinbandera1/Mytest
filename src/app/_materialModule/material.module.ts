import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule,
  MatDialogModule,
  MatFormFieldModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
  ]
})
 export class MaterialModule {}
