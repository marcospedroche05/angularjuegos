import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposdelayComponent } from './equiposdelay.component';

describe('EquiposdelayComponent', () => {
  let component: EquiposdelayComponent;
  let fixture: ComponentFixture<EquiposdelayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquiposdelayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquiposdelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
