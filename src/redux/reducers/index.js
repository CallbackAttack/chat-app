import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import users from './users'

const createRootReducer = () =>
  combineReducers({
    router: connectRouter(),
    users
    // сюда вставляем редьюсеры
  })

export default createRootReducer
