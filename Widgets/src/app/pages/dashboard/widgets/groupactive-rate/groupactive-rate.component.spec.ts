import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupactiveRateComponent } from './groupactive-rate.component';

describe('GroupactiveRateComponent', () => {
  let component: GroupactiveRateComponent;
  let fixture: ComponentFixture<GroupactiveRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupactiveRateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupactiveRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
