import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
standalone: true,
imports:[FormsModule, CommonModule],
selector:'app-task-list-priority',
templateUrl:'./task-list-prio.component.html'
})
export class TaskListPrioComponent {
tasks: string[] = []
newTask:string='';


addTask() {
if(this.newTask) {
this.tasks.push(this.newTask);
this.newTask='';
}
}

removeTask(index:number) {
this.tasks.splice(index,1);
}
}