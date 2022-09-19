/*
 *  Copyright (c) Gabriel Moura  2022
 *  Email: gabriel.blx32@gmail.com
 */


import {NextApiRequest, NextApiResponse} from 'next'
import Api from "../../services/apiCor";
import {getCookie, hasCookie, setCookie} from 'cookies-next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const {API_USER, API_PASS} = process.env;

    // @ts-ignore
    const api = new Api(API_USER, API_PASS);
    const named = 'corPanel'

    if (hasCookie(named, {req, res})) {
        api.token = <string>getCookie(named, {req, res})
    } else {
        await api.autorization();
        setCookie(named, await api.getToken(), {
            req, res,
            maxAge: 864000, // 10 Dias
        })
    }
    const {eventoId} = req.body;
    const activity = await api.getActivity(eventoId);

    return res.status(activity.status).json(activity.data);
}