import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarStatusListComponent } from './car-status-list.component';

describe('CarStatusListComponent', () => {
  let component: CarStatusListComponent;
  let fixture: ComponentFixture<CarStatusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarStatusListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
