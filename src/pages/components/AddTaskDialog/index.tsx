import React from "react";
import Dialog from "../../../components/UI/Dialog";
import Input from "../../../components/UI/Input";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const AddTaskDailog = ({ isOpen, onClose }: Props) => {
  return (
    <Dialog
      open={isOpen}
      title="Add Task"
      description="start a new journey!"
      onClose={()=>onClose()}
    >
      <Input placeholder="add new thing" />
      <Input placeholder="add new thing" />
      <Input placeholder="add new thing" />
      <Input placeholder="add new thing" />
      <Input placeholder="add new thing" />
    </Dialog>
  );
};

export default AddTaskDailog;
