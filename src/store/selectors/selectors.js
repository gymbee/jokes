export const getAllSaved = state => {
    return Object.values(state.savedFacts)
}

export const getSavedByCategory = state => category => {
    const savedFactsArr = Object.values(state.savedFacts)
    return !savedFactsArr.length ? [] 
        : savedFactsArr.filter(fact => fact.categories.includes(category))
}

export const getSavedById = state => id => {
    return state.savedFacts[id]
}