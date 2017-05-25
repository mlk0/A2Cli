import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2c2Component } from './m2c2.component';

describe('M2c2Component', () => {
  let component: M2c2Component;
  let fixture: ComponentFixture<M2c2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2c2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2c2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
