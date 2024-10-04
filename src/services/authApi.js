import axios from "axios";
axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
}

export async function registration(credentials) {
    const response = await axios.post("/users/signup", credentials);
    setAuthHeader(response.data.token);
    return response.data; 
}

export async function logIn(credentials) {
    const response = await axios.post("/users/login", credentials);
    setAuthHeader(response.data.token);
    return response.data; 
}

export async function logOut() {
    await axios.post("/users/logout");
    clearAuthHeader();
}

export async function refresh() {
    const response = await axios.get("/users/current");
    return response.data; 
}