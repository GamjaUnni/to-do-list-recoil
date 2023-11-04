import { useState } from "react";
import { toDoListAtom } from "../atom/todoAtom";
import { useRecoilState } from "recoil";
import ToDoListItem from "./ToDoListItem";
import ModifyForm from "./ModifyForm";

const ToDoList = () => {
  // useRecoilState // 리스트, 셋함수 두개 다뽑아낼떄(읽기,수정 동시에)
  // -> const [list, setList]
  // useRecoilValue // 리스트만 뽑아낼때(읽기모드)
  // useSetRecoilState // 셋함수만 뽑아낼때(수정모드)
  const [toDoList, setToDoList] = useRecoilState(toDoListAtom);

  const [inpModify, setInpModify] = useState("");

  return (
    <div>
      <h1>할일 리스트 컴포넌트 입니다.</h1>
      <ul>
        {toDoList.map(({ id, value, mode }) =>
          mode ? (
            <ModifyForm
              key={id}
              id={id}
              inpModify={inpModify}
              setInpModify={setInpModify}
            />
          ) : (
            <ToDoListItem
              key={id}
              id={id}
              value={value}
              setInpModify={setInpModify}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default ToDoList;
