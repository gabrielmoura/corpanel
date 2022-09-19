/*
 *  Copyright (c) Gabriel Moura  2022
 *  Email: gabriel.blx32@gmail.com
 */

import Image from "next/image";
// @ts-ignore
import profilePic from '../../public/logo_cor.png';
import {useEffect, useState} from "react";
import {format, secondsToMilliseconds} from 'date-fns'

export default function TopPanel({refetch}: any) {
    const [headerHour, setHeaderHour] = useState('00/00/0000');
    const [headerDate, setHeaderDate] = useState('00:00');
    const [timeLoad, setTimeLoad] = useState(new Date());

    useEffect(() => {
        if (!!timeLoad) {
            setHeaderDate(format(timeLoad, 'dd/MM/yyyy'));
            setHeaderHour(format(timeLoad, 'hh:mm'));
        }
        setTimeout(() => {
            setTimeLoad(new Date());
        }, secondsToMilliseconds(3));
    }, [timeLoad])


    return (
        <div className="d-flex align-items-center p-3 my-3 text-white bg-prefecture rounded shadow-sm">
            <div className="lh-1 me-3 col-4">
                <Image
                    src={profilePic}
                    alt="Logo"
                    width='213'
                    height='38'
                />

            </div>
            <div className="lh-1 me-3 col-4 text-center hidden-xs hidden-sm" id="header_data_hora">
                <p id="header_data">{headerDate}</p>
                <h1 id="header_hora">{headerHour}</h1>
            </div>

            <div className="lh-1 col-4 text-center">

                <a href="#" className="lh-1 mb-0 h6 mt-1 text-white btn" onClick={refetch}>Atualizar</a><br/>
                <a href="https://app.powerbi.com/view?r=eyJrIjoiYmUxOWJhYzYtMWFkYy00OWQ0LWI2MDgtMTJjMTE4NWI3NDNiIiwidCI6IjhkYzFiNzM0LTEyYTYtNDNmZC1iMjdkLWE3Yzg0ZmQ0MzdkMiJ9"
                   className="lh-1 mb-0 h6 mt-1 text-white btn"
                   target="_blank"
                   rel="noreferrer">Acessar Painel</a>

            </div>
        </div>
    )
}
