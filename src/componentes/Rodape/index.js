import styles from "./Rodape.module.css"
import logo from "./Logo.png"

function Rodape (){

    return (
        <footer className={styles.rodape}>
            <img src={logo} alt="logo alura"></img>
            <h2>Desenvolvido por Geovani</h2>
        </footer>
    )

}

export default Rodape;