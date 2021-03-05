import { Component,Input } from '@angular/core';
import { Persona } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent   {

  //@Input() personajes:Persona[]=[];
  constructor(private listPersonajes:DBZService){
    
  }

  
 
  get personajes(){
    return this.listPersonajes.personajes;
  }

}
    