import logo from "../assets/logoRegister.svg";
import { FcGoogle } from "react-icons/fc";
import { FaEnvelope, FaHeart } from "react-icons/fa";
import { FullScreenLoader, OnBoarding  } from '../components/';
import { useState, useEffect } from 'react';

const Register = () => {
    const [ isLoading, setIsLoading ] = useState<boolean>(true)
    const [showModal, setShowModal] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    })

    return (
        <>
        {isLoading ? <FullScreenLoader/>
        : 
        <>
        <div className='gradientBg h-screen w-screen flex flex-col gap-12 items-center justify-center'>
            <img src={logo} alt="Matcher logo" className='w-56 block' />
            <div className='w-64 text-center font-bold text-xl textShadowRed'>
                <p>¡Regístrate en Matcher y conoce un mundo de personas que te esperan en nuestra comunidad!</p>
            </div>
            <div className="flex flex-col gap-6">
                <button type="button" className="bg-[#FFEAEA] rounded-md min-w-[16rem] py-4 flex
                justify-center items-center gap-4 shadow-md btnRegister btnGoogle"
                onClick={() => setShowModal(true)}>
                    <FcGoogle size={25}/>
                    <p>Regístrate con Google</p>
                </button>
                <button type="button" className="bg-[#ed3434] text-[#FFEAEA] rounded-md min-w-[16rem]
                py-4 flex justify-center items-center gap-4 shadow-md btnRegister btnMail"
                onClick={() => setShowModal(true)}>
                    <FaEnvelope color="#FFEAEA" size={20}/>
                    <p>Regístrate con tu email</p>
                </button>
                <button type="button" className="rounded-md min-w-[16rem] py-4 flex justify-center
                items-center gap-4 shadow-md btnRegister btnGoogle btnGradient"
                onClick={() => setShowModal(true)}>
                    <FaHeart color="#ed3434" size={20}/>
                    <p>Ya tengo una cuenta</p>
                </button>
            </div>
        </div>
        <OnBoarding modalState={showModal} setModalState={setShowModal} />
        </>}
        </>
    )
}

export default Register;