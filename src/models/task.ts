import { TagEnum } from "../enums";

interface ITask {
  title: string;
  date: Date;
  tags: TagEnum[];
  description: string;
}
export class TaskModel {
  props?: ITask = undefined;

  constructor(data?: ITask) {
    if (data) this.props = data;
  }

  getTitle(): string {
    return this.props?.title || "";
  }
  getDate(): Date {
    return this.props?.date || new Date();
  }
  getTags(): TagEnum[] {
    return this.props?.tags || [];
  }
  getDescription(): string {
    return this.props?.description || "";
  }
}
