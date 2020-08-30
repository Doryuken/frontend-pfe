import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEnsComponent } from './menu-ens.component';

describe('MenuEnsComponent', () => {
  let component: MenuEnsComponent;
  let fixture: ComponentFixture<MenuEnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
