import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewschedulesComponent } from './viewschedules.component';

describe('ViewschedulesComponent', () => {
  let component: ViewschedulesComponent;
  let fixture: ComponentFixture<ViewschedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewschedulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewschedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
