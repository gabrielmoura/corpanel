import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import milliseconds from "milliseconds";

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
            <br />
            <h6>Atividades</h6>
            {!(isLoading) ? data?.atividades.map(activity => {
                return (
                    <>
                        <div className="row m-1 border border-secondary">
                            <span className="d-block">Nome: {activity?.nome}</span>
                            <span className="d-block">Status: {activity?.status}</span>
                            <span
                                className="d-block">{(activity?.inicio) ? 'Inicio: '+new Date(activity?.inicio).toLocaleString('pt-BR') : ''}</span>
                            <span
                                className="d-block">{(activity?.chegada) ? 'Chegada: '+new Date(activity?.chegada).toLocaleString('pt-BR') : ''}</span>
                            <span className="d-block">Descrição: {activity?.descricao}</span>
                        </div>
                    </>
                );
            }) : (isError) ? (<span className="d-block">Erro ...</span>) : (
                <span className="d-block">Carregando Atividades...</span>)}
        </>
    )
}