import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmailTemplate } from 'src/models/email-template';
import { PreviewRecipientEmail } from 'src/models/preview-recipient-email';
import { Recipient } from 'src/models/recipient';
import { MailService } from 'src/services/mail.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  previewRecipientEmails: Array<PreviewRecipientEmail>;
  isLoading = false;

  constructor(
    private mailService: MailService,
    @Inject(MAT_DIALOG_DATA) public data: { emailTemplate: EmailTemplate, recipients: Array<Recipient> }) { }


  ngOnInit(): void {
    this.preview();
  }

  preview(): void {
    this.isLoading = true;
    this.mailService.previewMail(this.data.emailTemplate, this.data.recipients).subscribe(
      (response: Array<PreviewRecipientEmail>) => { this.handleSuccess(response); },
      (response: HttpErrorResponse) => { this.handleFailure(response); }
    );
  }

  private handleSuccess(response: Array<PreviewRecipientEmail>): void {
    this.previewRecipientEmails = response;
    this.isLoading = false;
    console.log(this.previewRecipientEmails);
  }

  private handleFailure(response: HttpErrorResponse): void {
    this.isLoading = false;
    console.error(response);
  }
}
