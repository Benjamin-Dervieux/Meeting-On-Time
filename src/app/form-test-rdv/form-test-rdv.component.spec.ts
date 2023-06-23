import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTestRdvComponent } from './form-test-rdv.component';

describe('FormTestRdvComponent', () => {
  let component: FormTestRdvComponent;
  let fixture: ComponentFixture<FormTestRdvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTestRdvComponent]
    });
    fixture = TestBed.createComponent(FormTestRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
