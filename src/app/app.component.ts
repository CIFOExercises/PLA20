import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PLA20';

  constructor(private service: TodoService) {}

  public getAllTodos(): void {
    this.service.getAllTodos().subscribe((todos) => console.log(todos));
  }

  public getTodo(): void {
    this.service.getTodo('1').subscribe((todo) => console.log(todo));
  }
}
