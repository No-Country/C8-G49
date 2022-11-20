import horacio from '../../assets/horacio.png';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Recommended = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <Link to="/">
                <div className="flex flex-col justify-center items-center px-4 py-2 rounded-full btnGradient
                cursor-pointer shadow-md shadow-black/10 registerBtn btnRecommended">
                    <FaHeart size={13} className="text-[#ed3434] textShadowSm" />
                    <h2 className='text-[#ed3434] textShadowSm font-bold text-sm'>Recomendados</h2>
                </div>
            </Link>
            <div className="recommendedImgContainer flex flex-col items-center justify-center">
                <div className='flex flex-col items-center justify-center cursor-pointer transition-all
                hover:text-[#FFEAEA] duration-200 recommendedCard'>
                    <img src={horacio} alt="el buen Horacito" className='block rounded-full aspect-square
                    object-cover imgShadow recommendedImg transition-all duration-200' loading='lazy' />
                    <div className="flex flex-col items-center justify-center">
                        <h3 className='font-semibold textShadowSm leading-7'>Horacio Quiroga</h3>
                        <p className='font-medium text-sm textShadowSm'>84 años</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center cursor-pointer transition-all
                hover:text-[#FFEAEA] duration-200 recommendedCard'>
                    <img src={horacio} alt="el buen Horacito" className='block rounded-full aspect-square
                    object-cover imgShadow recommendedImg transition-all duration-200' loading='lazy' />
                    <div className="flex flex-col items-center justify-center">
                        <h3 className='font-semibold textShadowSm leading-7'>Horacio Quiroga</h3>
                        <p className='font-medium text-sm textShadowSm'>84 años</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center cursor-pointer transition-all
                hover:text-[#FFEAEA] duration-200 recommendedCard'>
                    <img src={horacio} alt="el buen Horacito" className='block rounded-full aspect-square
                    object-cover imgShadow recommendedImg transition-all duration-200' loading='lazy' />
                    <div className="flex flex-col items-center justify-center">
                        <h3 className='font-semibold textShadowSm leading-7'>Horacio Quiroga</h3>
                        <p className='font-medium text-sm textShadowSm'>84 años</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommended;