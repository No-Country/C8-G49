import profile from '../../assets/sidebar-profile.png';
import { FaHeart, FaCommentAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NotificationsModal } from '../';
import { useState } from 'react';

const MobileFooter = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [showMessages, setShowMessages] = useState<boolean>(false)
    const [showMatches, setShowMatches] = useState<boolean>(false)

    const handleMatches = () => {
        setShowModal(true)
        setShowMatches(true)
        setShowMessages(false)
    }
    
    const handleMessages = () => {
        setShowModal(true)
        setShowMessages(true)
        setShowMatches(false)
    }

    return (
        <>
        <div className='w-full flex items-center justify-around sm:justify-between bg-[#FF929D] px-7
        py-5 sm:px-48 mt-3'>
            <FaHeart size={35} className="cursor-pointer text-[#ed3434] sideBarIcon"
            onClick={() => handleMatches()} />
            <FaCommentAlt size={33} className="cursor-pointer text-[#FFEAEA] sideBarIcon"
            onClick={() => handleMessages()} />
            <Link to="/user">
                <img src={profile} alt="foto de perfil" className="w-[2.75rem] block cursor-pointer"
                loading='lazy' />
            </Link>
        </div>
        <NotificationsModal modalState={showModal} setModalState={setShowModal}
        messagesState={showMessages} matchesState={showMatches}
        setMatchesState={setShowMatches} setMessagesState={setShowMessages} />
        </>
    )
}

export default MobileFooter;