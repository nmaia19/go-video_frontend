import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharEquipamentosComponent } from './detalhar-equipamentos.component';

describe('DetalharEquipamentosComponent', () => {
  let component: DetalharEquipamentosComponent;
  let fixture: ComponentFixture<DetalharEquipamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalharEquipamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalharEquipamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
