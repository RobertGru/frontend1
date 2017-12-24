import * as ACTIONS from '../actions/categories'

export const categories = (
    state = {
        isFetching: false,
        items: []
    },
    action
) => {
    switch (action.type) {
        case ACTIONS.REQUEST_CATS:
            return {
                ...state,
                isFetching: true,
                failedToLoadCategories: false
            }
        case ACTIONS.RECEIVE_CATS:
            return {
                ...state,
                isFetching: false,
                items: action.items,
                failedToLoadCategories: false
            }
            case ACTIONS.FAILED:
            return {
                ...state,
                isFetching: false,
                failedToLoadCategories: true,
                items: []
            }
        default:
            return state
    }
}
