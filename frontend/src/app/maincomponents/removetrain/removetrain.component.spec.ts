import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovetrainComponent } from './removetrain.component';

describe('RemovetrainComponent', () => {
  let component: RemovetrainComponent;
  let fixture: ComponentFixture<RemovetrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovetrainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovetrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
