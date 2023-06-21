import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdminCreateRdvComponent } from './form-admin-create-rdv.component';

describe('FormAdminCreateRdvComponent', () => {
  let component: FormAdminCreateRdvComponent;
  let fixture: ComponentFixture<FormAdminCreateRdvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAdminCreateRdvComponent]
    });
    fixture = TestBed.createComponent(FormAdminCreateRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
