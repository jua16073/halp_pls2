import * as types from '../types'


// User Creation
export const createUser = (
  id, 
  name,
  mail, 
  password
) => ({
  type: types.USER_CREATED,
  payload:{
    id,
    name,
    mail,
    password,
  }
})

export const userCreated = (
)  => ({
  type: types.USER_CREATED_DONE,
  payload: {

  }
})

export const userCreatedFail =(
  message
) => ({
  type: types.USER_CREATED_FAILED,
  payload:{
    message,
  }
})


// User Login
export const userLogin = (
mail,
password
) => ({
  type: types.USER_LOGGED,
  payload: {
    mail,
    password,
  }
})

export const userLogged = (
) => ({
  type: types.USER_LOGGED_DONE,
  payload: {
    token,
  }
})

export const userLoggedFail = (
  message
) => ({
  type: types.USER_LOGGED_FAILED,
  payload:{
    message,
  }
})


// User Logout
export const userLogOut = (
  mail
) => ({
  type: types.USER_LOGGED_OUT,
  payload: {
    mail,
  }
})

export const userLoggedOut = (
) => ({
  type: types.USER_LOGGED_OUT_DONE,
  payload: {

  },
})

export const userLoggedOutFail = (
  message,
) => ({
  type: types.USER_LOGGED_OUT_FAILED,
  payload:{
    message,
  }
})



// Tasks Creation
export const createFtask = (
  title,
  description,
  duration,
  priority,
  limit_date,
  daily,
) => ({
  type: types.FTASK_CREATED,
  payload: {
    title,
    description,
    duration,
    priority,
    limit_date,
    daily
  }
})

export const ftaskCreated = (
) => ({
  type: types.FTASK_CREATED_DONE,
  payload:{

  }
})

export const ftaskCreatedFail = (
  message,
) => ({
  type: types.FTASK_CREATED_FAILED,
  payload:{
    message
  }
})

// Task postponing 
export const ftaskPostponing = (
  idUser,
  idTask, 
) => ({
  type: types.FTASK_POSTPONED,
  payload:{
    idUser,
    idTask,
  }
})

export const ftaskPostponed = (
) => ({
  type: types.FTASK_POSTPONED_DONE,
  payload: {

  }
})

export const ftaskPostponedFail = (
  message
) => ({
  type: types.FTASK_POSTPONED_FAILED,
  payload:{
    message
  }
})

// FTask Completed
export const ftaskComplete = (
  idUser,
  idTask,
) => ({
  type: types.FTASK_COMPLETED,
  payload: {
    idUser,
    idTask,
  }
})

export const ftaskCompleted = (
) => ({
  type: types.FTASK_COMPLETED_DONE,
  payload:{

  }
})

export const ftaskCompletedFail = (
  message,
) => ({
  type: types.FTASK_COMPLETED_FAILED,
  payload:{
    message,
  }
})

// Task eliminated
export const ftaskEliminate = (
  idUser,
  idTask,
) => ({
  type: types.FTASK_ELIMINATED,
  payload: {
    idUser,
    idTask,
  }
})

export const ftaskEliminated = (
) => ({
  type: types.FTASK_ELIMINATED_DONE,
  payload: {

  }
})

export const ftaskEliminatedFail = (
  message,
) => ({
  type: types.FTASK_ELIMINATED_FAILED,
  payload:{
    message
  }
})

