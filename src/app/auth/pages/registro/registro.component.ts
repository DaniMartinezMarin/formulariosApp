import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  noPuedeSerAgathor( control: FormControl ) {
    const valor: string = control.value?.trim().toLowerCase();

    if(valor === 'agathor') {
      return {
        noAgathor: true
      }
    }

    return null;
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.nombreApellidoPattern)] ],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)] ],
    username: ['', [Validators.required, this.noPuedeSerAgathor] ], //No se ponen los parentesis de ejecutar el metodo
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Dani Martinez',
      email: 'test@gmail.com'
    })
  }

  isInvalidField( field: string ) {
    return this.miFormulario.get(field)?.invalid && this.miFormulario.get(field)?.touched;
  }

  submitFormulario() {

    if(this.miFormulario.invalid)
    {
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.miFormulario.reset();
  }

}
