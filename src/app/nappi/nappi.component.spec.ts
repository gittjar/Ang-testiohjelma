import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NappiComponent } from './nappi.component';

describe('NappiComponent', () => {
  let component: NappiComponent;
  let fixture: ComponentFixture<NappiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NappiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NappiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
