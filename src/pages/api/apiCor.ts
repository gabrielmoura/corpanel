/*
 *  Copyright (c) Gabriel Moura  2022
 *  Email: gabriel.blx32@gmail.com
 */

import {NextApiRequest, NextApiResponse} from 'next'
import Api from "../../services/apiCor";
import {getCookie, hasCookie, setCookie} from 'cookies-next';
import {hoursToSeconds} from "date-fns";

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
            maxAge: hoursToSeconds(24) * 10,
        })
    }

    let close = await api.getClose();
    let open = await api.getOpen();
    let status = (close?.status === open?.status) ? 200 : 400;

    return res.status(status).json({
        close: close.data,
        open: open.data,
    });
}