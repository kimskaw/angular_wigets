import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctConversionComponent } from './cct-conversion.component';

describe('CctConversionComponent', () => {
  let component: CctConversionComponent;
  let fixture: ComponentFixture<CctConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CctConversionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CctConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
