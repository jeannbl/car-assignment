import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSaveComponent } from './owner-save.component';

describe('OwnerSaveComponent', () => {
  let component: OwnerSaveComponent;
  let fixture: ComponentFixture<OwnerSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
