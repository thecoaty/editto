import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDeletar } from './btn-deletar';

describe('BtnDeletar', () => {
  let component: BtnDeletar;
  let fixture: ComponentFixture<BtnDeletar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnDeletar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnDeletar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
