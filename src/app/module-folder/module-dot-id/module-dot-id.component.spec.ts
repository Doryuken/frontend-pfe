import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleDotIdComponent } from './module-dot-id.component';

describe('ModuleDotIdComponent', () => {
  let component: ModuleDotIdComponent;
  let fixture: ComponentFixture<ModuleDotIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleDotIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleDotIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
