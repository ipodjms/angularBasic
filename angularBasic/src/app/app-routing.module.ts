import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importando com componentes que serao exibidos em cada rota
import { DashboardComponent }   from './dashboard/dashboard.component';
import { EmployeesComponent }      from './employees/employees.component';
import { EmployeeDetailComponent }  from './employee-detail/employee-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent },
  { path: 'employees', component: EmployeesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
