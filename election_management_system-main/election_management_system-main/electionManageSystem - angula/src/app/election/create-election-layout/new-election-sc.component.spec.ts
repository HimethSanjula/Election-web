import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewElectionScComponent } from './new-election-sc.component';

describe('NewElectionScComponent', () => {
  let component: NewElectionScComponent;
  let fixture: ComponentFixture<NewElectionScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewElectionScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewElectionScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
