import Card from "componentes/Card";
import styles from "./Categorias.module.css"


function Categorias (props){
    return(
        <section className={styles.secao} >
            <img src={`./images/${props.id}.png`} alt="logo categoria"></img>
            <div className={styles.lista}>
             {props.novosVideos.map( novovideoadd => <Card/>)}
            </div>
        </section>
        
    )

}

export default Categorias;