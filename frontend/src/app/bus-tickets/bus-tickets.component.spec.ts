import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusTicketsComponent } from './bus-tickets.component';

describe('BusTicketsComponent', () => {
  let component: BusTicketsComponent;
  let fixture: ComponentFixture<BusTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
