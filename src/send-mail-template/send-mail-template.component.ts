import { Component, OnInit } from '@angular/core';
import { EmailTemplate } from 'src/models/email-template';
import { Recipient } from 'src/models/recipient';
import { TemplateService } from 'src/services/template-service.service';

@Component({
  selector: 'app-send-mail-template',
  templateUrl: './send-mail-template.component.html',
  styleUrls: ['./send-mail-template.component.scss']
})
export class SendMailTemplateComponent implements OnInit {
  emailTemplates: Array<EmailTemplate> = [];

  selectedEmailTemplate: EmailTemplate;

  recipients: Array<Recipient> = [];

  constructor(private templateService: TemplateService) { }

  ngOnInit(): void {
    this.templateService.getTemplates().subscribe((response: Array<EmailTemplate>) => {
      this.emailTemplates = response;
    });
  }

  onClickEmailTemplate(emailTemplate: EmailTemplate): void {
    if (emailTemplate !== this.selectedEmailTemplate) {
      this.selectedEmailTemplate = emailTemplate;
      this.recipients = [];
    }
  }
}
