import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantDotIdComponent } from './enseignant-dot-id.component';

describe('EnseignantDotIdComponent', () => {
  let component: EnseignantDotIdComponent;
  let fixture: ComponentFixture<EnseignantDotIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantDotIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantDotIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
