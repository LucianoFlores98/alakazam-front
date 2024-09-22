import axios from "axios"

export const TestingService = () => {
  return axios.get("https://rickaewadi.com/api/character/02")
}