import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VortingPartiesComponent } from './vorting-parties.component';

describe('VortingPartiesComponent', () => {
  let component: VortingPartiesComponent;
  let fixture: ComponentFixture<VortingPartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VortingPartiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VortingPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
