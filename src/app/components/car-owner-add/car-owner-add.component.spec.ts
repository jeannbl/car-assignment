import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOwnerAddComponent } from './car-owner-add.component';

describe('CarOwnerAddComponent', () => {
  let component: CarOwnerAddComponent;
  let fixture: ComponentFixture<CarOwnerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarOwnerAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOwnerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
