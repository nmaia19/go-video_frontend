import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHistoricoEmprestimosComponent } from './card-historico-emprestimos.component';

describe('CardHistoricoEmprestimosComponent', () => {
  let component: CardHistoricoEmprestimosComponent;
  let fixture: ComponentFixture<CardHistoricoEmprestimosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHistoricoEmprestimosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHistoricoEmprestimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
