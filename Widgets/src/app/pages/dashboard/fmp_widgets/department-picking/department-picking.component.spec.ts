import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentPickingComponent } from './department-picking.component';

describe('DepartmentPickingComponent', () => {
  let component: DepartmentPickingComponent;
  let fixture: ComponentFixture<DepartmentPickingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartmentPickingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentPickingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
