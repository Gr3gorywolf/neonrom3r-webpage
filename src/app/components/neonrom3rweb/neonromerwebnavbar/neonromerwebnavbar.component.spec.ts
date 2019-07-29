import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonromerwebnavbarComponent } from './neonromerwebnavbar.component';

describe('NeonromerwebnavbarComponent', () => {
  let component: NeonromerwebnavbarComponent;
  let fixture: ComponentFixture<NeonromerwebnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeonromerwebnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeonromerwebnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
