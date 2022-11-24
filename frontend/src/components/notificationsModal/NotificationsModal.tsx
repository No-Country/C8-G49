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
            <h1 className="text-white text-3xl font-bold">Hi</h1>
        </div>
        </>
        : null}
        </>
    )
}

export default NotificationsModal;