import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHistoryComponent } from './view-history.component';
import { ViewHistoryRoutingModule } from './view-history-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ViewHistoryComponent],
  imports: [
    CommonModule,
    ViewHistoryRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class ViewHistoryModule { }
