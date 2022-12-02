import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVaziaComponent } from './lista-vazia.component';

describe('ListaVaziaComponent', () => {
  let component: ListaVaziaComponent;
  let fixture: ComponentFixture<ListaVaziaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVaziaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaVaziaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
