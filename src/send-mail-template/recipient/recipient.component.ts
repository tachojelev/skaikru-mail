import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailTemplate } from 'src/models/email-template';
import { Recipient } from 'src/models/recipient';

@Component({
  selector: 'app-recipient',
  templateUrl: './recipient.component.html',
  styleUrls: ['./recipient.component.scss']
})
export class RecipientComponent implements OnInit, OnChanges {
  @Input()
  emailTemplate: EmailTemplate;

  recipient: Recipient;

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.generateForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.emailTemplate) {
      this.generateForm();
    }
  }

  addRecipient(): void {
    if (this.formGroup.valid) {
      this.recipient = new Recipient();
      // MUST have an email placeholder
      this.recipient.email = this.formGroup.controls.email.value;
      this.recipient.placeholderValues = new Map();
      
      for (const placeholder of this.emailTemplate.placeholders) {
        this.recipient.placeholderValues.set(placeholder, this.formGroup.controls[placeholder].value);
      }

      this.emailTemplate.recipients.push(this.recipient);
      this.resetForm();
    }
  }

  private generateForm(): void {
    const form: FormGroup = this.formBuilder.group({});

    for (const placeholder of this.emailTemplate.placeholders) {
      form.addControl(
        placeholder,
        new FormControl('', [Validators.required])
      )
    }

    this.formGroup = form;
  }

  private resetForm(): void {
    this.recipient = null;
    this.formGroup.reset('');
  }
}
