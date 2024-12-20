"use client";

import AddTodo from "@/components/AddTodo";
import AllTodos from "@/components/AllTodos";
import API from "@/utils/api";
import { useEffect, useState } from "react";

export type Todo = {
  id?: number
  title: string
  progress: string;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const { data } = await API.get("/todo");
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const handleAddTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <main className="max-w-lg mx-auto text-center mt-10">
      <h1 className="text-3xl font-bold mb-6">Todo App</h1>
      <AddTodo onAdd={handleAddTodo} />
      <AllTodos todos={todos} />
    </main>
  );
}
