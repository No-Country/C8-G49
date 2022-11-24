import logo from '../../assets/logoNavBar.svg';
import profile from '../../assets/sidebar-profile.png';
import { useState } from 'react';
import { FaHeart, FaCommentAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NotificationsModal } from '../';

const SideBar = () => {
    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <>
        <div className='flex flex-col items-center justify-center py-10 bg-[#FF929D] h-full'>
            <div className="flex flex-col gap-16 items-center">
            <Link to="/">
                <img src={logo} alt="Matcher logo" className='w-20 block cursor-pointer' loading='lazy' />
            </Link>
                <div className="sideBarBox flex flex-col items-center justify-center mt-10">
                    <img src={profile} alt="foto de perfil" className='w-[6.25rem] block cursor-pointer'
                    loading='lazy' />
                    <p className='transition-colors font-semibold text-xl mt-2 textShadowSm'>Cinthia</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-12 mt-28'>
                <FaHeart size={35} className="cursor-pointer text-[#FFEAEA] sideBarIcon
                transition-transform hover:scale-110 ease-out" onClick={() => setShowModal(true)} />
                <FaCommentAlt size={35} className="cursor-pointer text-[#FFEAEA] sideBarIcon
                transition-transform hover:scale-110 ease-out" onClick={() => setShowModal(true)} />
            </div>
        </div>
        <NotificationsModal modalState={showModal} setModalState={setShowModal} />
        </>
    )

}

export default SideBar;