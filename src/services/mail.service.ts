import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkaikruApi } from 'src/api/skaikru-api';
import { EmailTemplate } from 'src/models/email-template';
import { Recipient } from 'src/models/recipient';
import { RecipientRequest } from 'src/models/recipient-request';
import { SendMailRequest } from 'src/models/send-mail-request';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpClient: HttpClient) { }

  sendMail(emailTemplate: EmailTemplate, recipients: Array<Recipient>): Observable<number> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    const payload = this.buildSendMailRequest(emailTemplate, recipients);

    return this.httpClient.post<number>(SkaikruApi.SEND_MAILS, payload, { headers });
  }

  private buildSendMailRequest(emailTemplate: EmailTemplate, recipients: Array<Recipient>): SendMailRequest {
    const sendMailRequest = new SendMailRequest();
    sendMailRequest.title = emailTemplate.title;
    sendMailRequest.message = emailTemplate.message;
    sendMailRequest.placeholders = emailTemplate.placeholders;
    sendMailRequest.recipients = this.buildRecipientRequests(recipients);

    return sendMailRequest;
  }

  private buildRecipientRequests(recipients: Array<Recipient>): Array<RecipientRequest> {
    return recipients.map((recipient: Recipient) => this.buildRecipientRequest(recipient));
  }

  private buildRecipientRequest(recipient: Recipient): RecipientRequest {
    if (recipient == null) {
      return null;
    }

    const convertedMap = {};
    recipient.placeholders.forEach((val: string, key: string) => {
      convertedMap[key] = val;
    });

    const recipientRequest = new RecipientRequest();
    recipientRequest.email = recipient.email;
    recipientRequest.placeholders = convertedMap;

    return recipientRequest;
  }
}
