import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSnackBarModule,
  MatTooltipModule ,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatDividerModule,
  MatMenuModule ,
  MatBadgeModule,
  MatDialogModule
} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';

import {FlexLayoutModule} from '@angular/flex-layout';
 



@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatIconModule,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatMenuModule,
    MatBadgeModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatSidenavModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatMenuModule ,
    MatBadgeModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
