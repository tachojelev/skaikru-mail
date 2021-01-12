import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMailTemplateComponent } from './send-mail-template.component';

describe('SendMailTemplateComponent', () => {
  let component: SendMailTemplateComponent;
  let fixture: ComponentFixture<SendMailTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMailTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
