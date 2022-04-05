import Api from '../../api/index'
import { saveCategories } from './actions'



export function fetchCategories() {
    return async function(dispatch)  {
        try {
            const categories = await Api.fetchCategories()
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