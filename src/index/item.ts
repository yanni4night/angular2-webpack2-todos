export interface Item {
  id: string | number;
  content: string;
  finished?: boolean;
  isEditing?: boolean;
}
