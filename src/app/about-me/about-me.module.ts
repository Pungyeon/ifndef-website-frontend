import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './about-me.component';

import {
    MatChipsModule, MatExpansionModule, MatCardModule, MatDividerModule 
    } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    MatChipsModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule
  ],
  declarations: [AboutMeComponent]
})
export class AboutMeModule { }