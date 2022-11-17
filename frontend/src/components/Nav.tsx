import Logo from '../assets/Logo.png'
import Perfil from '../assets/sidebar-profile.png'
import { MdPlace } from 'react-icons/md'
import { BiBell, BiHeart } from 'react-icons/bi';
import { FiMessageSquare } from 'react-icons/fi'
import { BsQuestionCircle } from 'react-icons/bs'

import "../styles/Nav.css"
function Nav() {
    return (
        <>
            <div className="logo bg-zinc-900 w-15">
                <h1 className='underline'>Matcher</h1>
                <img src={Logo} alt="" />
            </div>

            <div className="perfil m-auto">
                <img src={Perfil} alt="" />
                <p>Cinthia</p>
                <div className="ubicacion">
                    <MdPlace />
                    <p>Buenos Aires</p>
                </div>
            </div>

            <div className="menu ">
                <a className="p-3">
                    <BiBell />
                </a>
                <a>
                    <BiHeart />
                </a>
                <a>
                    <FiMessageSquare />
                </a>
            </div>
            <div className="faq">
                <BsQuestionCircle />
            </div>

        </>
    )

}

export default Nav;