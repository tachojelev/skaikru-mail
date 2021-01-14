import { Component, OnInit } from '@angular/core';
import { EmailTemplate } from 'src/models/email-template';

@Component({
  selector: 'app-view-templates',
  templateUrl: './view-templates.component.html',
  styleUrls: ['./view-templates.component.scss']
})
export class ViewTemplatesComponent implements OnInit {

  emailTemplates: Array<EmailTemplate> = [
    {
      title: "Template 01",
      message: "Hello there, how are you?",
      placeholders: ['email', 'name', 'age', 'favorite-color']
    },
    {
      title: "Template 02",
      message: "Hi there, how are you?",
      placeholders: ['email', 'education', 'age', 'marital-status']
    },
    {
      title: "Template 03",
      message: "Wassup there, how are you?",
      placeholders: ['email', 'name']
    }
  ];

  // emailTemplates: Array<EmailTemplate> = [];

  constructor() { }

  ngOnInit(): void {
    // for (let index = 0; index < 100; index++) {
    //   this.emailTemplates.push(
    //     {
    //       title: "Template 03",
    //       message: "Wassup there, how are you?",
    //       placeholders: ['email', 'name']
    //     }
    //   );      
    // }
  }
}
