import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBrancoComponent } from './header-branco.component';

describe('HeaderBrancoComponent', () => {
  let component: HeaderBrancoComponent;
  let fixture: ComponentFixture<HeaderBrancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBrancoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBrancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
