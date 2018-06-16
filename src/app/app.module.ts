import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatToolbarModule, MatGridListModule, MatIconModule, MatChipsModule, MatExpansionModule, MatListModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TagComponent } from './tag/tag.component';
import { ArticlesComponent } from './articles/articles.component';

import { AppRoutingModule } from './app-routing.module';
import { ArticleComponent } from './article/article.component';
import { HttpClientModule } from '@angular/common/http';

import { NgxMdModule } from 'ngx-md';
import { StateService } from 'src/app/service/state.service';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    AboutMeComponent,
    TagComponent,
    ArticlesComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    FlexLayoutModule,
    MatIconModule,
    MatBadgeModule,
    MatChipsModule,
    MatExpansionModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMdModule.forRoot()
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
