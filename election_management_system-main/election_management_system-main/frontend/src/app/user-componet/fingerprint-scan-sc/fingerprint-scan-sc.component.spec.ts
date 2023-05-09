import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerprintScanScComponent } from './fingerprint-scan-sc.component';

describe('FingerprintScanScComponent', () => {
  let component: FingerprintScanScComponent;
  let fixture: ComponentFixture<FingerprintScanScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FingerprintScanScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FingerprintScanScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
