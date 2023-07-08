export interface ConfirmProps {
  show: boolean;
  setShow: (bool: boolean) => void;
  title: string;
  onConfirm: () => void;
}
