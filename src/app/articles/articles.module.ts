import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ArticlesRoutingModule } from 'src/app/articles/articles-routing.module';
import { ArticlesComponent } from './articles.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ArticlesRoutingModule,
    MatCardModule
  ],
  declarations: [ArticlesComponent]
})
export class ArticlesModule { }