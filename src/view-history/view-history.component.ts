import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailRecord } from 'src/models/email-record';
import { MailService } from 'src/services/mail.service';

@Component({
  selector: 'app-view-history',
  templateUrl: './view-history.component.html',
  styleUrls: ['./view-history.component.scss']
})
export class ViewHistoryComponent implements OnInit {

  emailRecords: Array<EmailRecord> = [];

  constructor(private templateService: MailService) { }

  ngOnInit(): void {
    this.fetchHistory();
  }

  fetchHistory(): void {
    this.templateService.getHistory().subscribe(
      (response: Array<EmailRecord>) => { this.handleSuccess(response) },
      (response: HttpErrorResponse) => { this.handleFailure(response) }
      );
  }

  
  private handleSuccess(response: Array<EmailRecord>): void {
    this.emailRecords = response; 
  }

  private handleFailure(response: HttpErrorResponse): void {
    console.error(response);
  }
}
