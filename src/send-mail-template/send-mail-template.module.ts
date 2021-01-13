import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendMailTemplateComponent } from './send-mail-template.component';
import { SendMailTemplateRoutingModule } from './send-mail-template-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EmailComponent } from './email/email.component';
import { RecipientComponent } from './recipient/recipient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SendMailTemplateComponent, EmailComponent, RecipientComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SendMailTemplateRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SendMailTemplateModule { }
