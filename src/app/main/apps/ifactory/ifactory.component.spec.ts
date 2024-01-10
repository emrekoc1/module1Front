import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfactoryComponent } from './ifactory.component';

describe('IfactoryComponent', () => {
  let component: IfactoryComponent;
  let fixture: ComponentFixture<IfactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
