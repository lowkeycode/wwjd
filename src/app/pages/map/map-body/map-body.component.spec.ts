import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBodyComponent } from './map-body.component';

describe('MapBodyComponent', () => {
  let component: MapBodyComponent;
  let fixture: ComponentFixture<MapBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
