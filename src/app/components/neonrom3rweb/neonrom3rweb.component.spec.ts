import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Neonrom3rwebComponent } from './neonrom3rweb.component';

describe('Neonrom3rwebComponent', () => {
  let component: Neonrom3rwebComponent;
  let fixture: ComponentFixture<Neonrom3rwebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Neonrom3rwebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Neonrom3rwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
