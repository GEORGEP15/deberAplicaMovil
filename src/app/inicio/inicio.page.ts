import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../components/components.module';

//crear una interface para definir propiedades que el componente lista va 

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  //crear nuevo listado 

  //componentes: any[] = []; 
  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },

    //Se agregaron los suiguientes Componentes-iconos" en https://ionic.io/ionicons?_gl=1*k1jajn*_ga*MTgyNTE0ODk3MC4xNzE3MzQ0NjYx*_ga_REH9TJF6KF*MTcxNzM1MTg2MC4yLjEuMTcxNzM1MjMxMi4wLjAuMA..

    {
      icon: 'person-circle-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'time-outline',
      name: 'Datetime',
      redirectTo: '/datetime'
    },
    {
      icon: 'enter-outline',
      name: 'Input',
      redirectTo: '/input'
    },





  ];

  constructor() { }
  ngOnInit() {
  }

} 