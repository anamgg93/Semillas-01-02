import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../../interfaces/tarea.interface';
import { TaskService } from '../../services/task.service';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {

  @Input()
  public tareas: Tarea[] = [{
    id: 0,
    nombre: 'Tarea 0',
    completado: false,

}];

@Output()
public onRemove:EventEmitter<number> = new EventEmitter();

removeTask(index:number):void{
this.onRemove.emit( index );
}



}
