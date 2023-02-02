import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPacienteComponent } from './find-paciente.component';

describe('FindPacienteComponent', () => {
  let component: FindPacienteComponent;
  let fixture: ComponentFixture<FindPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
