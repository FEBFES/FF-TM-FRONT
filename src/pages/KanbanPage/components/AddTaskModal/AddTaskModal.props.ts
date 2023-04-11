export interface AddTaskModalProps {
  show: boolean;
  setShow: (bool: boolean) => void;
  onSubmit: (name: string, description: string) => void;
}
