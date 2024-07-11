import Cabecalho from "componentes/Cabecalho";
import Formulario from "componentes/Formulario";
import Rodape from "componentes/Rodape";
import { useState } from "react";

function NovoVideo () {

    const categorias = [
        {
            nome: "FrontEnd"
        },
        {
            nome: "BackEnd"
        },
        {
            nome: "Mobile"
        },
    ]

    const [novosVideos, setNovosVideos] = useState([])

    function aoNovoVideoAdd (novovideoadd) {
        setNovosVideos([...novosVideos, novovideoadd])
    }

    return(
        <>
        <Cabecalho/>
        <h2>NOVO VIDEO</h2>
        <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VIDEO</p>
        <Formulario aoVideoAdd ={novovideoadd => aoNovoVideoAdd(novovideoadd)} categorias={categorias.map(categorias => categorias.nome)} />
        <Rodape/>
        </>
    )
}

export default NovoVideo;