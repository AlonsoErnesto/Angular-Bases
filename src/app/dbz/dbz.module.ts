//imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//declarations
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
//servicios
import { DBZService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports:[  
    MainPageComponent
  ],
  imports: [
    CommonModule,
    //ngSubmit y mas 
    FormsModule
  ],
  //services
  providers:[
    DBZService,
  ]
})
export class DbzModule { }
