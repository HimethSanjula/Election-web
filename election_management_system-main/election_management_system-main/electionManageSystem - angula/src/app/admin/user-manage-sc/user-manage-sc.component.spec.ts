import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManageScComponent } from './user-manage-sc.component';

describe('UserManageScComponent', () => {
  let component: UserManageScComponent;
  let fixture: ComponentFixture<UserManageScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManageScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManageScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
