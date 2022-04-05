export const SAVE_CATEGORIES = Symbol('Save fetched categories')
export const SAVE_FACT = Symbol('saveFact')
export const DELETE_SAVED_FACT = Symbol('deleteSavedFact')

export const saveCategories = (categories) => ({type: SAVE_CATEGORIES, categories})
export const saveFact = (fact) => ({type: SAVE_FACT, fact})
export const deleteSavedFact = (id) => ({type: DELETE_SAVED_FACT, id})