export default function EventoCor(props) {
    return (
        <div className="d-flex text-muted pt-3">
            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32"
                 height="32" xmlns="http://www.w3.org/2000/svg" role="img"
                 aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice"
                 focusable="false"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#007bff"/>
                <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
            </svg>

            <p className="pb-3 mb-0 small lh-sm border-bottom">
                <span className='d-none'>{props.evento.id}</span>
                <strong className="d-block text-gray-dark">{props.evento.titulo}</strong>
                <strong className="d-block text-gray-dark">{props.evento.gravidade}</strong>
                <strong className="d-block text-gray-dark">{props.evento.bairro}</strong>
                <span
                    className="d-block text-gray-dark">Abertura: {new Date(props.evento.inicio).toLocaleString('pt-BR')}</span>
                <span
                    className="d-block text-gray-dark">{!props.evento.fim ? '' : `Fim: ${new Date(props.evento.fim).toLocaleString('pt-BR')}`}</span>
                {props.evento.descricao}
            </p>
        </div>
    )
}