import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteScanCandidateComponent } from './vote-scan-candidate.component';

describe('VoteScanCandidateComponent', () => {
  let component: VoteScanCandidateComponent;
  let fixture: ComponentFixture<VoteScanCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteScanCandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteScanCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
