import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface ITodo {
  id: number;
  text: string;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

const todoStoreKey = "Todo";
const savedValue = localStorage.getItem(todoStoreKey);

export const toDoState = atom<ITodo[]>({
  key: "toDos",
  default: savedValue ? JSON.parse(savedValue) : [],
  effects: [
    ({ onSet }) => {
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(todoStoreKey)
          : localStorage.setItem(todoStoreKey, JSON.stringify(newValue));
      });
    },
  ],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((item) => item.category === category);
  },
});
// useEffect(() => {
//   localStorage.setItem(TODOS_KEY, JSON.stringify(rawToDos));
//   }, [rawToDos]);
//   note that rawToDos is from toDoState, not from toDoSelector.
//   default value of atom: JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
