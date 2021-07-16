import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private basePath = 'https://jsonplaceholder.typicode.com';
  constructor(private httpClient: HttpClient) {}

  getAllTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${this.basePath}/todos`);
  }

  getTodo(id: string): Observable<Todo> {
    return this.httpClient.get<Todo>(`${this.basePath}/todos/${id}`);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(`${this.basePath}/todos`, todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>(`${this.basePath}/todos/${todo.id}`, todo);
  }

  deleteTodo(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.basePath}/todos/${id}`);
  }
}
