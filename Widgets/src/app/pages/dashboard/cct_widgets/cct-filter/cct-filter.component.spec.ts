import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctFilterComponent } from './cct-filter.component';

describe('CctFilterComponent', () => {
  let component: CctFilterComponent;
  let fixture: ComponentFixture<CctFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CctFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CctFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
