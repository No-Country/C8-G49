import profile from '../../assets/sidebar-profile.png';
import { BiHeart } from 'react-icons/bi';
import { FiMessageSquare } from 'react-icons/fi';
import { BsFillEmojiHeartEyesFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const MobileFooter = () => {
    return (
        <div className='w-full flex items-center justify-between bg-[#FFEAEA] px-10 py-5 sm:px-44 mt-3'>
            <Link to="/">
                <FiMessageSquare size={40} color="#ed3434" className="cursor-pointer" />
            </Link>
            <Link to="/">
                <BiHeart size={40} color="#ed3434" className="cursor-pointer" />
            </Link>
            <Link to="/">
                <BsFillEmojiHeartEyesFill size={34} color="#ed3434" className="cursor-pointer" />
            </Link>
            <img src={profile} alt="foto de perfil" className="w-10 block cursor-pointer" loading='lazy' />
        </div>
    )
}

export default MobileFooter;