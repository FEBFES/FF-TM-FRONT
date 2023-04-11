export interface IToast {
  id: string;
  type?: 'warning' | 'error' | 'success' | 'default';
  message: string;
  delay: number;
}
