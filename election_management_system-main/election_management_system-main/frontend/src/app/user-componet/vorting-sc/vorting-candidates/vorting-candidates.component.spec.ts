import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VortingCandidatesComponent } from './vorting-candidates.component';

describe('VortingCandidatesComponent', () => {
  let component: VortingCandidatesComponent;
  let fixture: ComponentFixture<VortingCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VortingCandidatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VortingCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
