import axios from "axios";

const http = axios.create({
    baseURL: 'http://backapp:3000'
})

export default http;