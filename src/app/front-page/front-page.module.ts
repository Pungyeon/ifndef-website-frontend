import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontPageComponent } from './front-page.component';

import { MatButtonModule } from '@angular/material';
import { FrontPageRoutingModule } from './front-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FrontPageRoutingModule,
    MatButtonModule
  ],
  declarations: [FrontPageComponent]
})
export class FrontPageModule { }