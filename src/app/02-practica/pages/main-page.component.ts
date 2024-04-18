import { Component} from '@angular/core';
import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-02-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {


  constructor( public taskService: TaskService)  {}



}
