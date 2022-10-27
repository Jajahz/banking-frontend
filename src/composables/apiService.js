import api from './api'

class ApiService {
  async getUsers() {
    return await api.get(
      `/users`
    )
  }
  async getUser(id) {
    return await api.get(
      `/users/${id}`
    )
  }
}
export default new ApiService()