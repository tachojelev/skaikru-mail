import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmailTemplate } from 'src/models/email-template';
import { TemplateService } from 'src/services/template.service';

@Component({
  selector: 'app-delete-template',
  templateUrl: './delete-template.component.html',
  styleUrls: ['./delete-template.component.scss']
})
export class DeleteTemplateComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { emailTemplate: EmailTemplate },
    private dialogRef: MatDialogRef<DeleteTemplateComponent>,
    private templateService: TemplateService) { }

  onDeleteTemplate(): void {
    this.templateService.deleteTemplate(this.data.emailTemplate.title).subscribe(
      (response: any) => { this.handleSucces(response); },
      (response: HttpErrorResponse) => { this.handleFailure(response); }
    );
  }

  onCancel(): void {
    this.dialogRef.close({ success: true, cancelClicked: true });
  }

  private handleSucces(response: EmailTemplate): void {
    this.dialogRef.close({ success: true, cancelClicked: false });
  }

  private handleFailure(response: HttpErrorResponse): void {
    this.dialogRef.close({ success: false, cancelClicked: false });
  }
}
