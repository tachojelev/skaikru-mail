import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmailTemplate } from 'src/models/email-template';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {  },
    private dialogRef: MatDialogRef<CreateTemplateComponent>,) { }

  ngOnInit(): void {
    this.generateForm();
  }

  private generateForm(): void {
    const form: FormGroup = this.formBuilder.group({});

    form.addControl('title', new FormControl('', [Validators.required]));
    form.addControl('message', new FormControl('', [Validators.required]));


    this.formGroup = form;
  }

  onCreateTemplate(): void {
    const emailTemplate = new EmailTemplate();
    emailTemplate.title = this.formGroup.controls['title'].value;
    emailTemplate.message = this.formGroup.controls['message'].value;
    
    // CREATE POST AND CLOSE DIALOG ON SUCCESS

    this.dialogRef.close({});
  }
}
