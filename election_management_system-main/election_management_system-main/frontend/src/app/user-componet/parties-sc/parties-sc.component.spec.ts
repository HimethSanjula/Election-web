import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiesScComponent } from './parties-sc.component';

describe('PartiesScComponent', () => {
  let component: PartiesScComponent;
  let fixture: ComponentFixture<PartiesScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartiesScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartiesScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
