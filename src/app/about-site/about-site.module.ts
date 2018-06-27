import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutSiteRoutingModule } from 'src/app/about-site/about-site-routing.module';
import { AboutSiteComponent } from './about-site.component';

@NgModule({
  imports: [
    CommonModule,
    AboutSiteRoutingModule,
    FlexLayoutModule,
    MatCardModule
  ],
  declarations: [AboutSiteComponent]
})
export class AboutSiteModule { }