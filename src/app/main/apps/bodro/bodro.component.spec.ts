import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { bodroComponent } from './bodro.component';

describe('bodroComponent', () => {
  let component:bodroComponent;
  let fixture: ComponentFixture<bodroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ bodroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(bodroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
