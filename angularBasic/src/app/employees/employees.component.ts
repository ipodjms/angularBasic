import { Component, OnInit } from '@angular/core';
//importando a classe de funcionarios
import { employee } from '../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

 
// usando a classe employe para construir o objeto do funcionario
 employee: Employees = {
    id: 1,
    name: 'João Marcos Santos Teixeira'
  };


  constructor() { }

  ngOnInit() {
  }

}






