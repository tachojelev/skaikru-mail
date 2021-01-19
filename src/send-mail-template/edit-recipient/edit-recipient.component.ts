import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recipient } from 'src/models/recipient';

@Component({
  selector: 'app-edit-recipient',
  templateUrl: './edit-recipient.component.html',
  styleUrls: ['./edit-recipient.component.scss']
})
export class EditRecipientComponent {
  keys: Array<string> = Array.from(this.data.recipient.placeholders.keys());

  constructor(@Inject(MAT_DIALOG_DATA) public data: { recipient: Recipient }) { }

  placeholderValueChange(key, event) {
    this.data.recipient.placeholders.set(key, event);
  }
}
