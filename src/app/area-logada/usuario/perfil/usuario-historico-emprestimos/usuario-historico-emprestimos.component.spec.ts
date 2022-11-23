import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioHistoricoEmprestimosComponent } from './usuario-historico-emprestimos.component';

describe('UsuarioHistoricoEmprestimosComponent', () => {
  let component: UsuarioHistoricoEmprestimosComponent;
  let fixture: ComponentFixture<UsuarioHistoricoEmprestimosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioHistoricoEmprestimosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioHistoricoEmprestimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
