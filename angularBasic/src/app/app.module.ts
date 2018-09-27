import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importando o módulo de formulário para poder gerar o bndo e a busca
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';

import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

//importando compoponente para filtrar 
import { FilterPipe} from './filter.pipe';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    FilterPipe,
    EmployeeDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
