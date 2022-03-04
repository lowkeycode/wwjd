import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DineItemComponent } from './dine-item.component';

describe('DineItemComponent', () => {
  let component: DineItemComponent;
  let fixture: ComponentFixture<DineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DineItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
