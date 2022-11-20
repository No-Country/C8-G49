import logo from '../../assets/logoNavBar.svg';
import profile from '../../assets/sidebar-profile.png';
import { FaBell, FaHeart, FaCommentAlt, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className='flex flex-col items-center justify-center py-10 bg-[#FF929D] h-full'>
            <div className="flex flex-col gap-12 items-center">
            <Link to="/">
                <img src={logo} alt="Matcher logo" className='w-20 block cursor-pointer' loading='lazy' />
            </Link>
                <div className="sideBarBox flex flex-col items-center justify-center">
                    <img src={profile} alt="foto de perfil" className='sideBarImg block cursor-pointer'
                    loading='lazy' />
                    <p className='transition-colors font-semibold text-xl mt-1 textShadowSm'>Cinthia</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-7 mt-10'>
                <Link to="/">
                    <FaBell size={38} className="cursor-pointer text-[#FFEAEA] sideBarIcon
                    transition-transform hover:scale-110 ease-out" />
                </Link>
                <Link to="/">
                    <FaHeart size={35} className="cursor-pointer text-[#FFEAEA] sideBarIcon
                    transition-transform hover:scale-110 ease-out" />
                </Link>
                <Link to="/">
                    <FaCommentAlt size={35} className="cursor-pointer text-[#FFEAEA] sideBarIcon
                    transition-transform hover:scale-110 ease-out" />
                </Link>
            </div>
            <Link to="/">
                <FaCog size={32} className="mt-16 cursor-pointer text-[#FFEAEA] sideBarIcon" />
            </Link>
        </div>
    )

}

export default SideBar;