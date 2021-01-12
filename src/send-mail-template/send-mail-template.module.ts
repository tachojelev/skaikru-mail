import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendMailTemplateComponent } from './send-mail-template.component';
import { SendMailTemplateRoutingModule } from './send-mail-template-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [SendMailTemplateComponent],
  imports: [
    CommonModule,
    SendMailTemplateRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class SendMailTemplateModule { }
