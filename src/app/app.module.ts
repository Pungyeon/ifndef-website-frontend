import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatIconModule, MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { StateService } from 'src/app/service/state.service';
import { AboutSiteComponent } from './about-site/about-site.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent, // mat-card, flexbox
    AboutSiteComponent, // mat-card, flexbox, 
    ErrorComponent // mat-card, flexbox
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, // is used by all
    HttpClientModule, // ?? maybe possible to exclude this
    MatCardModule, // EXCLUDE - FrontPage & Menu
    FlexLayoutModule, // EXCLUDE - FrontPage & Menu
    MatIconModule, // INCLUDE - about site and me, article
    MatDividerModule
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
