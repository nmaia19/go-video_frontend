import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarEquipamentosComponent } from './gerenciar-equipamentos.component';

describe('GerenciarEquipamentosComponent', () => {
  let component: GerenciarEquipamentosComponent;
  let fixture: ComponentFixture<GerenciarEquipamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarEquipamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarEquipamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
