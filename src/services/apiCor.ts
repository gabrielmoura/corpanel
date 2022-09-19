/*
 *  Copyright (c) Gabriel Moura  2022
 *  Email: gabriel.blx32@gmail.com
 */

const axios = require('axios');
import {format, hoursToSeconds, subDays} from 'date-fns'
import {getToken, hasToken, setToken} from './cache'

export default class Api {
    private readonly baseURL: string;
    private username: string;
    private password: string;
    private readonly dataBusca: Date | number;
    public token: string | null;

    constructor(username: string, password: string, baseURL = 'http://ws.status.rio') {
        this.baseURL = baseURL;
        this.username = username;
        this.password = password;
        this.dataBusca = new Date();
        this.token = null;
    }

    async getToken() {
        return await getToken();
    }

    async autorization() {
        if (!hasToken()) {
            await axios({
                method: 'post',
                baseURL: this.baseURL,
                url: '/corws/login',
                headers: {"Content-Type": "application/json"},
                data: {
                    username: this.username,
                    password: this.password
                }
            },).then((r: { data: string; }) => {
                setToken(r.data, hoursToSeconds(24) * 9);
                this.token = r.data;
                if (process.env.NODE_ENV !== "production") {
                    console.log(r);
                }
            }).catch((err: any) => {
                console.error(err);
            });
        }
    }

    async getData() {
        if (!!this.token) {
            return axios({
                method: 'get',
                baseURL: this.baseURL,
                url: `/statuscomando/v2/listarEventos`,
                headers: {
                    'Authorization': this.token,
                    'Content-Type': 'application/json'
                },
                data: {
                    'inicio': format(subDays(this.dataBusca, 29), 'yyyy-MM-dd 00:00:00.0')
                }
            })
        }

    }

    async getClose() {
        if (!!this.token) {
            return axios({
                method: 'get',
                baseURL: this.baseURL,
                url: `/statuscomando/v2/listarEventos`,
                headers: {
                    'Authorization': this.token,
                    'Content-Type': 'application/json'
                },
                data: {
                    'inicio': format(this.dataBusca, 'yyyy-MM-dd 00:00:00.0'),
                    'status': 'FECHADO'
                }
            })
        }

    }

    async getOpen() {
        if (!!this.token) {
            return axios({
                method: 'get',
                baseURL: this.baseURL,
                url: `/statuscomando/v2/listarEventosAbertos`,
                headers: {
                    'Authorization': this.token,
                    'Content-Type': 'application/json'
                }
            })
        }

    }

    async getActivity(eventoId: string) {
        if (!!this.token) {
            return axios({
                method: 'get',
                baseURL: this.baseURL,
                url: `/statuscomando/v2/listarAtividadesDoEvento?eventoId=${eventoId}`,
                headers: {
                    'Authorization': this.token,
                    'Content-Type': 'application/json'
                }
            })
        }
    }
}