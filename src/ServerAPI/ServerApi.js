import axios from "axios";



const ServerApi = axios.create({
    baseURL: 'http://mqsoft.ddns.net:9999',
});

export const get = async (part, op = {}) => {
    const response = await ServerApi.get(part, op); // Use ServerApi.get instead of request.get
    return response.data;
}

export const post = async (part, op = {}) => {
    const response = await ServerApi.post(part, op);

    return response.data;
}


export const getDoiTuong = async (part, op = {}) => {
    const response = await ServerApi.get('/danhmuc/getdoituong', op);
    return response.data;
}


export const getYear = async (part, op = {}) => {
    const response = await ServerApi.get('/EmrViewMedicalRecord/GetYearTreatment', op);
    return response.data;
}

export const getGetListEncounter = async (part, op = {}) => {
    const response = await ServerApi.get('/EmrViewMedicalRecord/GetListEncounter', op);
    return response.data;
}

//http://localhost:8083/EmrViewMedicalRecord/GetInformationTreatment?encounterCode=2302130950486615352&treatmentDate=02/02/2023 07:52

export const GetInformationTreatment = async (part, op = {}) => {
    const response = await ServerApi.get('/EmrViewMedicalRecord/GetInformationTreatment', op);
    return response.data;
}



export default ServerApi;