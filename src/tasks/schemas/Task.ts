import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ITask } from '../entities/task';

export type CatDocument = Task & Document;

@Schema()
export class Task extends Document implements ITask {
  @Prop()
  description: string;

  @Prop()
  completed: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
