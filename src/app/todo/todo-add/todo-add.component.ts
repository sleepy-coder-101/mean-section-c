import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  @Output() addNewItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  todoItem: string = '';

  addNewItem() {
    this.addNewItemEvent.emit(this.todoItem);
  }

}





















