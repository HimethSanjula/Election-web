import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionDetailsScComponent } from './election-details-sc.component';

describe('ElectionDetailsScComponent', () => {
  let component: ElectionDetailsScComponent;
  let fixture: ComponentFixture<ElectionDetailsScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionDetailsScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectionDetailsScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
