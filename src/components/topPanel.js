import Image from "next/image";
import profilePic from "../../public/logo_cor.png";
import moment from "moment";
// import Router from 'next/router'
import {useEffect, useState} from "react";
import milliseconds from 'milliseconds';

export default function TopPanel(props) {
    const [headerHour, setHeaderHour] = useState('00/00/0000');
    const [headerDate, setHeaderDate] = useState('00:00');
    const [timeLoad, setTimeLoad] = useState(undefined);

    useEffect(() => {
        setHeaderDate(moment(timeLoad).format('DD/MM/YYYY'));
        setHeaderHour(moment(timeLoad).format('HH:mm'));
        setTimeout(() => {
            setTimeLoad(new Date());
        }, milliseconds.minutes(1));
    }, [timeLoad])


    return (
        <div className="d-flex align-items-center p-3 my-3 text-white bg-prefecture rounded shadow-sm">
            <div className="lh-1 me-3 col-4">
                <Image
                    src={profilePic}
                    alt="Logo"
                    width='213'
                    height='38'
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                />

            </div>
            <div className="lh-1 me-3 col-4 text-center hidden-xs hidden-sm" id="header_data_hora">
                <p id="header_data">{headerDate}</p>
                <h1 id="header_hora">{headerHour}</h1>
            </div>

            <div className="lh-1 col-4 text-center">

                <a href="#" className="lh-1 mb-0 h6 mt-1 text-white btn" onClick={props.refetch}>Atualizar</a><br/>
                <a href="#" className="lh-1 mb-0 h6 mt-1 text-white btn">Acessar Painel</a>

            </div>
        </div>
    )
}
