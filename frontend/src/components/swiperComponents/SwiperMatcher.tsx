import { Swiper } from '../';
import { MdPlace } from 'react-icons/md';
import { RiCloseCircleLine } from 'react-icons/ri';
import { IoHeartCircleOutline } from 'react-icons/io5';

const SwiperMatcher = () => {
    return (
    <>
        <div className='relative w-72 h-[22rem] md:h-[23rem] md:w-[25.5rem] cardShadow'>
            <Swiper />
        </div>
        <div className="absolute top-6 left-[36%] md:left-[31%] -translate-x-1/2 text-white">
            <div className="flex flex-col items-start gap-1">
                <h1 className='textShadow font-extrabold text-2xl md:text-[1.75rem]'>Ayelen Vargas</h1>
                <h3 className='textShadow font-extrabold text-xl md:text-2xl'>24 años</h3>
                <div className="flex gap-1 items-center justify-center">
                    <MdPlace className='iconShadow' size={25} />
                    <p className='textShadow font-semibold text-lg md:text-xl'>San Antonio</p>
                </div>
                <p className='textShadow font-medium md:text-base'>Estudiante de Turismo</p>
            </div>
        </div>
        <div className="absolute bottom-2 md:bottom-4">
            <div className="flex gap-20 md:gap-32 justify-center items-center">
                <button className='iconShadow text-[#FFEAEA] hover:text-[#1F9AFF] hover:scale-110
                transition-all duration-200 ease-linear'>
                    <RiCloseCircleLine size={80} />
                </button>
                <button className='iconShadow text-[#ed3434] hover:text-[#72E52D] hover:scale-110
                transition-all duration-200 ease-linear'>
                    <IoHeartCircleOutline size={80} />
                </button>
            </div>
        </div>
    </>
    )
}

export default SwiperMatcher;