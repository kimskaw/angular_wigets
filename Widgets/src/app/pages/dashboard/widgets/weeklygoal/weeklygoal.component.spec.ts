import { ComponentFixture, TestBed } from '@angular/core/testing';

import { weeklygoalComponent } from './weeklygoal.component';

describe('weeklygoalComponent', () => {
  let component: weeklygoalComponent;
  let fixture: ComponentFixture<weeklygoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [weeklygoalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(weeklygoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
