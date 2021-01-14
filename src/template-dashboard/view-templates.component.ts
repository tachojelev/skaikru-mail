import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmailTemplate } from 'src/models/email-template';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { DeleteTemplateComponent } from './delete-template/delete-template.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';

@Component({
  selector: 'app-view-templates',
  templateUrl: './view-templates.component.html',
  styleUrls: ['./view-templates.component.scss']
})
export class ViewTemplatesComponent implements OnInit {

  emailTemplates: Array<EmailTemplate> = [
    {
      title: "Template 01",
      message: "Hello there, how are you?",
      placeholders: ['email', 'name', 'age', 'favorite-color']
    },
    {
      title: "Template 02",
      message: "Hi there, how are you?",
      placeholders: ['email', 'education', 'age', 'marital-status']
    },
    {
      title: "Template 03",
      message: "Wassup there, how are you?",
      placeholders: ['email', 'name']
    }
  ];

  // emailTemplates: Array<EmailTemplate> = [];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    // for (let index = 0; index < 100; index++) {
    //   this.emailTemplates.push(
    //     {
    //       title: "Template 03",
    //       message: "Wassup there, how are you?",
    //       placeholders: ['email', 'name']
    //     }
    //   );      
    // }
  }

  onCreateTemplate(): void {
    const dialogRef = this.dialog.open(CreateTemplateComponent, {
      data: { },
      disableClose: true,
      width: '700px',
      minHeight: 500,
      maxHeight: 800,
      autoFocus: false
    });
  }

  onEditTemplate(emailTemplate: EmailTemplate): void {
    const dialogRef = this.dialog.open(EditTemplateComponent, {
      data: { emailTemplate: emailTemplate },
      disableClose: true,
      width: '700px',
      minHeight: 500,
      maxHeight: 800,
      autoFocus: false
    });
  }

  onDeleteTemplate(emailTemplate: EmailTemplate): void {
    const dialogRef = this.dialog.open(DeleteTemplateComponent, {
      data: { emailTemplate: emailTemplate },
      disableClose: true,
      width: '500px',
      minHeight: 200,
      maxHeight: 800,
      autoFocus: false
    });
  }
}
