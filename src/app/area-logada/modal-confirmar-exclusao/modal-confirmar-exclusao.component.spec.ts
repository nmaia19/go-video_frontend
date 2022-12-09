import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmarExclusaoComponent } from './modal-confirmar-exclusao.component';

describe('ModalConfirmarExclusaoComponent', () => {
  let component: ModalConfirmarExclusaoComponent;
  let fixture: ComponentFixture<ModalConfirmarExclusaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmarExclusaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConfirmarExclusaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
