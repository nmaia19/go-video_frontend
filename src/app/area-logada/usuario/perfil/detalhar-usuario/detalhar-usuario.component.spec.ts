import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharUsuarioComponent } from './detalhar-usuario.component';

describe('DetalharUsuarioComponent', () => {
  let component: DetalharUsuarioComponent;
  let fixture: ComponentFixture<DetalharUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalharUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalharUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
