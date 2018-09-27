import { Injectable } from '@angular/core';
//importando biblioteca de observacao rxjs
import { Observable, of } from 'rxjs';

//importando a classe de funcionarios
import { Employee } from './employees';
import { EMPLOYEES } from './mock-employees';

//esse servico só vai exibir msg de sucesso ou nao
import { MessageService } from './message.service';

//importando http
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class EmployeeService {

	
	//passando no contrutor para ele reconhecer o serviço
	constructor(private messageService: MessageService, private http: HttpClient) { }

	getEmployees(): Observable<Employee[]> {	  

		//zerando para nao super encehr o array
		const EMPLOYEES = [];
	   
		this.http.get('https://randomuser.me/api/?page=1&results=10').subscribe(data => {
	      console.log(data.results);

				data.results.forEach((key : any, val: any) => {
                        key['index'] = val + 1;
                        console.log (key);
                        //console.log (key.email);
                        console.log (key.name.first);
                        console.log (key.name.last);
                        console.log (key.email);
                        console.log (key.id.value);

                         EMPLOYEES.push( { 'id' parseInt(key.id.value),'name' key.name.first } );

                        
                        
                    })

				console.log (EMPLOYEES);



	    });

	   this.messageService.add('EmployeeService: funcionarios buscados!');	   
	   return of (EMPLOYEES);

	}


	getEmployeesWeb(): Observable<Employee[]> {	  

	 //    var jones = "";	
		// this.http.get('https://randomuser.me/api/?page=1&results=10').subscribe(data => {
	 //      console.log(data.results);


		// 		data.results.forEach((key : any, val: any) => {
  //                       key['index'] = val + 1;
  //                       console.log (key);
  //                       //console.log (key.email);
  //                       console.log (key.name.first);
  //                       console.log (key.name.last);
  //                       console.log (key.email);
  //                       console.log (key.id.value);

  //                       EMPLOYEES.push( { 'id' parseInt(key.id.value),'name' key.name.first } );
                        
  //                   })

		// 		console.log (EMPLOYEES);



	 //    });

	    return of (EMPLOYEES);

	}	


	getEmployee(id: number): Observable<Employee> {
    this.messageService.add('EmployeeService: BUSCADO FUNCIONARIO id=${id}');
    //retorna somente o funcionário com id
    return of(EMPLOYEES.find(employee => employee.id === id));
  }


}
