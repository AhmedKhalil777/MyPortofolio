import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtriclesComponent } from './atricles.component';

describe('AtriclesComponent', () => {
  let component: AtriclesComponent;
  let fixture: ComponentFixture<AtriclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtriclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtriclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
