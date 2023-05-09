import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeScComponent } from './welcome-sc.component';

describe('WelcomeScComponent', () => {
  let component: WelcomeScComponent;
  let fixture: ComponentFixture<WelcomeScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
