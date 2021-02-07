import { Module } from '@nestjs/common';
import { TaskService } from './services/task';
import { TasksController } from './controllers/tasks';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './schemas/Task';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  controllers: [TasksController],
  providers: [TaskService],
})
export class TasksModule {}
