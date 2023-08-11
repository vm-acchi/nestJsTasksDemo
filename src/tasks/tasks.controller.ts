import { Body, Controller, Get, Post, Delete, Param, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTasksDto, UpdateTaskDto } from './dto/task.dto'
@Controller('tasks')
export class TasksController {

    constructor(private tasksServices: TasksService){}
    @Get()
    indexTasks(){
        return this.tasksServices.indexTasks();
    }

    @Post()
    createTasks(@Body() newTask: CreateTasksDto){
        return this.tasksServices.createTasks(newTask.title, newTask.description)
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string){
        this.tasksServices.deleteTasks(id)
    }

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updateFields: UpdateTaskDto  ){
        this.tasksServices.updateTasks(id, updateFields)
    }
    
}
