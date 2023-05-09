import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartiesScComponent } from './add-parties-sc.component';

describe('AddPartiesScComponent', () => {
  let component: AddPartiesScComponent;
  let fixture: ComponentFixture<AddPartiesScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPartiesScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPartiesScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
