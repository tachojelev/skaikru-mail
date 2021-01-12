import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendMailTemplateComponent } from './send-mail-template.component';
import { SendMailTemplateRoutingModule } from './send-mail-template-routing.module';

@NgModule({
  declarations: [SendMailTemplateComponent],
  imports: [
    CommonModule,
    SendMailTemplateRoutingModule
  ]
})
export class SendMailTemplateModule { }
