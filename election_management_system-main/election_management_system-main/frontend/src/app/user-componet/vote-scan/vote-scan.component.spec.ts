import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteScanComponent } from './vote-scan.component';

describe('VoteScanComponent', () => {
  let component: VoteScanComponent;
  let fixture: ComponentFixture<VoteScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteScanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
