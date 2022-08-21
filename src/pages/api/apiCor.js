import Api from "../../services/apiCor";
import {getCookies, getCookie, setCookie, hasCookie} from 'cookies-next';

export default async function handler(req, res) {
    const api = new Api(process.env.API_USER, process.env.API_PASS);
    const named = 'corPanel'

    if (hasCookie(named, {req, res})) {
        api.token = getCookie(named, {req, res})
    } else {
        await api.autorization();
        setCookie(named, api.getToken(), {
            req, res,
            maxAge: 864000, // 10 Dias
        })
    }

    const close = await api.getClose();
    const open = await api.getOpen();
    const status=(close.status==open.status)?200:400;

    return res.status(status).json({close: close.data, open: open.data});
}