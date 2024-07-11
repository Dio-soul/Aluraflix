
function ListaSuspensa (props){

    return (
        <div>
            <label>
            {props.label}
            </label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.value} required={props.obrigatorio}>
                {props.itens.map(categorias => <option key={categorias}>{categorias}</option>)}
            </select>
        </div>

    )
}

export default ListaSuspensa;