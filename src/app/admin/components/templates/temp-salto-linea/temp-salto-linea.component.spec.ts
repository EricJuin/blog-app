import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempSaltoLineaComponent } from './temp-salto-linea.component';

describe('TempSaltoLineaComponent', () => {
  let component: TempSaltoLineaComponent;
  let fixture: ComponentFixture<TempSaltoLineaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempSaltoLineaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempSaltoLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
