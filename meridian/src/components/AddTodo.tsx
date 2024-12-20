import { useState } from 'react';
import API from '../utils/api';
import { Todo } from '@/app/page';

interface AddTodoProps {
    onAdd: (newTodo: Todo) => void;
}


export default function AddTodo({ onAdd }: AddTodoProps) {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title) return;

        try {
            const { data } = await API.post('/todo', { title, progress: 'PENDING' });
            onAdd(data);
            setTitle('');
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex gap-4 justify-center items-center mb-6"
        >
            <input
                type="text"
                placeholder="New Todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg "
            />
            <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 "
            >
                Add Todo
            </button>
        </form>
    );
}
