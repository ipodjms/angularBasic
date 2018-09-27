import { Component, OnInit } from '@angular/core';

//importando a classe que constrói o funcionarios
import { Employee } from '../employees';


//importando o servico que vai me entregar os funcionarios
import { EmployeeService } from '../employee.service';

//importando a classe que filtra a lista
import {FilterPipe} from '../filter.pipe';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent implements OnInit {
 
  
   employees: Employee[];
   
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  	this.getEmployeesInf();
  }

  onSelect(): void {       
          this.employeeService.getEmployeesInf()
            .subscribe(employees => this.employees = employees )
  }   

	getEmployees(): void {
	  	this.employeeService.getEmployees()
	  		.subscribe(employees => this.employees = employees )
	}

  getEmployeesInf(): void {
      this.employeeService.getEmployeesInf()
        .subscribe(employees => this.employees = employees )
  }  
	

}






