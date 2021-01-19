import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmailTemplate } from 'src/models/email-template';
import { TemplateService } from 'src/services/template-service.service';

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
    private dialogRef: MatDialogRef<CreateTemplateComponent>,
    private templateService: TemplateService) { }

  ngOnInit(): void {
    this.generateForm();
  }

  onCreateTemplate(): void {
    const emailTemplate = new EmailTemplate();
    emailTemplate.title = this.formGroup.controls['title'].value;
    emailTemplate.message = this.formGroup.controls['message'].value;
    emailTemplate.placeholders = [];

    this.templateService.addTemplate(emailTemplate).subscribe(
      (response: EmailTemplate) => { this.handleSucces(response); },
      (response: HttpErrorResponse) => { this.handleFailure(response); }
    );
  }

  onCancel(): void {
    this.dialogRef.close({ success: true, cancelClicked: true });
  }

  private generateForm(): void {
    const form: FormGroup = this.formBuilder.group({});

    form.addControl('title', new FormControl('', [Validators.required]));
    form.addControl('message', new FormControl('', [Validators.required]));

    this.formGroup = form;
  }

  private handleSucces(response: EmailTemplate): void {
    this.dialogRef.close({ success: true, cancelClicked: false });
  }

  private handleFailure(response: HttpErrorResponse): void {
    this.dialogRef.close({ success: false, cancelClicked: false });
  }
}
