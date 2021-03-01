import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
 
})
 

export class ContadorComponent {
  title:string = 'Acumulador';
  numer:number = 10;
  base:number = 5;

  suma(x:number)
  {
      this.numer +=x;
  }
}
   