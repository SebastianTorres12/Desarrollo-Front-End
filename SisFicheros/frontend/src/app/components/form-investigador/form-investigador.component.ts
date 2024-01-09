// form-investigador.component.ts
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Investigador } from '../../models/investigador.model';

@Component({
  selector: 'form-investigador',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,RouterLink, RouterLinkActive],
  templateUrl: './form-investigador.component.html',
  styleUrls: ['./form-investigador.component.css']
})
export class FormInvestigadorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  formInvestigador: FormGroup;

  @Input()
  modelInvestigador: Investigador;

  @Output()
  submitValues: EventEmitter<Investigador> = new EventEmitter<Investigador>();

  ngOnInit(): void {
    this.formInvestigador = this.formBuilder.group({
      nombre: ['', Validators.required],
      responsable: [false, Validators.required]
    });

    if (this.modelInvestigador !== undefined) {
      this.formInvestigador.patchValue(this.modelInvestigador);
    }
  }

  onSubmit(): void {
    this.submitValues.emit(this.formInvestigador.value);
  }
}
