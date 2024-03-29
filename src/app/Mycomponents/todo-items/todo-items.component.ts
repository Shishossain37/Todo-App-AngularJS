import { Todo } from 'src/app/Todos';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
})
export class TodoItemsComponent {
  @Input() 'todo': Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('Onclick is triggered');
  }
  onCheckBoxClick(todo: Todo) {
    this.todoCheckbox.emit(todo);
  }
}
