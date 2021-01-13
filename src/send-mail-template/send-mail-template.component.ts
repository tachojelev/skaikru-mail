import { Component, OnInit } from '@angular/core';
import { EmailTemplate } from 'src/models/email-template';

@Component({
  selector: 'app-send-mail-template',
  templateUrl: './send-mail-template.component.html',
  styleUrls: ['./send-mail-template.component.scss']
})
export class SendMailTemplateComponent implements OnInit {
  selectedEmailTemplate: EmailTemplate;

  emailTemplates: Array<EmailTemplate> = [
    {
      title: "Template 01",
      subtitle: "templ01",
      message: "Hello there, how are you?",
      placeholders: ['email', 'name', 'age', 'favorite-color'],
      recipients: []
    },
    {
      title: "Template 02",
      subtitle: "templ02",
      message: "Hi there, how are you?",
      placeholders: ['email', 'education', 'age', 'marital-status'],
      recipients: []
    },
    {
      title: "Template 03",
      subtitle: "templ03",
      message: "Wassup there, how are you?",
      placeholders: ['email', 'name'],
      recipients: []
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  clickEmailTemplate(emailTemplate: EmailTemplate): void {
    this.selectedEmailTemplate = emailTemplate;
  }
}
