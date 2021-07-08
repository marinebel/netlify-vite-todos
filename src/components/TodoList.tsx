import React, { useContext, useEffect } from 'react';
import { storeContext } from '../Store';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
	const {state, dispatch} = useContext(storeContext)
	useEffect(() => {
		dispatch({type:'FETCHTODOS'})
	}, [])
	return (
		<div className="flex flex-col">
			<h2 className="mt-6 text-4xl text-center text-gray-800">Todos List</h2>
			<TodoForm />
			<div className="flex justify-center mt-8">
				<div className="w-1/2 max-w-2xl bg-white rounded-lg shadow-xl">
					<ul className="divide-y divide-gray-300">
						{state.todos.map((todo, index) => <TodoItem key={index} todo={todo} />)}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default TodoList;