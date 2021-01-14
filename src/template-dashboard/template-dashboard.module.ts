import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SendMailTemplateRoutingModule } from 'src/send-mail-template/send-mail-template-routing.module';
import { ViewTemplatesComponent } from './view-templates.component';
import { TemplateDashboardRoutingModule } from './create-mail-template-routing.module';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { DeleteTemplateComponent } from './delete-template/delete-template.component';

@NgModule({
  declarations: [ViewTemplatesComponent, CreateTemplateComponent, EditTemplateComponent, DeleteTemplateComponent],
  imports: [
    CommonModule,
    TemplateDashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SendMailTemplateRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatDialogModule
  ]
})
export class TemplateDashboardModule { }
