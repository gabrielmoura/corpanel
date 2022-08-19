const axios = require('axios');
const moment = require('moment');

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

    async autorization() {
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
            if(process.env.NODE_ENV!=="production"){
                console.log(r);
            }
        }).catch(err => {
            console.error(err);
        });
    }

    async getData(func) {
        if (!!this.token) {
            return  axios({
                method: 'post',
                baseURL: this.baseURL,
                url: `/statuscomandows/listarEventos`,
                headers: {
                    'Authorization': this.token,
                    'Content-Type': 'application/json'
                },
                data: {
                    "inicio": moment(this.dataBusca).subtract(24, 'hours').format('YYYY-MM-DD 00:00:00.0'),
                }
            })
        }

    }
}