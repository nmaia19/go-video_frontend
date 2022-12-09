import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarColaboradoresComponent } from './cadastrar-colaboradores.component';

describe('CadastrarColaboradoresComponent', () => {
  let component: CadastrarColaboradoresComponent;
  let fixture: ComponentFixture<CadastrarColaboradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarColaboradoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
