import Head from 'next/head'
import {Helmet} from "react-helmet";
import Navbar from '../components/navbar'
import EventoCor from '../components/eventoCor'

var ms = require('milliseconds');
import Api from '../services/apiCor'
import TopPanel from "../components/topPanel";
import Nav2 from "../components/nav2";

export default function Home({data}) {

    return (
        <>
            <Navbar/>
            <Nav2/>
            <div className="container">
                <TopPanel/>

                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 className="border-bottom pb-2 mb-0">Abertos</h6>

                    {data.eventos.map(evento => {
                        if (evento.status == 'ABERTO') {
                            return <EventoCor evento={evento}></EventoCor>
                        }
                    })}

                    <small className="d-block text-end mt-3">
                        <a href="#">All updates</a>
                    </small>
                </div>


                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 className="border-bottom pb-2 mb-0">Fechados</h6>

                    {data.eventos.map(evento => {
                        if (evento.status == 'FECHADO') {
                            return <EventoCor evento={evento}></EventoCor>
                        }
                    })}


                    <small className="d-block text-end mt-3">
                        <a href="#">All suggestions</a>
                    </small>
                </div>
                <Helmet>
                    <script src="onload.js" type="text/javascript"/>
                </Helmet>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const api = new Api('planejamento', 'planejamentocor');
    await api.autorization();
    var data = {}
    data = await api.getData();

    return {
        props: {
            data: data.data,
        },
        revalidate: ms.minutes(5), // In seconds
    }
}
