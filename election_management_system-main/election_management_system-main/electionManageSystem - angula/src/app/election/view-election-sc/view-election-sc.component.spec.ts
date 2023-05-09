import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewElectionScComponent } from './view-election-sc.component';

describe('ViewElectionScComponent', () => {
  let component: ViewElectionScComponent;
  let fixture: ComponentFixture<ViewElectionScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewElectionScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewElectionScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
