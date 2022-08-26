/*
 *  Copyright (c) Gabriel Moura  2022
 *  Email: gabriel.blx32@gmail.com
 */

import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {format} from "date-fns";

export default function Activity(props) {
    const eventoId = props.eventoId;
    const {data, isLoading, isError} = useQuery(['comandos', 'activity', eventoId], async () => {
        const axi = await axios.post('/api/apiActivity', {eventoId: eventoId});
        return await axi.data;
    }, {
        // cacheTime: milliseconds.minutes(5),
        // staleTime: milliseconds.minutes(5),
    });

    return (
        <>
            <br/>
            <h6>Atividades</h6>
            {!(isLoading) ? data?.atividades.map(activity => {
                return (
                    <>
                        <div className="row m-1 border border-secondary">
                            <span className="d-block">Nome: {activity?.nome}</span>
                            <span className="d-block">Status: {activity?.status}</span>
                            <span
                                className="d-block">{(activity?.inicio) ? 'Inicio: ' + format(new Date(activity?.inicio), 'dd/MM/yyyy hh:mm:ss') : ''}</span>
                            <span
                                className="d-block">{(activity?.chegada) ? 'Chegada: ' + format(new Date(activity?.chegada), 'dd/MM/yyyy hh:mm:ss') : ''}</span>
                            <span className="d-block">Descrição: {activity?.descricao}</span>
                        </div>
                    </>
                );
            }) : (isError) ? (<span className="d-block">Erro ...</span>) : (
                <span className="d-block">Carregando Atividades...</span>)}
        </>
    )
}