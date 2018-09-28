//passando o Input para ligar tipo bind deicxando disponivel para o pai
import { Component, OnInit, Input } from '@angular/core';

//precisa pra pegar a rota ativa e localizacao no browser
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { Employee } from '../employees';

import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

   employee: Employee;

   constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) {}

	 ngOnInit() {
	  	this.getEmployee();
	  }

	   getEmployee(): void {
	   	const id = +this.route.snapshot.paramMap.get('id');
	  	this.employeeService.getEmployee(id)
	  		.subscribe(employee => this.employee = employee )
	}
 
  goBack(): void {
    this.location.back();
  }

}






 
 
 
  