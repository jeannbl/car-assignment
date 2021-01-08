import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOwnerSaveComponent } from './car-owner-save.component';

describe('CarOwnerSaveComponent', () => {
  let component: CarOwnerSaveComponent;
  let fixture: ComponentFixture<CarOwnerSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarOwnerSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOwnerSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
