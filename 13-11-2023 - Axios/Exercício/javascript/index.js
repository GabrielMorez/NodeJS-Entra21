"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const req = axios_1.default.create({
    baseURL: 'https://brasilapi.com.br/api',
});
function consultaCep(cep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield req.get(`/cep/v2/${cep}`);
            let info = {
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
            };
            console.log(info);
        }
        catch (erro) {
            console.error(erro);
        }
    });
}
function consultaCidadesDdd(ddd) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield req.get(`/ddd/v1/${ddd}`);
            let info = {
                state: response.data.state,
                cities: response.data.cities
            };
            console.log(info);
        }
        catch (error) {
            console.error(error);
        }
    });
}
let cepInserido = 89084455;
let dddInserido = 47;
consultaCep(cepInserido);
consultaCidadesDdd(dddInserido);
