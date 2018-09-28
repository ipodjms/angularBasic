import { Component, OnInit } from '@angular/core';

//importando a classe que constrói o funcionarios
import { Employee } from '../employees';


//importando o servico que vai me entregar os funcionarios
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

employeesAnswer: Employee[];

constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  	    this.employeeService.getEmployeesAnswer()
        .subscribe(employees => this.employeesAnswer = employees )
  }

  putEmployeeBack(innertext): void {
      const id = innertext;      
      this.employeeService.putEmployeeBack(id)
        .subscribe(employees => this.employeesAnswer = employees )
  }   


putEmployeeInAnswer(innertext): void {
      const id = innertext;      
      this.employeeService.putEmployeeInAnswer(id)
        .subscribe(employees => this.employeesAnswer = employees )
  }  

  delEmployee(innertext): void {
      const id = innertext;      
      this.employeeService.delEmployee(id)
        .subscribe(employees => this.employeesAnswer = employees )
  }    



}







