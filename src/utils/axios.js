import axios from 'axios';
import {AUTH_TOKEN} from "../constants";
import {API_URL} from "../constants/api";



axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.interceptors.request.use(config => ({
    ...config,
    headers: {
        ...config.headers,
        "Authorization": JSON.parse(localStorage.getItem(AUTH_TOKEN)),

    },
}))


export const RegisterUser= ({image = null, FirstName = '', Lastname , username = '', password }) => {
    const fd = new FormData();
    fd.append('image', image);
    fd.append('FirstName', FirstName);
    fd.append('Lastname',Lastname);
    fd.append('username', username);
    fd.append('password', password);


    return axios.post(`${API_URL}/auth/register`, fd, {headers: {'Content-Type': 'multipart/form-data'}});
};