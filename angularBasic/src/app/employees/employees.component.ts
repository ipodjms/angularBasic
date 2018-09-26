import { Component, OnInit } from '@angular/core';
//importando a classe de funcionarios
import { Employee } from '../employees';

import { EMPLOYEES } from '../mock-employees';

//importando a classe que filtra a lista
import {FilterPipe} from '../filter.pipe';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

 
 // usando a classe employe para construir o objeto do funcionario
 employee: Employee = {
    id: 1,
    name: 'João Marcos Santos Teixeira'
  };

   //variavel com todos os funcionarios
   employees = EMPLOYEES;

  constructor() { }

  ngOnInit() {
  }

}






