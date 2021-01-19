import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailTemplate } from 'src/models/email-template';
import { Recipient } from 'src/models/recipient';
import { SendMailRequest } from 'src/models/send-mail-request';
import { MailService } from 'src/services/mail.service';
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

  constructor(
    private dialog: MatDialog,
    private mailService: MailService,
    private snackbar: MatSnackBar) { }

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
    const sendMailRequest = new SendMailRequest();
    sendMailRequest.title = this.emailTemplate.title;
    sendMailRequest.message = this.emailTemplate.message;
    sendMailRequest.placeholders = this.emailTemplate.placeholders;
    sendMailRequest.recipients = this.recipients;

    this.mailService.sendMail(sendMailRequest).subscribe(
      (response: number) => { this.handleSuccess(response); },
      (response: HttpErrorResponse) => { this.handleFailure(response); }
    );
  }

  private handleSuccess(response: number): void {
    this.snackbar.open("Message sent successfully!", null, {
      duration: 3000
    });
  }

  private handleFailure(response: HttpErrorResponse): void {
    this.snackbar.open("ERROR when sending message!", null, {
      duration: 3000
    });
  }
}
