import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGerenciarEquipamentosComponent } from './card-gerenciar-equipamentos.component';

describe('CardGerenciarEquipamentosComponent', () => {
  let component: CardGerenciarEquipamentosComponent;
  let fixture: ComponentFixture<CardGerenciarEquipamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGerenciarEquipamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGerenciarEquipamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
