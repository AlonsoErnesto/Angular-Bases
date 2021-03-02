//imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//declarations
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports:[  
    MainPageComponent
  ],
  imports: [
    CommonModule,
    //ngSubmit y mas 
    FormsModule
  ]
})
export class DbzModule { }
