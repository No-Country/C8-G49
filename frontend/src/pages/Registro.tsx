import logo from "../assets/logoRegistro.png";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";

const Registro = () => {
    return (
        <div className='bg-[#F4B2F4] min-h-screen w-full flex flex-col gap-8 items-center justify-center'>
            <div>
                <img src={logo} alt="logo Matcher" className='w-40' />
            </div>
            <div className='w-60'>
                <p>Registrate y conoce al mundo de personas que te esperan en nuestra comunidad</p>
            </div>
            <Link to="/inicio">
                <button className="bg-white min-w-[20rem] px-12 py-6 flex justify-center items-center gap-4">
                    <FcGoogle size={25}/>
                    <p>Registrate con Google</p>
                </button>
            </Link>
            <Link to="/inicio">
                <button className="bg-[#FDCEDA] min-w-[20rem] px-12 py-6 flex justify-center items-center gap-4">
                    <HiOutlineMail size={25}/>
                    <p>Registrate con tu email</p>
                </button>
            </Link>
            <Link to="/inicio">Ya tengo una cuenta</Link>
        </div>
    )
}

export default Registro;