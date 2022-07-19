import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Dani',
    favoritos: [
      { id: 1, nombre: 'Pokemon' },
      { id: 2, nombre: 'Zelda' }
    ]
  };

  nuevoFavorito: string = '';

  agregarFavorito() {

    if(this.nuevoFavorito.trim() === '') {
      return;
    }

    const favorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoFavorito
    }

    this.persona.favoritos.push({...favorito});
    this.nuevoFavorito = '';
  }

  eliminarFavorito( favoritoIndex: number ) {
    this.persona.favoritos.splice(favoritoIndex, 1);
  }

  guardar(miFormulario: NgForm): void {
    if (miFormulario.invalid) {
      return;
    }

    console.log('Se postea', miFormulario);
  }
}
