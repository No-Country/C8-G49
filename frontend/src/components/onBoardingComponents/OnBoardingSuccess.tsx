import logo from "../../assets/logoRegister.svg";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaHeart } from "react-icons/fa";

type Props = {
    modalState: boolean
    modalSuccess: boolean
    setModalState: React.Dispatch<React.SetStateAction<boolean>>
    setModalSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

const OnBoardingSuccess = ({ modalState, modalSuccess, setModalState, setModalSuccess  }: Props) => {
    const handleClose = () => {
        setModalSuccess(false)
        setModalState(false)
    }

    return (
        <>
        {modalState && modalSuccess ?
        <>
        <div className='w-screen h-screen fixed top-0 left-0 bg-black/50 flex flex-col items-center
        justify-center'>
            <div className="formModalSuccess formModalContainer relative flex flex-col items-center
            justify-center gap-8 rounded-3xl bg-[#FFEAEA] w-[35%] h-3/5">
                <div>
                    <img src={logo} alt="Matcher logo" className="w-64 block" />
                </div>
                <div className="text-[#ed3434] textShadowSm">
                    <p className="text-center font-bold text-3xl">
                        ¡Felicitaciones!
                    </p>
                    <p className="text-center font-semibold text-2xl px-6 leading-6 mt-5">
                        ¡Ya formas parte de nuestra comunidad!
                    </p>
                </div>
                <div className="mt-7">
                <Link to="/feed">
                    <button type="button" className="uppercase btnSubmit textShadowSm btnRegister flex
                    justify-center items-center btnRecommended shadow-md font-bold tracking-wider gap-2
                    text-[#FFEAEA] rounded-full px-6 py-2" onClick={() => handleClose()}>
                        <p className="textShadowSm">Ir al inicio</p>
                        <FaHeart size={18} className="textShadowSm" />
                    </button>
                </Link>
                </div>
            </div>
        </div>
        </> 
        : null}
        </>
    )
}

export default OnBoardingSuccess;