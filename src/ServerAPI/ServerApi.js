import axios from "axios";



const ServerApi = axios.create({
    baseURL: 'http://mqsoft.ddns.net:9999',
});

export const get = async (part, op = {}) => {
    const response = await ServerApi.get(part, op); // Use ServerApi.get instead of request.get
    return response.data;
}

export const post = async (part, op = {}) => {
    const response = await ServerApi.post(part, op); // Use ServerApi.get instead of request.get

    return response.data;
}


export const getDoiTuong = async (part, op = {}) => {
    const response = await ServerApi.get('/danhmuc/getdoituong', op); // Use ServerApi.get instead of request.get
    return response.data;
}


export const getYear = async (part, op = {}) => {
    const response = await ServerApi.get('/EmrViewMedicalRecord/GetYearTreatment', op); // Use ServerApi.get instead of request.get
    return response.data;
}

export const getGetListEncounter = async (part, op = {}) => {
    const response = await ServerApi.get('EmrViewMedicalRecord/GetListEncounter', op); // Use ServerApi.get instead of request.get
    return response.data;
}



export default ServerApi;