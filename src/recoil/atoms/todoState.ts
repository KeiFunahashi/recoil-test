import { atom, selector } from "recoil";

export type Todo = {
    id: number;
    title: string;
    isCompleted: boolean;
}

export const todoState = atom<Todo[]>({
    key: "todoState",
    default: selector({
        key: 'todoState/default',
        get: async () => {
            const response = await fetch('http://127.0.0.1:4000/todos');
            const data = await response.json();
            return data;
        }
    }),
});
