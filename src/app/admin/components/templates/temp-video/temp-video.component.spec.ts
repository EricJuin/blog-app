import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempVideoComponent } from './temp-video.component';

describe('TempVideoComponent', () => {
  let component: TempVideoComponent;
  let fixture: ComponentFixture<TempVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
