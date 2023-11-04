import { toDoListAtom } from "../atom/todoAtom";
import { useSetRecoilState } from "recoil";

interface ToDoListType {
  id: number;
  value: string;
  setInpModify: React.Dispatch<React.SetStateAction<string>>;
}

const ToDoListItem = ({ id, value, setInpModify }: ToDoListType) => {
  const setToDoList = useSetRecoilState(toDoListAtom);
  const onDelete = (id: number) => {
    setToDoList((prev) => prev.filter((c) => c.id !== id));
  };

  const onToggle = (id: number, value?: string) => {
    setToDoList((prev) =>
      prev.map((v) =>
        v.id === id ? { ...v, mode: !v.mode } : { ...v, mode: false }
      )
    );

    if (value) setInpModify(value);
  };

  return (
    <li>
      {value}
      <button onClick={() => onToggle(id, value)}>수정</button>
      <button onClick={() => onDelete(id)}>삭제</button>
    </li>
  );
};

export default ToDoListItem;
