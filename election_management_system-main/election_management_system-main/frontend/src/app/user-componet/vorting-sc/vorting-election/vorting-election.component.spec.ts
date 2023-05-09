import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VortingElectionComponent } from './vorting-election.component';

describe('VortingElectionComponent', () => {
  let component: VortingElectionComponent;
  let fixture: ComponentFixture<VortingElectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VortingElectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VortingElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
