import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ErrorComponent } from 'src/app/error/error.component';
import { ErrorRoutingModule } from './error-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ErrorRoutingModule,
    FlexLayoutModule,
    MatCardModule
  ],
  declarations: [ErrorComponent]
})
export class ArticleModule { }