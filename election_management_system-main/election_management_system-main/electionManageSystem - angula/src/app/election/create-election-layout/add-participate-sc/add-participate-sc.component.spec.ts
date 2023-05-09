import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParticipateScComponent } from './add-participate-sc.component';

describe('AddParticipateScComponent', () => {
  let component: AddParticipateScComponent;
  let fixture: ComponentFixture<AddParticipateScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddParticipateScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddParticipateScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
