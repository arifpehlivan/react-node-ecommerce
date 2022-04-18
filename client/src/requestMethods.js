import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWI2ODFhNzM3Y2JjN2UzNzAzOTNiZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDMxODc4MCwiZXhwIjoxNjUwNTc3OTgwfQ.VeZwtuqy1O4TQq231rEYSucL9fyiZVkxkTW9lQcWBYA"

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
});