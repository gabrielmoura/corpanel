/*
 *  Copyright (c) Gabriel Moura  2022
 *  Email: gabriel.blx32@gmail.com
 */

const axios = require('axios');
import {subDays, format} from 'date-fns'

module.exports = class Api {
    token;

    constructor(username, password, baseURL = 'http://ws.status.rio') {
        this.baseURL = baseURL;
        this.username = username;
        this.password = password;
        this.dataBusca = new Date();
    }

    getToken() {
        return this.token;
    }

    setToken(token) {
        this.token = token;
    }

    async autorization() {
        if (!this.token) {
            await axios({
                method: 'post',
                baseURL: this.baseURL,
                url: '/corws/login',
                headers: {"Content-Type": "application/json"},
                data: {
                    username: this.username,
                    password: this.password
                }
            },).then(r => {
                this.token = r.data;
                if (process.env.NODE_ENV !== "production") {
                    console.log(r);
                }
            }).catch(err => {
                console.error(err);
            });
        }
    }

    async getData(func) {
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

    async getClose(func) {
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

    async getOpen(func) {
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

    async getActivity(eventoId) {
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