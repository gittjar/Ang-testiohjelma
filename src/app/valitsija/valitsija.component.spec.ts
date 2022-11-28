import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValitsijaComponent } from './valitsija.component';

describe('ValitsijaComponent', () => {
  let component: ValitsijaComponent;
  let fixture: ComponentFixture<ValitsijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValitsijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValitsijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
