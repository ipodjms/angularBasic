import { Injectable } from '@angular/core';
//importando biblioteca de observacao rxjs
import { Observable, of } from 'rxjs';

//importando a classe de funcionarios
import { Employee } from './employees';
import { EMPLOYEES } from './mock-employees';
import { EMPLOYEESDEL } from './mock-employees';
import { EMPLOYEESANS } from './mock-employees';

//esse servico só vai exibir msg de sucesso ou nao
import { MessageService } from './message.service';

//importando http
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, filter, scan } from 'rxjs/operators';


import {Globals} from './globals'


@Injectable({
  providedIn: 'root'
})


export class EmployeeService {

	
	//passando no contrutor para ele reconhecer o serviço
	constructor(private messageService: MessageService, private http: HttpClient, private globals: Globals) { 


	}


delEmployee(id: number): Observable<Employee> {
	    this.messageService.add('EmployeeService: MOVENDO FUNCIONARIO PRA LIXEIRA');
	    //retorna somente o funcionário com id	    


		EMPLOYEES.forEach((key : any, val: any) => {
                //key['index'] = val + 1;
                console.log (key);  
                console.log (val);                                                                				                
                if (key.id == id) {
                	//coloca na lixeira
                	EMPLOYEESDEL.push(EMPLOYEES[val]);
                	//retira do ativo
                	EMPLOYEES.splice(val,1)
                } else {

                }
            });


		EMPLOYEESANS.forEach((key : any, val: any) => {
                //key['index'] = val + 1;
                console.log (key);  
                console.log (val);                                                                				                
                if (key.id == id) {
                	//coloca na lixeira
                	EMPLOYEESDEL.push(EMPLOYEESANS[val]);
                	//retira do ativo
                	EMPLOYEESANS.splice(val,1)
                } else {

                }
            });		

		console.log (EMPLOYEES);
		console.log (EMPLOYEESDEL);
		console.log (EMPLOYEESANS);



	   return of( );
	  }	  



putEmployeeBack(id: number): Observable<Employee> {
	    this.messageService.add('EmployeeService: MOVENDO FUNCIONARIO PRA TODOS');
	    //retorna somente o funcionário com id	    


		EMPLOYEESDEL.forEach((key : any, val: any) => {
                //key['index'] = val + 1;
                console.log (key);  
                console.log (val);                                                                				                
                if (key.id == id) {
                	//coloca na lixeira
                	EMPLOYEES.push(EMPLOYEESDEL[val]);
                	//retira do ativo
                	EMPLOYEESDEL.splice(val,1)
                } else {

                }
            });


		EMPLOYEESANS.forEach((key : any, val: any) => {
                //key['index'] = val + 1;
                console.log (key);  
                console.log (val);                                                                				                
                if (key.id == id) {
                	//coloca na lixeira
                	EMPLOYEES.push(EMPLOYEESANS[val]);
                	//retira do ativo
                	EMPLOYEESANS.splice(val,1)
                } else {

                }
            });		

		console.log (EMPLOYEES);
		console.log (EMPLOYEESDEL);
		console.log (EMPLOYEESANS);



	   return of( );
	  }	 


putEmployeeInAnswer(id: number): Observable<Employee> {
	    this.messageService.add('EmployeeService: MOVENDO FUNCIONARIO PRA ATENDIDOS');
	    //retorna somente o funcionário com id	    


		EMPLOYEESDEL.forEach((key : any, val: any) => {
                //key['index'] = val + 1;
                console.log (key);  
                console.log (val);                                                                				                
                if (key.id == id) {
                	//coloca na lixeira
                	EMPLOYEESANS.push(EMPLOYEESDEL[val]);
                	//retira do ativo
                	EMPLOYEESDEL.splice(val,1)
                } else {

                }
            });

		EMPLOYEES.forEach((key : any, val: any) => {
                //key['index'] = val + 1;
                console.log (key);  
                console.log (val);                                                                				                
                if (key.id == id) {
                	//coloca na lixeira
                	EMPLOYEESANS.push(EMPLOYEES[val]);
                	//retira do ativo
                	EMPLOYEES.splice(val,1)
                } else {

                }
            });		

		console.log (EMPLOYEES);
		console.log (EMPLOYEESDEL);
		console.log (EMPLOYEESANS);



	   return of( );
	  }	 	   	  


	getEmployeesDel(): Observable<Employee[]> {	  
	   this.messageService.add('EmployeeService: funcionarios buscados!');	   
	   return of (EMPLOYEESDEL);
	}	

	getEmployeesAnswer(): Observable<Employee[]> {	  
	   this.messageService.add('EmployeeService: funcionarios buscados!');	   
	   return of (EMPLOYEESANS);
	}		


	//chamado só no init, tem m veificador para nao recarregar toda vez
	getEmployees(): Observable<Employee[]> {	  

		this.globals.firstLoading = this.globals.firstLoading + 1;

		

		const page = 1;


		if (this.globals.firstLoading == 1) { 		


		this.http.get('https://randomuser.me/api/?page='+page+'&results=20').subscribe((data:any) =>   {

		     this.globals.firstLoading = this.globals.firstLoading + 1;                     		     
		     		      
					data.results.forEach((key : any, val: any) => {
	                        key['index'] = val + 1;
	                        console.log (key);                                                
	                        

							if ( key.id.value != NaN && key.id.value != null && key.id.value.indexOf('NaN') == -1  && key.id.value.indexOf(' ') == -1) {

	                        	EMPLOYEES.push( { 'id' : parseInt(key.id.value),'name' : key.name.first + ' ' + key.name.last , 'email' : key.email, 'phone' : key.phone, 'city' : key.location.city, 'state' : key.location.state, 'avatar' : key.picture.large } );

	                        }                        
	                        
	                    })

		    });			
		}



	   this.messageService.add('EmployeeService: funcionarios buscados!');	   
	   
	   return of (EMPLOYEES);

	}



	getEmployeesInf(): Observable<Employee[]> {	  

		const page = this.globals.role = this.globals.role + 1;

		this.http.get('https://randomuser.me/api/?page='+page+'&results=20').subscribe((data:any) => {

				data.results.forEach((key : any, val: any) => {
                        key['index'] = val + 1;
                        //console.log (key);                                                                        
						if ( key.id.value != NaN && key.id.value != null && key.id.value.indexOf('NaN') == -1  && key.id.value.indexOf(' ') == -1) {

                        	EMPLOYEES.push( { 'id' : parseInt(key.id.value),'name' : key.name.first + ' ' + key.name.last , 'email' : key.email, 'phone' : key.phone, 'city' : key.location.city, 'state' : key.location.state, 'avatar' : key.picture.large } );

                        }                        
                        
                    })

				//console.log (EMPLOYEES);


	    });

	   this.messageService.add('EmployeeService: funcionarios buscados!');	   
	   
	   return of (EMPLOYEES);

	}


	getEmployee(id: number): Observable<Employee> {
    this.messageService.add('EmployeeService: BUSCADO FUNCIONARIO id=${id}');
    //retorna somente o funcionário com id
    return of(EMPLOYEES.find(employee => employee.id === id));
  }


  


}
