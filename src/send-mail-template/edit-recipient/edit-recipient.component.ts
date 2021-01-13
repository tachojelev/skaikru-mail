import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recipient } from 'src/models/recipient';

@Component({
  selector: 'app-edit-recipient',
  templateUrl: './edit-recipient.component.html',
  styleUrls: ['./edit-recipient.component.scss']
})
export class EditRecipientComponent {
  keys: Array<string> = Array.from(this.data.recipient.placeholderValues.keys());

  constructor(@Inject(MAT_DIALOG_DATA) public data: { recipient: Recipient }) { }

  placeholderValueChange(key, event) {
    this.data.recipient.placeholderValues.set(key, event);
    if (key === 'email') {
      this.data.recipient.email = this.data.recipient.placeholderValues.get('email');
    }
  }
}
