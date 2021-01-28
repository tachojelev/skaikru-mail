import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendMailTemplateComponent } from './send-mail-template.component';
import { SendMailTemplateRoutingModule } from './send-mail-template-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EmailComponent } from './email/email.component';
import { RecipientComponent } from './recipient/recipient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRecipientComponent } from './edit-recipient/edit-recipient.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [SendMailTemplateComponent, EmailComponent, RecipientComponent, EditRecipientComponent, PreviewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SendMailTemplateRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ]
})
export class SendMailTemplateModule { }
