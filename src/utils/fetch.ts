import { api } from '../services/api'

export async function fetch(url: string) {
  const response = await api.get(url)
  return response?.data
}
