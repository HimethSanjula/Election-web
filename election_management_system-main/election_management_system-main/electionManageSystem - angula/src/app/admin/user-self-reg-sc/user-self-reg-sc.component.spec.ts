import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSelfRegScComponent } from './user-self-reg-sc.component';

describe('UserSelfRegScComponent', () => {
  let component: UserSelfRegScComponent;
  let fixture: ComponentFixture<UserSelfRegScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSelfRegScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSelfRegScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
