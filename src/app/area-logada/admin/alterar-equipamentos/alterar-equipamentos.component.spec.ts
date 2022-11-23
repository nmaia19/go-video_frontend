import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarEquipamentosComponent } from './alterar-equipamentos.component';

describe('AlterarEquipamentosComponent', () => {
  let component: AlterarEquipamentosComponent;
  let fixture: ComponentFixture<AlterarEquipamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarEquipamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarEquipamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
