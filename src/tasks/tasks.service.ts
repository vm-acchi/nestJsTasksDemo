import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {

    private tasks: Task[] = [{
        id: '1',
        title: 'Tarea demo',
        description: 'Esta es una tarea demo',
        status: TaskStatus.PENDING
    }];


    getTaskById(id: string): Task{
        return this.tasks.find(task => task.id === id)
    }
    indexTasks(){
        return this.tasks;
    }
    createTasks(title: string, description: string){
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(task)
        return task
    }
    updateTasks(id: string, updateFileds: any){
        const task = this.getTaskById(id)
        const newTask = Object.assign(task, updateFileds)
        this.tasks.map(task => task.id === id ? newTask : task)

        return 'La tarea con id '+id+' fue actualizada'

    }
    deleteTasks(id: string){
        this.tasks = this.tasks.filter(task => task.id !== id)
    }
}
