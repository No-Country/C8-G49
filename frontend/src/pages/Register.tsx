import logo from "../assets/logoRegister.svg";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";

const Register = () => {
    return (
        <div className='bg-[#FFCBCB] min-h-screen w-screen flex flex-col gap-12 items-center justify-center'>
            <img src={logo} alt="Matcher logo" className='w-56 block' />
            <div className='w-64 text-center font-bold text-xl textShadowRed'>
                <p>¡Regístrate en Matcher y conoce un mundo de personas que te esperan en nuestra comunidad!</p>
            </div>
            <div className="flex flex-col gap-6">
                <Link to="/feed">
                    <button className="bg-[#FFEAEA] rounded-md min-w-[16rem] py-4 flex justify-center items-center
                    gap-4 shadow-md registerBtn btnGoogle">
                        <FcGoogle size={25}/>
                        <p>Regístrate con Google</p>
                    </button>
                </Link>
                <Link to="/feed">
                    <button className="bg-[#ed3434] text-white rounded-md min-w-[16rem] py-4 flex justify-center
                    items-center gap-4 shadow-md registerBtn btnMail">
                        <HiOutlineMail color="#fff" size={25}/>
                        <p>Regístrate con tu email</p>
                    </button>
                </Link>
            </div>
            <Link to="/feed" className="text-[#1f5bff] font-medium">Ya tengo una cuenta</Link>
        </div>
    )
}

export default Register;