import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctDepartmentComponent } from './cct-department.component';

describe('CctDepartmentComponent', () => {
  let component: CctDepartmentComponent;
  let fixture: ComponentFixture<CctDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CctDepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CctDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
