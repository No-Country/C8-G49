import logo from '../assets/logoNavBar.svg';
import profile from '../assets/sidebar-profile.png';
import { MdPlace } from 'react-icons/md';
import { BiBell, BiHeart } from 'react-icons/bi';
import { FiMessageSquare } from 'react-icons/fi';
import { BsGearFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className='flex flex-col items-center justify-center py-10 bg-[#FFEAEA] h-full'>
            <div className="flex flex-col gap-4 items-center">
            <Link to="/">
                <img src={logo} alt="Matcher logo" className='w-20 block cursor-pointer' loading='lazy' />
            </Link>
                <div className="flex flex-col items-center justify-center mt-2">
                    <div className='sideBarBox flex flex-col items-center justify-center'>
                        <img src={profile} alt="foto de perfil" className='sideBarImg block cursor-pointer'
                        loading='lazy' />
                        <p className='transition-colors font-semibold text-xl mt-1'>Cinthia</p>
                    </div>
                    <div className="flex flex-col px-2 mt-2 items-center justify-center">
                        <MdPlace size={25} color="#ed3434" />
                        <p className='text-sm font-semibold mt-1'>Buenos Aires</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-4 mt-6'>
                <Link to="/">
                    <BiBell size={40} color="#ed3434" className="cursor-pointer" />
                </Link>
                <Link to="/">
                    <BiHeart size={40} color="#ed3434" className="cursor-pointer" />
                </Link>
                <Link to="/">
                    <FiMessageSquare size={40} color="#ed3434" className="cursor-pointer" />
                </Link>
            </div>
            <Link to="/">
                <BsGearFill size={30} color="#ed3434" className="mt-10 cursor-pointer" />
            </Link>
        </div>
    )

}

export default SideBar;