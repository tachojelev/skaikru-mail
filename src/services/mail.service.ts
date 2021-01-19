import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkaikruApi } from 'src/api/skaikru-api';
import { SendMailRequest } from 'src/models/send-mail-request';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpClient: HttpClient) { }

  sendMail(sendMailRequest: SendMailRequest): Observable<number> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.httpClient.post<number>(SkaikruApi.SEND_MAILS, sendMailRequest, { headers });
  }
}
