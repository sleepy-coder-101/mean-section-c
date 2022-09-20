import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todoList: string[] = [];

  addItemToTodoList = (newTodoItem: string) => {
    this.todoList.push(newTodoItem);
    console.log(this.todoList);
  };

  deleteTodoItem = (index: number) => {
    this.todoList.splice(index, 1);
  };
}
