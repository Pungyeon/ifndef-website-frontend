import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule, MatCardModule, MatDividerModule,
  MatToolbarModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { StateService } from 'src/app/service/state.service';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
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
    MatDividerModule, ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
