import { Component, OnInit } from '@angular/core';
import { Todo } from './models/todo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PLA20';

  constructor(private service: TodoService) {}

  public getAllTodos() {
    return this.service.getAllTodos().subscribe(
      (todos) => console.log(todos),
      (error) => console.log('Algo ha ido mal! Error: ', error)
    );
  }

  public getTodo(): void {
    this.service.getTodo('1').subscribe(
      (todo) => console.log(todo),
      (error) => console.log('Algo ha ido mal! Error: ', error)
    );
  }

  public addTodo(): void {
    const newTodo: Todo = {
      userId: '1',
      title: 'Nuevo Todo',
      completed: false,
    };

    this.service.addTodo(newTodo).subscribe(
      (todo) => console.log(todo),
      (error) => console.log('Algo ha ido mal! Error: ', error)
    );
  }

  public updateTodo(): void {
    const updatedTodo: Todo = {
      userId: '1',
      id: '1',
      title: 'Todo Modificado',
      completed: true,
    };

    this.service.updateTodo(updatedTodo).subscribe(
      (todo) => console.log(todo),
      (error) => console.log('Algo ha ido mal! Error: ', error)
    );
  }

  public deleteTodo(): void {
    this.service.deleteTodo('1').subscribe(
      (todo) => console.log(todo),
      (error) => console.log('Algo ha ido mal! Error: ', error)
    );
  }
}
