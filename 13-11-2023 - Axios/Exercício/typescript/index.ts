import axios from 'axios';

type Cep = {
    cep: number,
    state: string,
    city: string,
    neighborhood: string,
    street: string,
    service: string,
    location: { type: string, cordinates: {longitude: number, latitude: number}}
}

type Ddd = {
    state: string,
    cities: string[]
}

const req = axios.create({
    baseURL: 'https://brasilapi.com.br/api',
})

async function consultaCep(cep:number) {
    try{

        const response = await req.get(`/cep/v2/${cep}`)
        let info: Cep = {
            cep: response.data.cep,
            state: response.data.state,
            city: response.data.city,
            neighborhood: response.data.neighborhood,
            street: response.data.street,
            service: response.data.service,
            location: {
                type: response.data.location.type,
                cordinates: {
                    longitude: response.data.location.longitude, 
                    latitude: response.data.location.latitude
                }
            }
        }

        console.log(info);
        
    } catch(erro){
        console.error(erro);
    }
}

async function consultaCidadesDdd(ddd:number) {
    try {
        const response = await req.get(`/ddd/v1/${ddd}`)
        let info: Ddd = {
            state: response.data.state,
            cities: response.data.cities
        }

        console.log(info);
        
    } catch (error) {
        console.error(error);
        
    }
}

let cepInserido: number = 89084455;
let dddInserido: number = 47;

consultaCep(cepInserido);

consultaCidadesDdd(dddInserido);