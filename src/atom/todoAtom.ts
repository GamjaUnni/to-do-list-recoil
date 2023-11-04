import { atom } from "recoil";

export interface ToDoListType {
  id: number;
  value: string;
  mode: boolean;
}

export const toDoListAtom = atom<ToDoListType[]>({
  key: "toDoListAtom",
  default: [],
});
