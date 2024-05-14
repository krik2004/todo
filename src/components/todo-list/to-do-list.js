import React from 'react'
import ToDoListItem from '../to-do-list-item'
import './todo-list.css'

const ToDoList = ({ todos }) => {
	const elements = todos.map(item => {
		//создаем массив элементов Реакт
		return (
			<li key={item.id} className='list-group-item'>
				{/* можно записать {...item} т.о передаем все свойства объекта в качестве
				свойств внутрь компонента */}
				<ToDoListItem label={item.label} important={item.important} />
			</li>
		)
	})
	return <ul className='list-group todo-list'>{elements}</ul> //добавляем массив элементов поочередно
}

export default ToDoList
