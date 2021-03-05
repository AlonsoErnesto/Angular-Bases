import { Component } from '@angular/core';
import { Persona } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent   {

   nuevo:Persona = {
    name:"",
    poder:0,
  }
  
  
 
  constructor(private listPersonajes:DBZService){

  // get personajes():Persona[]{
  //   return this.listPersonajes.personajes;
  // }

  // agregarNuevoPeronaje(paraams:any){
  
      
  //     this.personajes.push(paraams);
  //     this.nuevo = { name : "",poder:0}
  //     // se detiene hasta aqui la compilacion
  //     // debugger;
      
  //   console.log(paraams)
  // }


  }
  // cambiarNombre(event:any){
  //   console.log(event.target.value)
  // }
}
