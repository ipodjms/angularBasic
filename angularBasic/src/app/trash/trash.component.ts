import { Component, OnInit } from '@angular/core';

//importando a classe que constrói o funcionarios
import { Employee } from '../employees';


//importando o servico que vai me entregar os funcionarios
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

employeesDel: Employee[];

constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  	    this.employeeService.getEmployeesDel()
        .subscribe(employees => this.employeesDel = employees )
  }

  putEmployeeBack(innertext): void {
      const id = innertext;      
      this.employeeService.putEmployeeBack(id)
        .subscribe(employees => this.employeesDel = employees )
  }   


putEmployeeInAnswer(innertext): void {
      const id = innertext;      
      this.employeeService.putEmployeeInAnswer(id)
        .subscribe(employees => this.employeesDel = employees )
  }  



}







