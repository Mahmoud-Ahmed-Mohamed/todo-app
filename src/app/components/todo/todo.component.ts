import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Todo from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo!: Todo;
  @Output() toggleevent = new EventEmitter();
  @Output() deleteevent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggle(todo: Todo){
    this.toggleevent.emit(todo);
  }

  delete(todo: Todo){
    this.deleteevent.emit(todo);
  }

}
