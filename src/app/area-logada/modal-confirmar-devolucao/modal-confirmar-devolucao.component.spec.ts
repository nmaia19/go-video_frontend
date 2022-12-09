import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmarDevolucaoComponent } from './modal-confirmar-devolucao.component';

describe('ModalConfirmarDevolucaoComponent', () => {
  let component: ModalConfirmarDevolucaoComponent;
  let fixture: ComponentFixture<ModalConfirmarDevolucaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmarDevolucaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConfirmarDevolucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
