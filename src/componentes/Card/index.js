import styles from "./Card.module.css"
import lixeira from "./Lixeira.png"
import lapis from "./Lapis.png"

function Card ({/*titulo, */ url /*video, categoria*/}){

    return(
        
        <div className={styles.container} >
            <div className={styles.banner}>
                <img src={url}></img>
            </div>
            <div className={styles.acoes}>
                <img className={styles.img} src={lapis} alt="editar"></img>
                <img className={styles.img} src={lixeira} alt="excluir"></img>
            </div>
        </div>
           
    )
}

export default Card;