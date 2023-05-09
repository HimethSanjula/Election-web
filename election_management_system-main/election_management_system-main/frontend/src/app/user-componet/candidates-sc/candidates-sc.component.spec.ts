import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesScComponent } from './candidates-sc.component';

describe('CandidatesScComponent', () => {
  let component: CandidatesScComponent;
  let fixture: ComponentFixture<CandidatesScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
