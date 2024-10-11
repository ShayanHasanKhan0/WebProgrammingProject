import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookscheduleComponent } from './bookschedule.component';

describe('BookscheduleComponent', () => {
  let component: BookscheduleComponent;
  let fixture: ComponentFixture<BookscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookscheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
