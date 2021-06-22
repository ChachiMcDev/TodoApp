import { searchAllTodos, hideComplete, toggleTodoStatus, saveTodos, gettoDos, loadTodos, removeTodo } from './todos'
import { getFilters } from './filters'

const filters = getFilters()
const todos = gettoDos()

//
//render the todos
const renderTodos = () => {


    const todoElSelect = document.querySelector('#todos')
    const searchTodos = searchAllTodos(todos, filters);
    const hideCompleted = hideComplete(searchTodos);
    console.log('wtf', todos)
    todoElSelect.innerHTML = '';

    if (todos.length > 0) {
        todoElSelect.appendChild(createTODOMessage(hideCompleted));
        searchTodos.forEach((item) => {
            todoElSelect.appendChild(createTodoDOM(item));
        })
    } else {

        const notodos = document.createElement('p')
        notodos.classList.add('empty-message')
        notodos.textContent = `Let's add some ToDos!`
        todoElSelect.appendChild(notodos)
    }

}

//generate the TODO DOM
const createTodoDOM = (item) => {
    const todoEl = document.createElement('label');
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoText.classList.add('list-item__title')
    checkbox.classList.add('checkbox')
    removeButton.classList.add('button', 'button--text')


    //setup checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = item.complete;
    containerEl.appendChild(checkbox);
    checkbox.addEventListener('change', (event) => {
        toggleTodoStatus(item.id);
        saveTodos(todos);
        renderTodos();
    })

    todoText.textContent = item.text;
    containerEl.appendChild(todoText);
    todoEl.appendChild(containerEl)


    removeButton.textContent = 'REMOVE';
    todoEl.appendChild(removeButton);
    removeButton.addEventListener('click', (event) => {
        //console.log(item.id, todos)
        removeTodo(item.id);
        //console.log(item.id, todos)
        saveTodos(todos);

        renderTodos()
    });


    return todoEl;
}

const createTODOMessage = (completedCount) => {
    const summary = document.createElement('h2');
    summary.classList.add('list-title')
    const plural = completedCount.length === 1 ? '' : 'S'
    summary.textContent = `You have ${completedCount.length} TODO${plural} left to complete`

    return summary;
}


export { renderTodos }