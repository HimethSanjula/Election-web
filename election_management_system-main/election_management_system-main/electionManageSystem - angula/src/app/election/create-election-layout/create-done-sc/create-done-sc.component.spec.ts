import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDoneScComponent } from './create-done-sc.component';

describe('CreateDoneScComponent', () => {
  let component: CreateDoneScComponent;
  let fixture: ComponentFixture<CreateDoneScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDoneScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDoneScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
