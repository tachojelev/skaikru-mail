import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmailTemplate } from 'src/models/email-template';
import { Recipient } from 'src/models/recipient';
import { EditRecipientComponent } from '../edit-recipient/edit-recipient.component';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  @Input()
  emailTemplate: EmailTemplate;

  @Input()
  recipients: Array<Recipient>;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  removeRecipient(recipient: Recipient): void {
    const index = this.recipients.indexOf(recipient);

    if (index >= 0) {
      this.recipients.splice(index, 1);
    }
  }

  editRecipient(recipient: Recipient): void {
    const dialogRef = this.dialog.open(EditRecipientComponent, {
      data: { recipient: recipient },
      disableClose: true,
      minWidth: 400,
      minHeight: 300,
      autoFocus: false
    });
  }

  send(): void {
    console.log(this.emailTemplate);
    console.log(this.recipients);
    // Build request and send to BE
  }
}
