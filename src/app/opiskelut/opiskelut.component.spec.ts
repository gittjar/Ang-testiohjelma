import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpiskelutComponent } from './opiskelut.component';

describe('OpiskelutComponent', () => {
  let component: OpiskelutComponent;
  let fixture: ComponentFixture<OpiskelutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpiskelutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpiskelutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
