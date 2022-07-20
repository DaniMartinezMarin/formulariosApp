import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [ , [Validators.required, Validators.minLength(3)] ],
    favoritos: this.formBuilder.array( [
      ['Pokemon', Validators.required],
      ['Zelda', Validators.required]
    ], Validators.required )
  });

  nuevoFavorito: FormControl = this.formBuilder.control('', Validators.required);

  get favoritosArr(): FormArray {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor( private formBuilder: FormBuilder ) { }

  isInvalidField( field: string ) {
    return this.miFormulario.controls[field].errors
          && this.miFormulario.controls[field].touched;
  }

  agregarFavorito() {

    if(this.nuevoFavorito.invalid)
      return;

    this.favoritosArr.push( this.formBuilder.control( this.nuevoFavorito.value, Validators.required ) );
    this.nuevoFavorito.reset();
  }

  eliminarFavoritos( index: number ) {
    this.favoritosArr.removeAt(index);
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
