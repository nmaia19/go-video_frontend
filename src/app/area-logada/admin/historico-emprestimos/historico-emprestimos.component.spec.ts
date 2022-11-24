import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoEmprestimosComponent } from './historico-emprestimos.component';

describe('HistoricoEmprestimosComponent', () => {
  let component: HistoricoEmprestimosComponent;
  let fixture: ComponentFixture<HistoricoEmprestimosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoEmprestimosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoEmprestimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
