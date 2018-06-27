import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatToolbarModule, MatMenuModule } from '@angular/material';
import { ToolbarRoutingModule } from 'src/app/toolbar/toolbar-routing.module';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    ToolbarRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule
  ],
  declarations: [ToolbarComponent]
})
export class ToolbarModule { }