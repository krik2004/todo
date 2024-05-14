import React from 'react'
import ReactDOM from 'react-dom/client'

import AppHeader from './components/app-header'
import ToDoList from './components/todo-list'
import SearchPanel from './components/search-panel'

const App = () => {
	const todoData = [
		{ label: 'пить кофе', important: false, id: 1 },
		{ label: 'делать реакт', important: true, id: 2 },
		{ label: 'поесть', important: false, id: 3 },
	]

	return (
		<div>
			<AppHeader />
			<SearchPanel />
			<ToDoList todos={todoData} />
		</div>
	)
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)

// If you want to start measuring performance in your app, pass a function

// reportWebVitals()
