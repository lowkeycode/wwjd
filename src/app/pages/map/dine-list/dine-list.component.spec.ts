import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DineListComponent } from './dine-list.component';

describe('DineListComponent', () => {
  let component: DineListComponent;
  let fixture: ComponentFixture<DineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
