import {SET_REQUEST, SET_SHOW, SET_ACTIONFORM } from "./type"

export const setRequest = (request) => {
    return {
        type: SET_REQUEST,
        payload: request
    }
}

export const setShow = (show) => {
    return {
        type: SET_SHOW, 
        payload: show
    }
}

export const setActionForm = (actionForm) =>{
    return {
        type: SET_ACTIONFORM,
        payload: actionForm
    }
}