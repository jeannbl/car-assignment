import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarStatusSaveComponent } from './car-status-save.component';

describe('CarStatusSaveComponent', () => {
  let component: CarStatusSaveComponent;
  let fixture: ComponentFixture<CarStatusSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarStatusSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarStatusSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
