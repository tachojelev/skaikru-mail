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

  @Input()
  recipients: Array<Recipient>;

  currentRecipient: Recipient;

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
      this.currentRecipient = new Recipient();
      /* MUST have an email. */
      this.currentRecipient.email = this.formGroup.controls.recipientEmail.value;
      this.currentRecipient.placeholders = new Map();

      for (const placeholder of this.emailTemplate.placeholders) {
        this.currentRecipient.placeholders.set(placeholder, this.formGroup.controls[placeholder].value);
      }

      this.recipients.push(this.currentRecipient);
      this.resetForm();
    }
  }

  private generateForm(): void {
    const form: FormGroup = this.formBuilder.group({});

    /* MUST have an email. */
    form.addControl('recipientEmail', new FormControl('', [Validators.required, Validators.email]));

    for (const placeholder of this.emailTemplate.placeholders) {
      const formControl = new FormControl('', [Validators.required]);
      form.addControl(placeholder, formControl)
    }

    this.formGroup = form;
  }

  private resetForm(): void {
    this.currentRecipient = null;
    this.formGroup.reset('');
  }
}
