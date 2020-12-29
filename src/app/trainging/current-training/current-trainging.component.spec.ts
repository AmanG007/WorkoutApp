import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTraingingComponent } from './current-trainging.component';

describe('CurrentTraingingComponent', () => {
  let component: CurrentTraingingComponent;
  let fixture: ComponentFixture<CurrentTraingingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentTraingingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTraingingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
