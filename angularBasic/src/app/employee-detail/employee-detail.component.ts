//passando o Input para ligar tipo bind deicxando disponivel para o pai
import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employees';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  //
  @Input() employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
