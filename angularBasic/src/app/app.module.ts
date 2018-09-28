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
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

//importando cliente http 
import { HttpClientModule }    from '@angular/common/http';
import { TrashComponent } from './trash/trash.component';
import { AnswerComponent } from './answer/answer.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    FilterPipe,
    EmployeeDetailComponent,
    MessagesComponent,
    DashboardComponent,
    TrashComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
