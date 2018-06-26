import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatProgressSpinnerModule, MatButtonModule, MatCardModule, MatToolbarModule,
  MatGridListModule, MatIconModule,
  MatListModule, MatMenuModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
// import { AboutMeComponent } from './about-me/about-me.component';
import { TagComponent } from './tag/tag.component';
import { ArticlesComponent } from './articles/articles.component';

import { AppRoutingModule } from './app-routing.module';
import { ArticleComponent } from './article/article.component';
import { HttpClientModule } from '@angular/common/http';

import { NgxMdModule } from 'ngx-md';
import { StateService } from 'src/app/service/state.service';
import { TestComponent } from './test/test.component';
import { AboutSiteComponent } from './about-site/about-site.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    TagComponent,
    ArticlesComponent,
    ArticleComponent,
    TestComponent,
    AboutSiteComponent,
    ErrorComponent
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
    MatListModule,
    MatMenuModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    NgxMdModule.forRoot()
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
