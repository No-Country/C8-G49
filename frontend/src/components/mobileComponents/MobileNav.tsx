import logo from '../../assets/logoRegister.svg';
import { FaGrinHearts } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MobileNav = () => {
    return (
        <div className='w-full flex items-center justify-around sm:justify-between sm:px-44 bg-[#FF929D] py-2'>
            <Link to="/">
                <img src={logo} alt="Matcher logo" className='block w-36 cursor-pointer' loading='lazy' />
            </Link>
            <Link to="/">
                <FaGrinHearts size={33} className="cursor-pointer text-[#FFEAEA] sideBarIcon" />
            </Link>
        </div>
    )
}

export default MobileNav;