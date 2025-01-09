import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WigetComponent } from './wiget.component';

describe('WigetComponent', () => {
  let component: WigetComponent;
  let fixture: ComponentFixture<WigetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WigetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WigetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
