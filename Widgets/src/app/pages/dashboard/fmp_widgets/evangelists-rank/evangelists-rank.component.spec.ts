import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvangelistsRankComponent } from './evangelists-rank.component';

describe('EvangelistsRankComponent', () => {
  let component: EvangelistsRankComponent;
  let fixture: ComponentFixture<EvangelistsRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvangelistsRankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvangelistsRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
