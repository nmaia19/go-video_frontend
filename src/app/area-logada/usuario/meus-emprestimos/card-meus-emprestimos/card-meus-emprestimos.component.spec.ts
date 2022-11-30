import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMeusEmprestimosComponent } from './card-meus-emprestimos.component';

describe('CardMeusEmprestimosComponent', () => {
  let component: CardMeusEmprestimosComponent;
  let fixture: ComponentFixture<CardMeusEmprestimosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMeusEmprestimosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMeusEmprestimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
