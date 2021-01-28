import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailTemplate } from 'src/models/email-template';
import { Recipient } from 'src/models/recipient';
import { MailService } from 'src/services/mail.service';
import { EditRecipientComponent } from '../edit-recipient/edit-recipient.component';
import { PreviewComponent } from '../preview/preview.component';

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

  html = false;

  sending = false;

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
    console.log(this.html);
    this.sending = true;
    this.mailService.sendMail(this.emailTemplate, this.recipients, this.html).subscribe(
      (response: number) => { this.handleSuccess(response); },
      (response: HttpErrorResponse) => { this.handleFailure(response); }
    );
  }

  preview(): void {
    const dialogRef = this.dialog.open(PreviewComponent, {
      data: { emailTemplate: this.emailTemplate, recipients: this.recipients },
      disableClose: false,
      minWidth: 600,
      minHeight: 300,
      autoFocus: false
    });
  }

  private handleSuccess(response: number): void {
    this.sending = false;
    this.snackbar.open(`${response} message(s) sent successfully!`, null, {
      duration: 3000
    });
  }

  private handleFailure(response: HttpErrorResponse): void {
    this.sending = false;
    this.snackbar.open("ERROR when sending message!", null, {
      duration: 3000
    });
  }
}
