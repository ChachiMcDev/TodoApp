
import { createdTodo } from './todos'
import { renderTodos } from './view'
import { setFilters } from './filters'





renderTodos()

document.querySelector('#filtertodos').addEventListener('input', (event) => {
    //  filters.searchText = event.target.value;
    setFilters({ searchText: event.target.value })
    renderTodos()
})


document.querySelector('#new-todo').addEventListener('submit', (event) => {
    event.preventDefault();
    createdTodo(event.target.elements.text.value.trim())
   
    renderTodos()
    event.target.elements.text.value = '';

});




document.querySelector('#hidecomplete').addEventListener('change', (event) => {
    //filters.hideCompleted = event.target.checked;
    setFilters({ hideCompleted: event.target.checked })
    renderTodos()
})