import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task: Task | undefined;
  
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()


  faTimes = faTimes

  onDelete(task: any) {
    this.onDeleteTask.emit(task) 
  }

  onToggle(task: Task | undefined) {
    this.onToggleReminder.emit(task)
  }
}
