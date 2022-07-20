import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    genero: [ , Validators.required ],
    notificaciones: [ , Validators.required ],
    condiciones: [ , Validators.requiredTrue ]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.miFormulario.reset({ //El reset permite asignar un objeto que tiene menos propiedades que el formGroup
      ...this.persona,
      condiciones: false
    });
  }

  guardar() {
    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones;

    this.persona = formValue;
  }

}
