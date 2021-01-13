import { Component, OnInit } from '@angular/core';
import { EmailRequest } from 'src/models/email-request';
import { EmailTemplate } from 'src/models/email-template';
import { Recipient } from 'src/models/recipient';

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

  recipients: Array<Recipient> = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClickEmailTemplate(emailTemplate: EmailTemplate): void {
    if (emailTemplate !== this.selectedEmailTemplate) {
      this.selectedEmailTemplate = emailTemplate;
      this.recipients = [];
    }
  }
}
