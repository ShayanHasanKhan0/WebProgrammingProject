import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewticketdetailComponent } from './viewticketdetail.component';

describe('ViewticketdetailComponent', () => {
  let component: ViewticketdetailComponent;
  let fixture: ComponentFixture<ViewticketdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewticketdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewticketdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
