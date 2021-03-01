import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes:string[]=["spiderman","superman","capitan america","pato donal"];
  dato:string= "";
  


   borrar(){
    this.dato = this.heroes.shift() || "";
    
  }
  
}
