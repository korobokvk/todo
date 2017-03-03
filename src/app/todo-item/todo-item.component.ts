import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from '../shared/todo';

import {Observable} from 'rxjs/Rx';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() delete = new EventEmitter();
  @Output() toggle = new EventEmitter();
  @Output() timer = new EventEmitter();
  ticks: number;


  onTimer() {
    this.timer.emit(this.todo);
  }

  onToggle() {
    this.toggle.emit(this.todo);
    this.timer.emit(this.todo);
  }
  onDelete() {
    this.delete.emit(this.todo);
  };
  tickss() {
    this.ticks >= 0 ? this.ticks = 0: this.ticks;
    let timer = Observable.timer(100, 1000);
    timer.subscribe(t=>this.ticks = t);
  }


}
