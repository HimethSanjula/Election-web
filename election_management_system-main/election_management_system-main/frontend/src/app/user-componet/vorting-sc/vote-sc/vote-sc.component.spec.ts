import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteScComponent } from './vote-sc.component';

describe('VoteScComponent', () => {
  let component: VoteScComponent;
  let fixture: ComponentFixture<VoteScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
