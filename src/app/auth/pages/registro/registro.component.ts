import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)] ],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator] ],
    username: ['', [Validators.required, this.validatorService.noPuedeSerAgathor] ], //No se ponen los parentesis de ejecutar el metodo
    password: ['', [Validators.required, Validators.minLength(6)] ],
    confirm_password: ['', [Validators.required] ],
  }, {
    validators: [ this.validatorService.isEqualFields('password', 'confirm_password') ]
  });

  get emailErrorMsg():string {
    const errors = this.miFormulario.get('email')?.errors;

    if(errors?.required) {
      return 'El email es obligatorio'
    } else if( errors?.pattern ) {
      return 'El formato del email no es correcto'
    } else if (errors?.emailAlreadyExists) {
      return 'El email ya existe'
    } else {
      return ''
    }

  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorsService,
    private emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Dani Martinez',
      email: 'test1@test.com',
      username: 'pepito69'
    })
  }

  isInvalidField( field: string ) {
    return this.miFormulario.get(field)?.invalid
        && this.miFormulario.get(field)?.touched;
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
