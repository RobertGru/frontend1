import * as UTIL from '../utils/api'

export const REQUEST_CATS = 'REQUEST_CATS'
export const RECEIVE_CATS = 'RECEIVE_CATS'
export const FAILED= 'FAILED'

export function requestCategories() {
    return {
        type: REQUEST_CATS
    }
}

export function receiveCategories(json) {
    return {
        type: RECEIVE_CATS,
        items: json.categories.map(item => item.name)
    }
}

export function failedFetchCategories() {
    return {
        type: FAILED
    }
}

export function fetchCategories() {
    return function (dispatch) {
        dispatch(requestCategories())
        return fetch(
            `${UTIL.URI}/categories`,
            {
                headers: { 'Authorization': 'GET MY CATS' }
            })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                return response.json()
            })
            .catch((error) => {
                console.log(error)
                return null
            })
            .then(json => {
                if (!json) {
                    return dispatch(failedFetchCategories())
                }
                return dispatch(receiveCategories(json))
            })
    }
}
