import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusEmprestimosComponent } from './meus-emprestimos.component';

describe('MeusEmprestimosComponent', () => {
  let component: MeusEmprestimosComponent;
  let fixture: ComponentFixture<MeusEmprestimosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeusEmprestimosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeusEmprestimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
