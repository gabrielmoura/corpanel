import Head from 'next/head'
import Navbar from '../components/navbar'
import EventoCor from '../components/eventoCor'

import milliseconds from 'milliseconds';
import TopPanel from "../components/topPanel";
import Nav2 from "../components/nav2";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export default function Home() {
    const {data, refetch, isLoading} = useQuery(['comandos'], async () => {
        const axi = await axios.get('/api/apiCor');
        return await axi.data;
    }, {
        cacheTime: milliseconds.minutes(5),
        staleTime: milliseconds.minutes(5),
    });

    return (
        <>
            <Head>
                <title>COR RIO</title>
            </Head>
            <Navbar/>
            <Nav2/>
            <div className="container">
                <TopPanel refetch={refetch}/>
                <div className="row">
                    <div className="col-6">
                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                            <h6 className="border-bottom pb-2 mb-0">Abertos {(isLoading) ? (
                                <p>Carregando</p>) : data?.open.eventos.length}</h6>

                            {(isLoading) ? (<p>Carregando</p>) : data?.open.eventos.map(evento => {
                                if (evento.status == 'ABERTO') {
                                    return <EventoCor evento={evento}></EventoCor>
                                }
                            })}
                            <small className="d-block text-end mt-3">
                                {/*<a href="#">All updates</a>*/}
                            </small>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                            <h6 className="border-bottom pb-2 mb-0">Fechados {(isLoading) ? (
                                <p>Carregando</p>) : data?.close.eventos.length}</h6>
                            {(isLoading) ? (<p>Carregando</p>) : data?.close.eventos.map(evento => {
                                if (evento.status == 'FECHADO') {
                                    return <EventoCor evento={evento}></EventoCor>
                                }
                            })}

                            <small className="d-block text-end mt-3">
                                {/*<a href="#">All suggestions</a>*/}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
