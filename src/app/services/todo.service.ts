import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Todo from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(limit: number): Observable<Todo[]>{
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=' + limit);
  }

  deleteTodo(id: any){
    return this.http.delete<Todo[]>('https://jsonplaceholder.typicode.com/todos/' + id);
  }

  updateTodo(todo: Todo){
    return this.http.put('https://jsonplaceholder.typicode.com/todos/' + todo.id, todo);
  }

  addTodo(todo: Todo): Observable<Todo>{
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo);
  }

}
