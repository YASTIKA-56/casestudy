import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SuccessLoginComponent } from './success-login/success-login.component';

const routes: Routes = [
  {path:'',redirectTo:'task',pathMatch:'full' },
  {path:'save',component:CreateTaskComponent},
  {path:'login',component:LoginPageComponent},
  {path: 'details/:task_Id', component:TaskDetailsComponent },
  {path:'tasks' , component:TaskListComponent},
  {path:'success',component:SuccessLoginComponent},
  {path:'update/:task_Id',component:UpdateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
