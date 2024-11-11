export function login(credentials) {
  if (credentials.username === 'user' && credentials.password === 'password') {
    const token = 'fake-jwt-token'
    localStorage.setItem('token', token)
    return true
  }
  return false
}

export function logout() {
  localStorage.removeItem('token')
}
