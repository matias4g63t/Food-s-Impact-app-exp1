import { Component, OnInit } from '@angular/core';

//------------------------------------------------------------------------------------------------------------------------
// programacion de la clase componente tipo interface. 
interface Componente {
  icon:      string;
  name:      string;
  redirecTo: string;
}


//-------------------------------------------------------------------------------------------------------------------------

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

//--------------------------------------------------------------------------------------------------------------------------
export class InicioPage implements OnInit {


  componentes: Componente [] = [
    {
      icon: 'document-text-outline',
      name: 'descripcion',
      redirecTo: '/descripcion'
    }, 
    {
      icon: 'person-add-outline',
      name: 'formulario',
      redirecTo: '/formulario'
    }, 
  ]
//--------------------------------------------------------------------------------------------------------------------------
  constructor() { }
  
  option = {
    slidesPerview: 1.5, 
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay:true,
  }

  ngOnInit() {
  }

}
