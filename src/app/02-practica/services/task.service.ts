import { Tarea } from '../interfaces/tarea.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  public tareas: Tarea[]=[{
    id: 1,
    nombre: 'Tarea 1',
    completado: false,

  },{

    id: 2,
    nombre: 'Tarea 2',
    completado: false,

  }];

  newTask(tarea: Tarea ):void{
    tarea.id = this.tareas.length +1;
    this.tareas.push(tarea)
  }


  getTask(): Tarea[]{
    return this.tareas;
  }

  removeTask(index:number){

    this.tareas.splice(index,1);
    for (let i = 0; i < this.tareas.length; i++) {
      this.tareas[i].id = i + 1;
    }
  }
}
