import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauEtudComponent } from './niveau-etud.component';

describe('NiveauEtudComponent', () => {
  let component: NiveauEtudComponent;
  let fixture: ComponentFixture<NiveauEtudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveauEtudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveauEtudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
