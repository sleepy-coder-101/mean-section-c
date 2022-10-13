import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todoList: string[] = [];
  @Output() todoDeleteEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodoItem = (index: number) => {
    console.log(index)
    this.todoDeleteEvent.emit(index);
  }

}
