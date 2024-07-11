import BotaoForm from "componentes/BotaoForm";
import Campotexto from "componentes/Campotexto";
import ListaSuspensa from "componentes/ListaSuspensa";
import { useState } from "react";

function Formulario (props){

    const [titulo, setTitulo] = useState('')
    const [imagem, setImagem] = useState('')
    const [video, setVideo] = useState('')
    const [categoria, setCategoria] = useState('')

    function aoSalvar(evento){
        evento.preventDefault()
        console.log('form submetido', titulo, imagem, video, categoria)
    }

    return(
        <section>
            <form onSubmit={aoSalvar}>
                <h3>Criar Card</h3>
                <Campotexto obrigatorio={true} label="Titulo" placeholder="Digite o título" valor={titulo} aoAlterado={valor => setTitulo(valor)}/>
                <Campotexto obrigatorio={true} label="Imagem" placeholder="Cole a Url da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <Campotexto obrigatorio={true} label="Video" placeholder="Insira a Url do video" valor={video} aoAlterado={valor => setVideo(valor)} />
                <ListaSuspensa obrigatorio={true} label="Categoria" itens={props.categorias} valor={categoria} aoAlterado={valor => setCategoria(valor)}/>
                <BotaoForm>Guardar</BotaoForm>
                <BotaoForm>Limpar</BotaoForm>
            </form>
        </section>
    )

}

export default Formulario;