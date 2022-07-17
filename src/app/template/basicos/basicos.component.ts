import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX 4080ti',
    precio: 2000,
    existencias: 0
  }

  constructor() {}

  ngOnInit(): void {}

  nombreInvalido(): boolean {
    return (
      this.miFormulario?.controls.producto?.invalid &&
      this.miFormulario?.controls.producto?.touched
    );
  }

  precioInvalido(): boolean {
    return (
      this.miFormulario?.controls.precio?.invalid &&
      this.miFormulario?.controls.precio?.value < 0
    )
  }

  guardar(): void {
    this.miFormulario.resetForm(this.initForm);
  }
}
