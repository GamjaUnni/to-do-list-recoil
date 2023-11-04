import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { toDoListAtom } from "../atom/todoAtom";

const InputForm = () => {
  const [inpValue, setInpValue] = useState("");
  const setToDoList = useSetRecoilState(toDoListAtom);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setToDoList((prev) => [
      ...prev,
      {
        id: Date.now(),
        value: inpValue,
        mode: false,
      },
    ]);
    setInpValue("");
  };
  return (
    <div>
      <h1>할일을 입력하는 Input 컴포넌트 입니다.</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={inpValue}
          onChange={(e) => setInpValue(e.target.value)}
          placeholder="할일을 입력하세요😊"
        />
        <button>등록</button>
      </form>
    </div>
  );
};
export default InputForm;
