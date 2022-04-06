import Api from '../../api/index'
import { saveCategories } from './actions'

export function fetchCategories() {
    return async function(dispatch)  {
        try {
            const categoriesRaw = await Api.fetchCategories()
            const categories = categoriesRaw.map(_category =>({
                label: _category.replace(/^\w/, c => c.toUpperCase()),
                value: _category
            }))
            categories.unshift({
                label: 'Any category',
                value: ''
            })
            
            dispatch(saveCategories(categories))
        } catch(e) {
            alert('Failed to fetch categories: ', e)
        }
    }
}

export async function fetchFact(category) {
    try {
        const fact = await Api.fetchFact(category)
        return fact
    } catch (e) {
        alert('Failed to fetch fact: ', e.message)
    }
}