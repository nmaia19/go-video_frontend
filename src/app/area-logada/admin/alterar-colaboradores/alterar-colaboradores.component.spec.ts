import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarColaboradoresComponent } from './alterar-colaboradores.component';

describe('AlterarColaboradoresComponent', () => {
  let component: AlterarColaboradoresComponent;
  let fixture: ComponentFixture<AlterarColaboradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarColaboradoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
