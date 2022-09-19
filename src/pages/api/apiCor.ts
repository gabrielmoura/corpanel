/*
 *  Copyright (c) Gabriel Moura  2022
 *  Email: gabriel.blx32@gmail.com
 */

import {NextApiRequest, NextApiResponse} from 'next'
import Api from "../../services/apiCor";
import {getCookie, hasCookie, setCookie} from 'cookies-next';
import {rememberCache} from "../../services/cache";
import {minutesToSeconds} from "date-fns";

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


    const data = rememberCache('openClose', async () => {
        let close = await api.getClose();
        let open = await api.getOpen();

        // let status = (close?.status === open?.status) ? 200 : 400;
        return {
            close: close.data,
            open: open.data,
        }
    }, minutesToSeconds(5));

    // sem cache : 2.367s
    // com cache : 0.319ms
    return res.json(await data);
}