import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VWelcomeComponent } from './v-welcome.component';

describe('VWelcomeComponent', () => {
  let component: VWelcomeComponent;
  let fixture: ComponentFixture<VWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
