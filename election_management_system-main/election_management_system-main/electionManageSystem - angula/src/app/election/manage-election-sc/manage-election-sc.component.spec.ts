import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageElectionScComponent } from './manage-election-sc.component';

describe('ManageElectionScComponent', () => {
  let component: ManageElectionScComponent;
  let fixture: ComponentFixture<ManageElectionScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageElectionScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageElectionScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
