import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminScComponent } from './add-admin-sc.component';

describe('AddAdminScComponent', () => {
  let component: AddAdminScComponent;
  let fixture: ComponentFixture<AddAdminScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdminScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdminScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
