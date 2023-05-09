import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionHistoryComponent } from './election-history.component';

describe('ElectionHistoryComponent', () => {
  let component: ElectionHistoryComponent;
  let fixture: ComponentFixture<ElectionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
