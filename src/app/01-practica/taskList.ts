import { Task } from './interface/task.model';


export class TaskList{

  public tasks!: Task [];



  addTask ( task: Task ): void{

      this.tasks.push(task);

  }

  removeTask ( id: number ): void {

      this.tasks = this.tasks.filter(task => task.id !== id);

  }

  completeTask ( id: number) : void{

      const task = this.tasks.find( task => task.id === id);

          if (task){
              task.completed = true;
          }

      }

  printTasks(): void {

      console.log("Lista de tareas:");
      this.tasks.forEach(task => {
          console.log(`ID: ${task.id} | Nombre: ${task.name} | Completada: ${task.completed}`);
      });
  }

}












export{}
