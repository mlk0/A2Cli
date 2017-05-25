import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2c1Component } from './m2c1.component';

describe('M2c1Component', () => {
  let component: M2c1Component;
  let fixture: ComponentFixture<M2c1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2c1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2c1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
