/*
 *  Copyright (c) Gabriel Moura  2022
 *  Email: gabriel.blx32@gmail.com
 */

import Head from 'next/head'
import Navbar from '../components/navbar'
import EventoCor from '../components/eventoCor'

import {minutesToMilliseconds} from "date-fns";
import TopPanel from "../components/topPanel";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export default function Home() {
    const {data, refetch, isLoading, isError} = useQuery(['comandos'], async () => {
        const axi = await axios.get('/api/apiCor');
        return await axi.data;
    }, {
        cacheTime: minutesToMilliseconds(5),
        staleTime: minutesToMilliseconds(5),
    });

    return (
        <>
            <Head>
                <title>Sala de Controle</title>
            </Head>
            <Navbar/>
            <div className="container">
                <TopPanel refetch={refetch}/>
                <div className="row">
                    <div className="col-md-6 col-xl-6">
                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                            <h6 className="border-bottom pb-2 mb-0">Abertos {(isLoading) ? (
                                <p>Carregando</p>) : data?.open.eventos.length}</h6>

                            {!(isLoading) ? data?.open.eventos.map(evento => {
                                if (evento.status == 'ABERTO') {
                                    return <EventoCor evento={evento}></EventoCor>
                                }
                            }) : (isError) ? (<p>Erro ...</p>) : (<p>Carregando</p>)}
                            <small className="d-block text-end mt-3">
                                {/*<a href="#">All updates</a>*/}
                            </small>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-6">
                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                            <h6 className="border-bottom pb-2 mb-0">Fechados {(isLoading) ? (
                                <p>Carregando</p>) : data?.close.eventos.length}</h6>
                            {!(isLoading) ? data?.close.eventos.map(evento => {
                                if (evento.status == 'FECHADO') {
                                    return <EventoCor evento={evento}></EventoCor>
                                }
                            }) : (isError) ? (<p>Erro ...</p>) : (<p>Carregando</p>)}

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
