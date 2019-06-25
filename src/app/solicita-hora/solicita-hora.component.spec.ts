import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitaHoraComponent } from './solicita-hora.component';

describe('SolicitaHoraComponent', () => {
  let component: SolicitaHoraComponent;
  let fixture: ComponentFixture<SolicitaHoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitaHoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitaHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
