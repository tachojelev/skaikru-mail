import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailTemplate } from 'src/models/email-template';
import { SkaikruApi } from '../api/skaikru-api';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  constructor(private httpClient: HttpClient) { }

  getTemplates(): Observable<Array<EmailTemplate>> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.httpClient.get<Array<EmailTemplate>>(SkaikruApi.FETCH_TEMPLATES, { headers });
  }

  addTemplate(emailTemplateRequest: EmailTemplate): Observable<EmailTemplate> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.httpClient.post<EmailTemplate>(SkaikruApi.ADD_TEMPLATE, emailTemplateRequest, { headers });
  }
}
