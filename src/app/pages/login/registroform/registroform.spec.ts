import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registroform } from './registroform';

describe('Registroform', () => {
  let component: Registroform;
  let fixture: ComponentFixture<Registroform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registroform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registroform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
