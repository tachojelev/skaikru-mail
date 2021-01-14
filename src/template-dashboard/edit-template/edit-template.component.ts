import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmailTemplate } from 'src/models/email-template';

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.scss']
})
export class EditTemplateComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { emailTemplate: EmailTemplate },
    private dialogRef: MatDialogRef<EditTemplateComponent>,) { }

  ngOnInit(): void {
    this.generateForm();
  }

  private generateForm(): void {
    const form: FormGroup = this.formBuilder.group({});

    form.addControl('title', new FormControl(this.data.emailTemplate.title, [Validators.required]));
    form.addControl('message', new FormControl(this.data.emailTemplate.message, [Validators.required]));

    this.formGroup = form;
  }

  onSaveTemplate(): void {
    // CREATE NEW EMAIL TEMPLATE
    const emailTemplate = new EmailTemplate();
    emailTemplate.title = this.formGroup.controls['title'].value;
    emailTemplate.message = this.formGroup.controls['message'].value;
    
    // CREATE PUT TO REPLACE OLD TEMPLATE AND CLOSE DIALOG ON SUCCESS

    this.dialogRef.close({});
  }
}
