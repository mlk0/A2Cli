import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M3c1Component } from './m3c1.component';

describe('M3c1Component', () => {
  let component: M3c1Component;
  let fixture: ComponentFixture<M3c1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M3c1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M3c1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
