import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempSubtituloComponent } from './temp-subtitulo.component';

describe('TempSubtituloComponent', () => {
  let component: TempSubtituloComponent;
  let fixture: ComponentFixture<TempSubtituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempSubtituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempSubtituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
