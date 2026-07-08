import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEditar } from './btn-editar';

describe('BtnEditar', () => {
  let component: BtnEditar;
  let fixture: ComponentFixture<BtnEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnEditar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
