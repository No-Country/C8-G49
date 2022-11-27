import profile from "../../assets/sidebar-profile.png";
import logo from "../../assets/logoLoader.svg";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MatchesAndChats } from "../";

type Props = {
    modalState: boolean
    messagesState: boolean
    matchesState: boolean
    setModalState: React.Dispatch<React.SetStateAction<boolean>>
    setMatchesState: React.Dispatch<React.SetStateAction<boolean>>
    setMessagesState: React.Dispatch<React.SetStateAction<boolean>>
}

const NotificationsModal = ({
    modalState,
    messagesState,
    matchesState,
    setModalState,
    setMatchesState,
    setMessagesState
}: Props) => {
    const [activeClass, SetActiveClass] = useState<boolean>(false)

    const handleClose = () => {
        SetActiveClass(true)
        setTimeout(() => {
            setModalState(false)
        }, 300)
        setTimeout(() => {
            SetActiveClass(false)
        }, 350)
    }

    return (
        <>
        {modalState ?
        <>
        <div className={activeClass ? "notificationsModal fadeInLeftModal active"
        : "notificationsModal fadeInLeftModal"}>
            <div className="flex flex-col items-start justify-center p-4 w-full">
                <div className="relative h-fit w-full">
                    <div className="flex items-center justify-around w-full gap-20">
                        <Link to="/user">
                            <div className="grid place-items-center cursor-pointer
                            transition-colors hover:text-[#ed3434]">
                                <img src={profile} alt="foto de perfil" className="w-14 block"
                                loading='lazy' />
                                <p className='font-semibold mt-[0.1rem]'>
                                    Mi perfil
                                </p>
                            </div>
                        </Link>
                        <img src={logo} alt="Matcher logo" className="block w-10 cursor-pointer"
                        onClick={() => handleClose()} />
                    </div>
                    <div className="absolute -bottom-3 rounded-full h-[3px] w-[99.5%] bg-[#FFCBCB]" />
                </div>
                <MatchesAndChats messagesState={messagesState} matchesState={matchesState}
                setMatchesState={setMatchesState} setMessagesState={setMessagesState} />
            </div>
            <button type='button' className='absolute bottom-6 left-1/2 btnSubmitGradient textShadowSm btnTransition
            btnShadow shadow-md font-bold tracking-wider text-[#FFEAEA] rounded-full -translate-x-1/2
            px-4 py-1' onClick={() => handleClose()}>
                Cerrar
            </button>
        </div>
        </>
        : null}
        </>
    )
}

export default NotificationsModal;