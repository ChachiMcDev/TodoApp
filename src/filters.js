const filters = {
    searchText: '',
    hideCompleted: false,
    completed: false
}



const getFilters = () => filters

const setFilters = ({ searchText, hideCompleted, completed }) => {
    if (typeof searchText === 'string') {
        filters.searchText = searchText
    }

    if (typeof hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted
    }

    if (typeof completed === 'boolean') {
        filters.completed = completed
    }
}



export { getFilters, setFilters }