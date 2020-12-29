import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraingingComponent } from './trainging.component';

describe('TraingingComponent', () => {
  let component: TraingingComponent;
  let fixture: ComponentFixture<TraingingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraingingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraingingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
