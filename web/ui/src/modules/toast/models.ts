import { ToastType } from "./enums";

export interface IToast {
  id: string,
  type: ToastType,
  message: string,
  icon: string
  onRemove(id: string): void 
}