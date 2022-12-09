import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEquipamentosComponent } from './cadastrar-equipamentos.component';

describe('CadastrarEquipamentosComponent', () => {
  let component: CadastrarEquipamentosComponent;
  let fixture: ComponentFixture<CadastrarEquipamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEquipamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarEquipamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
