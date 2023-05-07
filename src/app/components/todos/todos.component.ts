import { Component, OnInit } from '@angular/core';
import Todo from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class ToDosComponent implements OnInit {
  // todos = [
  //   {
  //     id: 1, txt: 'first task', completed: true
  //   },
  //   {
  //     id: 2, txt: 'second task', completed: false
  //   }
  // ];

  todos: Todo[] = [];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos(5).subscribe(todos => {
      this.todos = todos;
    });
  }

  toggleTodo(todo: Todo){
    todo.completed = !todo.completed;
    this.update(todo);
  }

  deleteTodo(todo: Todo){

    this.todoService.deleteTodo(todo.id).subscribe(() => {
      this.todos = this.todos.filter(item => {
        return item != todo;
      });
    });
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
  }

  update(todo: Todo){
    this.todoService.updateTodo(todo).subscribe(()=>{
      this.todos = this.todos.map(item => {
        if(todo.id == item.id){
          return todo;
          }
          return  item;
        });
    });
  }

  add(todo: Todo){
    this.todoService.addTodo(todo).subscribe((newTodo)=>{
      this.todos.push(newTodo);
    });
  }

}
