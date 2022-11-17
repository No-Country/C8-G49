import logo from '../assets/logoNavBar.svg';
import profile from '../assets/sidebar-profile.png';
import { MdPlace } from 'react-icons/md';
import { BiBell, BiHeart } from 'react-icons/bi';
import { FiMessageSquare } from 'react-icons/fi';
import { BsQuestionCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='flex flex-col items-center py-10 bg-[#FFEAEA] w-[15%]'>
            <div className="flex flex-col gap-4 items-center">
            <Link to="/">
                <img src={logo} alt="Matcher logo" className='w-20' />
            </Link>
                <div className="flex flex-col items-center mt-6">
                    <img src={profile} alt="foto de perfil" className='w-26' />
                    <p className='font-semibold text-xl mt-2'>Cinthia</p>
                    <div className="flex flex-col px-2 mt-4 items-center justify-center">
                        <MdPlace size={25} color="#ed3434" />
                        <p className='text-sm font-semibold mt-1'>Buenos Aires</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-6 pt-10'>
                <a>
                    <BiBell size={40} color="#ed3434" className="cursor-pointer" />
                </a>
                <a>
                    <BiHeart size={40} color="#ed3434" className="cursor-pointer" />
                </a>
                <a>
                    <FiMessageSquare size={40} color="#ed3434" className="cursor-pointer" />
                </a>
            </div>
            <BsQuestionCircle size={28} color="#ed3434" className="mt-14 cursor-pointer" />
        </div>
    )

}

export default NavBar;