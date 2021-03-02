import { Component } from '@angular/core';

interface Persona{
  name:string,
  poder: number,
}



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent   {

  personajes:Persona[]= [
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

  nuevo:Persona = {
    name:"",
    poder:0,
  }

  agregar(){
    if(this.nuevo.name.trim().length === 0 ){return ;}
    else{
      
      this.personajes.push(this.nuevo);
      this.nuevo = { name : "",poder:0}
      
    }
    console.log(this.nuevo)
  }

  // cambiarNombre(event:any){
  //   console.log(event.target.value)
  // }
}
