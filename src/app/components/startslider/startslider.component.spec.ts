import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartsliderComponent } from './startslider.component';

describe('StartsliderComponent', () => {
  let component: StartsliderComponent;
  let fixture: ComponentFixture<StartsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
