import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbookedticketsComponent } from './viewbookedtickets.component';

describe('ViewbookedticketsComponent', () => {
  let component: ViewbookedticketsComponent;
  let fixture: ComponentFixture<ViewbookedticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbookedticketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewbookedticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
