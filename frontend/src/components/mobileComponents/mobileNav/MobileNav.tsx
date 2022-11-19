import logo from '../../../assets/logoRegister.svg';
import { BiBell } from 'react-icons/bi';
import { BsGearFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const MobileNav = () => {
    return (
        <div className='w-full flex items-center justify-around sm:justify-between sm:px-44 bg-[#FFEAEA] py-2'>
            <img src={logo} alt="Matcher logo" className='block w-36 cursor-pointer' loading='lazy' />
            <div className="flex items-center justify-center gap-6 sm:gap-8">
                <Link to="/">
                    <BsGearFill size={20} color="#ed3434" className="cursor-pointer" />
                </Link>
                <Link to="/">
                    <BiBell size={30} color="#ed3434" className="cursor-pointer" />
                </Link>
            </div>
        </div>
    )
}

export default MobileNav;