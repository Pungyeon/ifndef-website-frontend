import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './about-me.component';

import {
    MatChipsModule, MatExpansionModule, MatCardModule, MatDividerModule 
    } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AboutMeRoutingModule,
    MatChipsModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule
  ],
  declarations: [AboutMeComponent]
})
export class AboutMeModule { }