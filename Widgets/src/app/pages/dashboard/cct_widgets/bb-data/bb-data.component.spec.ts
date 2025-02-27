import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbDataComponent } from './bb-data.component';

describe('BbDataComponent', () => {
  let component: BbDataComponent;
  let fixture: ComponentFixture<BbDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BbDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BbDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
