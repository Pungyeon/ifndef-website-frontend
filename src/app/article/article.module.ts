import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxMdModule } from 'ngx-md';
import { ArticleRoutingModule } from 'src/app/article/article-routing.module';
import { ArticleComponent } from './article.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ArticleRoutingModule,
    MatIconModule,
    MatCardModule,
    NgxMdModule.forRoot()
  ],
  declarations: [ArticleComponent]
})
export class ArticleModule { }