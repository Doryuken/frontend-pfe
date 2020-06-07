import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementidComponent } from './departementid.component';

describe('DepartementidComponent', () => {
  let component: DepartementidComponent;
  let fixture: ComponentFixture<DepartementidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartementidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
