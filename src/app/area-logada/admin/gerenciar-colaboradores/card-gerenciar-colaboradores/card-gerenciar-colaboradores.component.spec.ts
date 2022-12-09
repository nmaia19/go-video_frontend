import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGerenciarColaboradoresComponent } from './card-gerenciar-colaboradores.component';

describe('CardGerenciarColaboradoresComponent', () => {
  let component: CardGerenciarColaboradoresComponent;
  let fixture: ComponentFixture<CardGerenciarColaboradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGerenciarColaboradoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGerenciarColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
