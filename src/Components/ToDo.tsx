import { Categories, ITodo, toDoState } from "./../stateAtom";
import styled from "styled-components";
import React from "react";
import { useSetRecoilState } from "recoil";

const Text = styled.span`
  margin-right: 8px;
`;

interface IButtonProps {
  delete?: boolean;
}

const Button = styled.button<IButtonProps>`
  padding: 3px;
  margin: 3px;
  border: 1px solid ${(p) => (p.delete ? "red" : "white")};
  color: ${(p) => (p.delete ? "red" : "white")};
`;

const ToDo = ({ text, category, id }: ITodo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const onClickDelte = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <Text>{text}</Text>
      {category !== Categories.DOING && (
        <Button name={Categories.DOING} onClick={onClick}>
          Doing
        </Button>
      )}
      {category !== Categories.TO_DO && (
        <Button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </Button>
      )}
      {category !== Categories.DONE && (
        <Button name={Categories.DONE} onClick={onClick}>
          Done
        </Button>
      )}
      <Button delete onClick={onClickDelte}>
        Delete
      </Button>
    </li>
  );
};

export default ToDo;
