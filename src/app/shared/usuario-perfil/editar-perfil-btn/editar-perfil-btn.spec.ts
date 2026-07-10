import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerfilBtn } from './editar-perfil-btn';

describe('EditarPerfilBtn', () => {
  let component: EditarPerfilBtn;
  let fixture: ComponentFixture<EditarPerfilBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPerfilBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPerfilBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
