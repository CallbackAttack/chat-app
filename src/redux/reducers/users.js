import { AUTH_LOGIN, AUTH_PASSWORD } from "../types"

const initialState = {
  userlist: {
    user: 'Yan',
    password: '1246'
  },
  currentEmail: '',
  currentPassword: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN: {
      return {
        ...state,
        currentEmail: action.currentEmail,
      }
    }
    case AUTH_PASSWORD: {
      return {
        ...state,
        currentPassword: action.currentPassword,
      }
    }
    default:
      return state
  }
}
