import axios from "axios";

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDU3MWJmYTVlNGViNjc1MGE1N2YyNjRkNDVmMmIyNSIsIm5iZiI6MTc0NzIzMTQ4Mi43MSwic3ViIjoiNjgyNGEyZmE2MDk3MjgzMzZhYTE2ZjBiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.UvxFS8ybST1Es4DSspU7_5JwUEUZ64OF0mlrhfKpmRU'
const baseUrlForDailyMovie = 'https://api.themoviedb.org/3'

const axiosInst = axios.create({
    baseURL: baseUrlForDailyMovie,
    headers: {
        Authorization: `Bearer ${API_TOKEN}`
    }
})

export const fetchFilms = async () => {
    const res = await axiosInst.get(`/trending/movie/day`)
    return res.data.results
}