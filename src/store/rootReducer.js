import {SAVE_CATEGORIES, SAVE_FACT, DELETE_SAVED_FACT} from './actions/actions'

const initialState = {
    categories: [],
    savedFacts: {},
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }

        case SAVE_FACT:
            var newFacts = state.savedFacts
            newFacts[action.fact.id] = action.fact
            return {
                ...state, savedFacts: newFacts
            }

        case DELETE_SAVED_FACT:
            var _newFacts = state.savedFacts
            delete _newFacts[action.id]
            return {
                ...state, savedFacts: _newFacts
            }

        default:
            return state
    }
}