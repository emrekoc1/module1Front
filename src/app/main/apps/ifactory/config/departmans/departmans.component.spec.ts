import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmansComponent } from './departmans.component';

describe('DepartmansComponent', () => {
  let component: DepartmansComponent;
  let fixture: ComponentFixture<DepartmansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
