import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmailTemplate } from 'src/models/email-template';

@Component({
  selector: 'app-delete-template',
  templateUrl: './delete-template.component.html',
  styleUrls: ['./delete-template.component.scss']
})
export class DeleteTemplateComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { emailTemplate: EmailTemplate },
    private dialogRef: MatDialogRef<DeleteTemplateComponent>,) { }

  onDeleteTemplate(): void {
    // CREATE DELETE REQ TO DELETE TEMPLATE AND CLOSE DIALOG ON SUCCESS

    this.dialogRef.close({});
  }
}
