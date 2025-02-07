import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGroupsComponent } from './top-groups.component';

describe('TopGroupsComponent', () => {
  let component: TopGroupsComponent;
  let fixture: ComponentFixture<TopGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopGroupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
