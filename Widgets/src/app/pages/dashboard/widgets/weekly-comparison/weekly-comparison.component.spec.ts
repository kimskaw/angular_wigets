import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyComparisonComponent } from './weekly-comparison.component';

describe('WeeklyComparisonComponent', () => {
  let component: WeeklyComparisonComponent;
  let fixture: ComponentFixture<WeeklyComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeeklyComparisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
