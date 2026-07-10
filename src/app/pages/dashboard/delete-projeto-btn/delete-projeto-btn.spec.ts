import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProjetoBtn } from './delete-projeto-btn';

describe('DeleteProjetoBtn', () => {
  let component: DeleteProjetoBtn;
  let fixture: ComponentFixture<DeleteProjetoBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProjetoBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProjetoBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
