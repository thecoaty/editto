import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjetosBtn } from './add-projetos-btn';

describe('AddProjetosBtn', () => {
  let component: AddProjetosBtn;
  let fixture: ComponentFixture<AddProjetosBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProjetosBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProjetosBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
