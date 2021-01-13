import { Component, Input, OnInit } from '@angular/core';
import { EmailTemplate } from 'src/models/email-template';
import { Recipient } from 'src/models/recipient';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  @Input()
  emailTemplate: EmailTemplate;

  constructor() { }

  ngOnInit(): void {
  }

  remove(recipient: Recipient): void {
    const index = this.emailTemplate.recipients.indexOf(recipient);

    if (index >= 0) {
      this.emailTemplate.recipients.splice(index, 1);
    }
  }

  send(): void {
    console.log(this.emailTemplate);
  }

}
