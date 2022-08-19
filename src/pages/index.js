import Head from 'next/head'
import Navbar from '../components/navbar'
import EventoCor from '../components/eventoCor'

import milliseconds from 'milliseconds';
import Api from '../services/apiCor'
import TopPanel from "../components/topPanel";
import Nav2 from "../components/nav2";
import {useQuery} from "@tanstack/react-query";

export default function Home({}) {
    const {data, refetch, isLoading, isLoadingError} = useQuery(['comandos'], async () => {
        const api = new Api('planejamento', 'planejamentocor');
        await api.autorization();
        return await api.getData();
    }, {
        cacheTime: milliseconds.minutes(5),
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

                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 className="border-bottom pb-2 mb-0">Abertos</h6>
                    {(isLoading || isLoadingError) ? (<p>Carregando</p>) : data?.eventos.map(evento => {
                        if (evento.status == 'ABERTO') {
                            return <EventoCor evento={evento}></EventoCor>
                        }
                    })}

                    <small className="d-block text-end mt-3">
                        {/*<a href="#">All updates</a>*/}
                    </small>
                </div>

                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 className="border-bottom pb-2 mb-0">Fechados</h6>
                    {(isLoading || isLoadingError) ? (<p>Carregando</p>) : data?.eventos.map(evento => {
                        if (evento.status == 'FECHADO') {
                            return <EventoCor evento={evento}></EventoCor>
                        }
                    })}

                    <small className="d-block text-end mt-3">
                        {/*<a href="#">All suggestions</a>*/}
                    </small>
                </div>

            </div>
        </>
    )
}
