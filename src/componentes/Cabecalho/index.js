import { Link, Route } from "react-router-dom";
import logo from './Logo.png';
import styles from "./Cabecalho.module.css"
import CabecalhoMenus from "componentes/CabecalhoMenus";

function Cabecalho() {

    return(
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="logo aluraflix"></img>
            </Link>
            <nav>
                <CabecalhoMenus url="/">
                    Home
                </CabecalhoMenus>
                <CabecalhoMenus url="/NovoVideo">
                    Novo Video
                </CabecalhoMenus>
            </nav>
        </header>
    )
}

export default Cabecalho;