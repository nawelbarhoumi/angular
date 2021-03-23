import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path: 'todo',
    component: AddTodoComponent
  },
  {
    path: 'update-todo/:index',
    component: UpdateTodoComponent
  },
  {
    path: 'add-todo',
    component: AddTodoComponent
  },
  {
    path: 'todo-list',
    component: ListTodoComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'list-product',
    component: ListProductComponent
  },
  {
    path:'**',
    component: Page404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
