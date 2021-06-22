import { v4 as uuidv4 } from 'uuid'

let todos = []


//get the todos from localStorage
const loadTodos = () => {
    const todoJSON = localStorage.getItem('todos');

    try {
        return todoJSON != null ? JSON.parse(todoJSON) : [];
    } catch (e) {
        console.log('setting storage to []', e.message)
        return [];
    }

}



const gettoDos = () => todos

//saveTodos to local storage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));


}


const removeTodo = (todoid) => {
    const todoIndex = todos.findIndex((element) => element.id === todoid)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
    return todos
}

const toggleTodoStatus = (id) => {
    const getTodo = todos.find((item) => item.id === id)
    if (getTodo) {
        getTodo.complete = !getTodo.complete
    }
}


const createdTodo = (textValue) => {

    if (textValue.length > 0) {
        todos.push({
            id: uuidv4(),
            text: textValue,
            completed: false
        })

        saveTodos(todos)
    }
}


//search all the todos
const searchAllTodos = (todos, filters) => {

    const searchAll = todos.filter((item) => {
        const searchTextTodos = item.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const toggleCompleted = !filters.hideCompleted || !item.complete;

        return searchTextTodos && toggleCompleted;
    })
    return searchAll;
}

//hide completed todos
const hideComplete = (searchedTodos) => searchedTodos.filter(item => !item.complete)

todos = loadTodos()

export { loadTodos, saveTodos, removeTodo, toggleTodoStatus, createdTodo, hideComplete, searchAllTodos, gettoDos }