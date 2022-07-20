import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [ , [Validators.required, Validators.minLength(3)] ],
    favoritos: this.formBuilder.array( [
      ['Pokemon', Validators.required],
      ['Zelda', Validators.required]
    ], Validators.required )
  });

  get favoritosArr(): FormArray {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
  }

  isInvalidField( field: string ) {
    return this.miFormulario.controls[field].errors
          && this.miFormulario.controls[field].touched;
  }

  guardar() {

    if(this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
