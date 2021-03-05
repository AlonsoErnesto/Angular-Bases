//decorador @Injectable

import { Injectable } from "@angular/core";
import { Persona } from '../interfaces/dbz.interface';

@Injectable()
export class DBZService {

  agregarPersonaje(personaje:Persona){
    this._personajes.push(personaje)
  }  

  private _personajes:Persona[]= [
    {
      name:"MisterPOPO",
      poder:23123,
    },
    {
      name:"Vegettea",
      poder:12000,
    },
    {
      name:"Bulma",
      poder:123
    }
  ]

  get personajes()
  {
    return [...this._personajes];
  }
    constructor(){
        
        console.log("Servicio inizialisado");
    }


    
}