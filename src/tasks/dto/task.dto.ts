import { TaskStatus } from "../task.entity"

export class CreateTasksDto{
    title: string
    description: string
}

export class UpdateTaskDto{
    title?: string
    description?: string
    status?: TaskStatus
}