const axios = require('axios');
const moment = require('moment');

module.exports = class Api {
    token;

    constructor(username, password, baseURL = 'http://geoportal.cor.rio.gov.br') {
        this.baseURL = baseURL;
        this.username = username;
        this.password = password;
        this.dataBusca = new Date();
    }

    getToken() {
        return this.token;
    }

    async autorization() {
        await axios({
            method: 'post',
            baseURL: this.baseURL,
            url: '/corws/login',
            headers: {"Content-Type": "application/json"},
            data: {
                username: 'planejamento',
                password: 'planejamentocor'
            }
        }).then(r => {
            this.token = r.data;

        }).catch(err => {
            console.error(err);
        });
    }

    async getData() {
        if (!!this.token) {
            return await axios({
                method: 'post',
                baseURL: this.baseURL,
                url: '/statuscomando/v2/listarEventos',
                headers: {
                    'Authorization': this.token,
                    'Content-Type': 'application/json'
                },
                data: {
                    "inicio": moment(this.dataBusca).subtract(1, 'days').format('YYYY-MM-DD 00:00:00.0'),
                }
            })
        }
    }
}