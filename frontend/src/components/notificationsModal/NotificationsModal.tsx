import logo from "../../assets/logoLoader.svg";
import { FaBell, FaHeart, FaCommentAlt } from "react-icons/fa";
import { useState } from 'react';

type Props = {
    modalState: boolean
    setModalState: React.Dispatch<React.SetStateAction<boolean>>
}

const NotificationsModal = ({ modalState, setModalState }: Props) => {
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
            <div className="flex flex-col items-start justify-center p-4 gap-10">
                <div className="relative h-fit w-full">
                    <div className="grid grid-cols-3 place-items-center">
                        <img src={logo} alt="Matcher logo" className="block w-12 mr-10 mb-2
                        cursor-pointer" onClick={() => handleClose()} />
                        <div className="flex flex-col items-center justify-center gap-1">
                            <FaBell className="text-[#ed3434] textShadowSm text-[1.8rem]" />
                            <p className="font-bold tracking-wide text-[#ed3434] textShadowSm">
                                Notificaciones
                            </p>
                        </div>
                        <div className="absolute -bottom-2 rounded-full h-[3px] w-[99.5%] bg-[#FFCBCB]" />
                    </div>
                </div>
                <div className="flex flex-col gap-8 items-start justify-center px-2">
                    <div className="flex justify-start items-center gap-5">
                        <FaHeart className="text-[#ed3434] text-[2.5rem] cursor-pointer
                        transition-transform hover:scale-110 ease-out"/>
                        <p className="text-neutral-700 text-sm font-semibold tracking-wide">
                            ¡Tienes 3 matches nuevos!
                        </p>
                    </div>
                    <div className="flex justify-start items-center gap-5">
                        <FaCommentAlt className="text-[#FF929D] text-[2.5rem]
                        transition-transform hover:scale-110 ease-out"/>
                        <p className="text-neutral-700 text-sm font-semibold tracking-wide">
                            No tienes mensajes sin leer.
                        </p>
                    </div>
                </div>
                <button type='button' className='self-center mt-16 btnSubmitGradient textShadowSm btnRegister
                btnRecommended shadow-md font-bold tracking-wider text-[#FFEAEA] rounded-full
                px-4 py-1' onClick={() => handleClose()}>
                    Cerrar
                </button>
            </div>
        </div>
        </>
        : null}
        </>
    )
}

export default NotificationsModal;