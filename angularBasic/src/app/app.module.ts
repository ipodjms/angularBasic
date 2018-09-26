import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importando o módulo de formulário para poder gerar o bndo e a busca
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';

import { EmployeesComponent } from './employees/employees.component';

//importando compoponente para filtrar 
import { FilterPipe} from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
