import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soluciones } from './soluciones';

describe('Soluciones', () => {
  let component: Soluciones;
  let fixture: ComponentFixture<Soluciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Soluciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Soluciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
