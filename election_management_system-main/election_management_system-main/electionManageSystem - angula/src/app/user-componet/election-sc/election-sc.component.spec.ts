import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionScComponent } from './election-sc.component';

describe('ElectionScComponent', () => {
  let component: ElectionScComponent;
  let fixture: ComponentFixture<ElectionScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectionScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
