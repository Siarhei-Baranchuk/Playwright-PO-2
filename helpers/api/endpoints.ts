require('dotenv').config()

export const API_BASE_URL = process.env.ENV_BASE_API_URL

export const BASE_API_URL = {
  USER_LIST: `${API_BASE_URL}users?page=1`,
  SINGLE_USER: `${API_BASE_URL}users/1`,
  INVALID_USER: `${API_BASE_URL}users/23`,
  RESOURCE_LIST: `${API_BASE_URL}unknown`,
  SINGLE_RESOURCE: `${API_BASE_URL}unknown/1`,
  INVALID_RESOURSE: `${API_BASE_URL}unknown/23`,
  USER_CREATE: `${API_BASE_URL}api/users`,
  USER_UPDATE: `${API_BASE_URL}users/2`,
  USER_DELETE: `${API_BASE_URL}users/3`,
  USER_REGISTER: `${API_BASE_URL}register`,
  USER_LOGIN: `${API_BASE_URL}login`,
};