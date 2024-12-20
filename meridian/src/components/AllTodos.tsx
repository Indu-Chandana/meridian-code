import { Todo } from '@/app/page';
import React from 'react'

const AllTodos = ({ todos }: { todos: Todo[] }) => {
    return (
        <>
            <ul className="space-y-4">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex justify-between items-center px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                    >
                        <span className="text-lg">{todo.title}</span>
                        <span className="text-gray-500">{todo.progress}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default AllTodos