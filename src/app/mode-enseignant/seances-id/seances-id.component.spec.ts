import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeancesIdComponent } from './seances-id.component';

describe('SeancesIdComponent', () => {
  let component: SeancesIdComponent;
  let fixture: ComponentFixture<SeancesIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeancesIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeancesIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
