import axios from "axios";

const ServerApi = axios.create({
    baseURL: 'http://mqsoft.ddns.net:9999',
});

export const get = async (part, op = {}) => {
    const response = await ServerApi.get(part, op); // Use ServerApi.get instead of request.get
    return response.data;
}

export default ServerApi;