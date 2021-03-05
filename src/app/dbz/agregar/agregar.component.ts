import { Component,Input, Output,EventEmitter } from '@angular/core';
import { Persona } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent   {

  constructor(private newPeronaje:DBZService){}

  @Input() nuevo:Persona = {
    name:"",
    poder:0,
  }

  
 // @Output() onNuevoPersonaje:EventEmitter<Persona> = new EventEmitter();

  agregar(){
    if(this.nuevo.name.trim().length === 0 ){return ;}
    else{
      this.newPeronaje.agregarPersonaje(this.nuevo);
     // this.onNuevoPersonaje.emit(this.nuevo);
      this.nuevo = { name : "",poder:0}
      
    }
    console.log(this.nuevo)
  }


}
