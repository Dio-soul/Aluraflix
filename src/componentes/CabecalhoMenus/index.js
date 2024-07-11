import styles from "./CabecalhoMenus.module.css";
import { Link } from "react-router-dom";

function CabecalhoMenus ({ url, children }){

    return(
        <Link to={url} className={styles.link}>
            {children} 
        </Link>
    )

}

export default CabecalhoMenus;