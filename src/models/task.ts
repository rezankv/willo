// import { TagEnum } from "../enums";

interface ITask {
  id?: string;
  title?: string;
  // tags?: TagEnum[];
  description?: string;
  isImportant?: boolean;
  isCompleted?: boolean;
  isDeleted?: boolean;
}
export class TaskModel {
  props?: ITask = undefined;

  constructor(data?: ITask) {
    if (data) this.props = data;
  }

  getId(): string {
    return this.props?.id || "";
  }
  getTitle(): string {
    return this.props?.title || "";
  }
  // getTags(): TagEnum[] {
  //   return this.props?.tags || [];
  // }
  getDescription(): string {
    return this.props?.description || "";
  }
  getIsImportant(): boolean {
    return this.props?.isImportant || false;
  }
  getIsCompleted(): boolean {
    return this.props?.isCompleted || false;
  }
  getIsDeleted(): boolean {
    return this.props?.isDeleted || false;
  }
}
