import { Injectable } from '@angular/core';
//importando biblioteca de observacao rxjs
import { Observable, of } from 'rxjs';

//importando a classe de funcionarios
import { Employee } from './employees';
import { EMPLOYEES } from './mock-employees';

//esse servico só vai exibir msg de sucesso ou nao
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

	//passando no contrutor para ele reconhecer o serviço
	constructor(private messageService: MessageService) { }

	getEmployees(): Observable<Employee[]> {	  
	   this.messageService.add('EmployeeService: funcionarios buscados!');
	   return of (EMPLOYEES);
	}


	getEmployee(id: number): Observable<Employee> {
    this.messageService.add('EmployeeService: BUSCADO FUNCIONARIO id=${id}');
    //retorna somente o funcionário com id
    return of(EMPLOYEES.find(employee => employee.id === id));
  }


}
