import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiesHistoryComponent } from './parties-history.component';

describe('PartiesHistoryComponent', () => {
  let component: PartiesHistoryComponent;
  let fixture: ComponentFixture<PartiesHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartiesHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartiesHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
