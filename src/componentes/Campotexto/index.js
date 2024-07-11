

function Campotexto (props){

    function aoDigitado (evento) {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>

    )

}

export default Campotexto;