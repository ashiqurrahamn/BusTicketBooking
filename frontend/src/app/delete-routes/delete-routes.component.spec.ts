import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRoutesComponent } from './delete-routes.component';

describe('DeleteRoutesComponent', () => {
  let component: DeleteRoutesComponent;
  let fixture: ComponentFixture<DeleteRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
