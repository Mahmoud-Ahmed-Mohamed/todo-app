import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Todo from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() addevent = new EventEmitter();
  title: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(){
    const td = new Todo(this.title, false);
    this.addevent.emit(td);

    this.title = "";
  }
}
