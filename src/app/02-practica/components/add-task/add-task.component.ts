import { Component, EventEmitter, Output } from '@angular/core';
import { Tarea } from '../../interfaces/tarea.interface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

@Output()
 public newTask: EventEmitter<Tarea> = new EventEmitter();

  public tareas: Tarea = {
    id: 0,
    nombre: '',
    completado: false,
  };

  addTask():void{

    if ( this.tareas.nombre.length === 0 ) return;

    this.newTask.emit({ ...this.tareas});


    this.tareas.nombre = '';
  }


}
