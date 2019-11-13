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
    return response.data.user

  } catch (e) {
    return { error: "Invalid Credentials" }
  }
}

export const loginUser = async (loginData) => {
  try {
    const response = await api.post('/users/login', loginData)
    api.defaults.headers.common.authorization = `Bearer ${response.data.token}`
    localStorage.setItem('authToken', response.data.token)
    return response.data.user

  } catch (e) {
    return { error: "Invalid Credentials" }
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

// ============== Blogs ================
export const getAllBlogs = async () => {
  const response = await api.get('/blogs');
  return response.data;
}

export const getAllUsers = async () => {
  const response = await api.get('/users');
  return response.data;
}

export const getOneBlog = async (blog_id) => {
  const response = await api.get(`/blogs/${blog_id}`);
  return response.data;
}

export const getAllUserBlogs = async (user_id) => {
  const response = await api.get(`/users/${user_id}/blogs`);
  return response.data;
}

export const postBlog = async (user_id, blogData) => {
  const response = await api.post(`/users/${user_id}/blogs`, blogData);
  return response.data;
}

export const putBlog = async (blog_id, blogData, userId) => {
  const response = await api.put(`/users/${userId}/blogs/${blog_id}`, blogData);
  return response.data;
}

export const deleteBlog = async (blog_id) => {
  const response = await api.delete(`/users/:user_id/blogs/${blog_id}`);
  return response.data;
}

// ============== Comments ================

export const getAllComments = async (blog_id) => {
  const response = await api.get(`/blogs/${blog_id}/comments`);
  return response.data;
}

export const postComment = async (blog_id, commentData) => {
  const response = await api.post(`/blogs/${blog_id}/comments`, commentData);
  return response.data;
}

export const putComment = async (comment_id, commentData) => {
  const response = await api.put(`/blogs/:blog_id/comments/${comment_id}`, commentData);
  return response.data
}

export const deleteComment = async (comment_id) => {
  const response = await api.delete(`/blogs/:blog_id/comments/${comment_id}`);
  return response.data
}