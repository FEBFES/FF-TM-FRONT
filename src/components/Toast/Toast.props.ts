export interface IToast {
  id: string;
  type?: 'warning' | 'error' | 'success' | 'primary';
  message: string;
  delay: number;
}
