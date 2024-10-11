import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtrainsComponent } from './viewtrains.component';

describe('ViewtrainsComponent', () => {
  let component: ViewtrainsComponent;
  let fixture: ComponentFixture<ViewtrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtrainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
