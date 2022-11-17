import horacio from '../assets/horacio.png';
import { BsFillSuitHeartFill } from 'react-icons/bs';

function Recommended() {
    return (
        <div className='bg-[#FFEAEA] w-1/5'>
            <div className="flex justify-center items-center gap-2">
                <h2>Recomendados</h2>
                <BsFillSuitHeartFill color="#ed3434" />
            </div>
            <div className="perfiles-recomendados">
                <div className="perfil-recomendado">
                    <h3>Horacio Quiroga</h3>
                    <p>84 años</p>
                    <img src={horacio} alt="el buen Horacito" />
                </div>
                <div className="perfil-recomendado">
                    <h3>Horacio Quiroga</h3>
                    <p>84 años</p>
                    <img src={horacio} alt="el buen Horacito" />
                </div>
                <div className="perfil-recomendado">
                    <h3>Horacio Quiroga</h3>
                    <p>84 años</p>
                    <img src={horacio} alt="el buen Horacito" />
                </div>
                <div className="perfil-recomendado">
                    <h3>Horacio Quiroga</h3>
                    <p>84 años</p>
                    <img src={horacio} alt="el buen Horacito" />
                </div>
            </div>
        </div>
    )
}

export default Recommended;