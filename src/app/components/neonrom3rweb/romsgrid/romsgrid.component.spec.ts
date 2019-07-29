import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomsgridComponent } from './romsgrid.component';

describe('RomsgridComponent', () => {
  let component: RomsgridComponent;
  let fixture: ComponentFixture<RomsgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomsgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomsgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
