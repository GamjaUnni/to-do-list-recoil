import { toDoListAtom } from "../atom/todoAtom";
import { useSetRecoilState } from "recoil";

interface ModifyFormProps {
  id: number;
  setInpModify: React.Dispatch<React.SetStateAction<string>>;
  inpModify: string;
}

const ModifyForm = ({ id, setInpModify, inpModify }: ModifyFormProps) => {
  const setToDoList = useSetRecoilState(toDoListAtom);
  const onSave = (id: number) => {
    setToDoList((prev) =>
      prev.map((v) =>
        v.id === id ? { ...v, value: inpModify, mode: !v.mode } : v
      )
    );
  };

  const onToggle = (id: number) => {
    setToDoList((prev) =>
      prev.map((v) => (v.id === id ? { ...v, mode: !v.mode } : v))
    );
  };

  return (
    <div>
      <input value={inpModify} onChange={(e) => setInpModify(e.target.value)} />
      <button onClick={() => onToggle(id)}>취소</button>
      <button onClick={() => onSave(id)}>저장</button>
    </div>
  );
};

export default ModifyForm;
