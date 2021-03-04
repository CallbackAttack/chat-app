import { AUTH_LOGIN, AUTH_PASSWORD} from "./types"


// currency actions

export function getAuthLogin(email) {
  return {
    type: AUTH_LOGIN,
    email
  }
}

export function getAuthPassword(password) {
  return {
    type: AUTH_PASSWORD,
    password,
  }
}
