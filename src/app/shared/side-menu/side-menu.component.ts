import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
    `
      li{
        cursor: pointer
      }
    `
  ]
})
export class SideMenuComponent  {

  templateMenuItems: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './template/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: './template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './template/switches'
    }
  ];

  reactiveMenuItems: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './reactive/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches'
    }
  ];

  authMenuItems: MenuItem[] = [
    {
      texto: 'Registro',
      ruta: './auth/registro'
    },
    {
      texto: 'Login',
      ruta: './auth/login'
    }
  ]

}
