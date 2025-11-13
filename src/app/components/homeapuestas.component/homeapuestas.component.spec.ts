import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeapuestasComponent } from './homeapuestas.component';

describe('HomeapuestasComponent', () => {
  let component: HomeapuestasComponent;
  let fixture: ComponentFixture<HomeapuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeapuestasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeapuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
