import { Component, OnInit } from '@angular/core';
import { EmailTemplate } from 'src/models/email-template';

@Component({
  selector: 'app-send-mail-template',
  templateUrl: './send-mail-template.component.html',
  styleUrls: ['./send-mail-template.component.scss']
})
export class SendMailTemplateComponent implements OnInit {
  selectedEmalTemplate: EmailTemplate;
  emailTemplates: Array<EmailTemplate> = [
    {
      title: "Template 1",
      subtitle: "subtitle 1",
      text: "text 1"
    },
    {
      title: "Template 2",
      subtitle: "subtitle 2",
      text: "text 2"
    },
    {
      title: "Template 3",
      subtitle: "subtitle 3",
      text: "text 3"
    },
    {
      title: "Template 4",
      subtitle: "subtitle 4",
      text: "text 4"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

  clickEmailTemplate(emailTemplate: EmailTemplate): void {
    this.selectedEmalTemplate = emailTemplate;
  }
}
