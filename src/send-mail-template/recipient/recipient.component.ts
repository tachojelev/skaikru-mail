import { Component, OnInit } from '@angular/core';
import { Recipient } from 'src/models/recipient';

@Component({
  selector: 'app-recipient',
  templateUrl: './recipient.component.html',
  styleUrls: ['./recipient.component.scss']
})
export class RecipientComponent implements OnInit {
  recipients: Array<Recipient> = [];

  constructor() { }

  ngOnInit(): void {
  }

  addRecipient(): void {
    
  }
}
