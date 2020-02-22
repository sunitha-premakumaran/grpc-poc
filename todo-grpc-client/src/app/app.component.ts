import { Component } from '@angular/core';
import { TodoMessage, Todos } from './generated/todoservice_pb';
import { TodoClient } from './generated/todoservice_pb_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allTodos = [];
  newTodo = {
    id: 1,
    todoMessage: "",
    isCompleted: false
  };
  todoClient: TodoClient;

  constructor() {
    this.todoClient = new TodoClient("http://todo-server:8080");
  }

  async postTodo() {
    let request = new TodoMessage();
    request.setTodomessage(this.newTodo.todoMessage);
    request.setId(this.newTodo.id);
    request.setIscompleted(false);
    let response = await this.createTodo(request);
    this.allTodos.push(response);
    this.newTodo.id ++;
    this.newTodo.todoMessage = "";
  }

  async createTodo(request: TodoMessage): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.todoClient.createTodo(request, {} as any, (err, response) => {
        if (err) {
          console.log("Error occured",err);
          reject(err);
        }
        console.log(response);
        resolve((response as any).array);
      });
    });
  }
  
}

