import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatDividerModule,
  MatCardModule, MatToolbarModule, MatIconModule,
  MatMenuModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ArticlesComponent } from './articles/articles.component';

import { AppRoutingModule } from './app-routing.module';
import { ArticleComponent } from './article/article.component';
import { HttpClientModule } from '@angular/common/http';

import { NgxMdModule } from 'ngx-md';
import { StateService } from 'src/app/service/state.service';
import { AboutSiteComponent } from './about-site/about-site.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    ArticlesComponent,
    ArticleComponent,
    AboutSiteComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatMenuModule, // is used by all
    MatButtonModule, // is used by all
    MatToolbarModule, // is used by all
    HttpClientModule, // ?? maybe possible to exclude this
    MatCardModule, // EXCLUDE - FrontPage & Menu
    FlexLayoutModule, // EXCLUDE - FrontPage & Menu
    MatIconModule, // INCLUDE - about site and me
    MatDividerModule, // INCLUDE - HOME & ABOUT ME
    NgxMdModule.forRoot()
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
