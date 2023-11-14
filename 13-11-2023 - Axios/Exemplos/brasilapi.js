import axios from 'axios';

const brasilApi = axios.create({
    baseURL: 'https://brasilapi.com.br/api',
});

brasilApi.get('/cep/v2/89084455').then((data) => {
    console.log(data);
})