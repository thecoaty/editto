import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjetoBtn } from './edit-projeto-btn';

describe('EditProjetoBtn', () => {
  let component: EditProjetoBtn;
  let fixture: ComponentFixture<EditProjetoBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProjetoBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProjetoBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
