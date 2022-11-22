import profile from '../../assets/sidebar-profile.png';
import { FaHeart, FaCommentAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MobileFooter = () => {
    return (
        <div className='w-full flex items-center justify-around sm:justify-between bg-[#FF929D] px-7
        py-5 sm:px-48 mt-3'>
            <Link to="/">
                <FaCommentAlt size={33} className="cursor-pointer text-[#FFEAEA] sideBarIcon"  />
            </Link>
            <Link to="/">
                <FaHeart size={35} className="cursor-pointer text-[#FFEAEA] sideBarIcon" />
            </Link>
            <img src={profile} alt="foto de perfil" className="w-[2.75rem] block cursor-pointer" loading='lazy' />
        </div>
    )
}

export default MobileFooter;