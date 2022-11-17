import Profile from '../assets/sidebar-profile.png'
import "../styles/Filtros.css"
function Filtros() {
    return (
        <div className="Filtros">
            <div className="filtro">
                <img src={Profile} alt="" />
                <p>XXXXX</p>
            </div>
            <div className="filtro">
                <img src={Profile} alt="" />
                <p>Nuevas personas</p>
            </div>
            <div className="filtro">
                <img src={Profile} alt="" />
                <p>En Linea</p>
            </div>
            <div className="filtro">
                <img src={Profile} alt="" />
                <p>% de match</p>
            </div>
        </div>
    )
}

export default Filtros;