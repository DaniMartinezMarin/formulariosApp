import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  /* miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('RTX 4080ti'),
    precio: new FormControl(2000),
    existencias: new FormControl(0)
  }); */

  constructor( private formBuilder: FormBuilder ) { }

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [ 'RTX 4080ti' ],
    precio: [ 2000 ],
    existencias: [ 0 ],
  });

}
