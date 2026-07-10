import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjetoForm } from './edit-projeto-form';

describe('EditProjetoForm', () => {
  let component: EditProjetoForm;
  let fixture: ComponentFixture<EditProjetoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProjetoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProjetoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
