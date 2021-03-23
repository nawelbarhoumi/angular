import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  todos = JSON.parse(localStorage.getItem('todos') || '[]');

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(i){
    this.todos.splice(i, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

}
