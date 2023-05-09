import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserScComponent } from './add-user-sc.component';

describe('AddUserScComponent', () => {
  let component: AddUserScComponent;
  let fixture: ComponentFixture<AddUserScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
