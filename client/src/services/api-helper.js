import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000"
});


// ============== Auth ================
export const registerUser = async (registerData) => {
  try {
    const response = await api.post('/users/register', registerData)
    api.defaults.headers.common.authorization = `Bearer ${response.data.token}`
    localStorage.setItem('authToken', response.data.token)
    debugger;
    return response.data.user

  } catch (e) {
    return { error: "invalid credentials" }
  }
}

export const loginUser = async (loginData) => {
  try {
    const response = await api.post('/users/login', loginData)
    api.defaults.headers.common.authorization = `Bearer ${response.data.token}`
    localStorage.setItem('authToken', response.data.token)
    return response.data.user

  } catch (e) {
    return { error: "invalid credentials" }
  }
}

export const verifyUser = async () => {
  const token = localStorage.authToken;
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const response = await api.get('/users/verify')
    return response.data
  }
  return false
}


