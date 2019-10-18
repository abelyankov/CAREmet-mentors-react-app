import * as types from '../constants/ActionTypes'

export const login = (userName, password) => ({type: types.LOGIN, userName, password});