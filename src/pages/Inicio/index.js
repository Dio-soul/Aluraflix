import Banner from "componentes/Banner";
import Cabecalho from "componentes/Cabecalho";
import Card from "componentes/Card";
import Categorias from "componentes/Categorias";
import Rodape from "componentes/Rodape";


function Inicio (){

    const categorias = [
        {
            nome: "FrontEnd",
            id: "Category"
        },
        {
            nome: "BackEnd",
            id: "Category-1"
        },
        {
            nome: "Mobile",
            id: "Category-2"
        },
    ]

    return(
        <>
            <Cabecalho />
            <Banner imagem="BannerMain" />
            {categorias.map(categorias => <Categorias key={categorias.id} id={categorias.id}/> )}
            <Rodape />
        </>
    )
}

export default Inicio;
