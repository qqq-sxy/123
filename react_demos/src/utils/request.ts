import axios from 'axios';

const Axios = axios.create({
    timeout: 50000,
    withCredentials: true
});

const request = async(config) => {
    return Axios(config).then((res) => {
        return res.data;
    })
}

export default request;

