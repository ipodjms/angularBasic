import { Component, OnInit } from '@angular/core';

import { Employee } from '../employees';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})

export class DashboardComponent implements OnInit {

  employees: Employee[];

constructor(private employeeService: EmployeeService) { }

	ngOnInit() {
		this.getEmployees();
	}


	onSelect(employee: Employee): void {
	  //this.selectedEmployee = employee;
	  //console.log (this.selectedEmployee);
	}   

	   getEmployees(): void {
	  	this.employeeService.getEmployees()
	  		.subscribe(employees => this.employees = employees)
	}

}


