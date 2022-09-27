import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [

    {
      icone: null,
      nome: 'action-sheet',
      link: '/action-sheet'
    },

  ];
  
  constructor() { }

  ngOnInit() {
  }
}

interface Componente{
  icone: string;
  nome: string;
  link: string
}