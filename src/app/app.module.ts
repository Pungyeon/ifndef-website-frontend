import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule, MatCardModule,
  MatIconModule, MatDividerModule, MatToolbarModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { StateService } from 'src/app/service/state.service';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { AboutSiteComponent } from './about-site/about-site.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutSiteComponent, // mat-card, flexbox, 
    ErrorComponent, // mat-card, flexbox
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, // is used by all
    MatToolbarModule, // is used by all
    MatMenuModule, // is used by all
    HttpClientModule, // ?? maybe possible to exclude this
    MatCardModule, // EXCLUDE - FrontPage & Menu
    FlexLayoutModule, // EXCLUDE - FrontPage & Menu
    MatIconModule, // INCLUDE - about site and me, article
    MatDividerModule,
    MatButtonModule
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
