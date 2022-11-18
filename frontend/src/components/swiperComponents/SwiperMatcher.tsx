import image from '../../assets/card-profile.png';
import { MdPlace } from 'react-icons/md';
import { RiCloseCircleLine } from 'react-icons/ri';
import { IoHeartCircleOutline } from 'react-icons/io5';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const SwiperMatcher = () => {
    return (
    <>
        <div className='relative w-72 h-[22rem] md:h-[23rem] md:w-[25.5rem] cardShadow'>
            <div className="z-10 relative top-[0.9rem] left-1/2 -translate-x-1/2 flex justify-between items-center
            px-4 md:px-6">
                <div className="h-[2.5px] w-16 md:w-24 bg-white shadow-md rounded-full"/>
                <div className="h-[2.5px] w-16 md:w-24 bg-white/80 shadow-md rounded-full"/>
                <div className="h-[2.5px] w-16 md:w-24 bg-white/80 shadow-md rounded-full"/>
            </div>
            <img src={image} alt="imagen subida a Matcher" className='absolute top-0 left-0 object-cover
            rounded-2xl w-full h-full block' loading='lazy' />
            <img src={image} alt="imagen subida a Matcher" className='absolute top-0 left-0 object-cover
            rounded-2xl w-full h-full block' loading='lazy' />
            <img src={image} alt="imagen subida a Matcher" className='absolute top-0 left-0 object-cover
            rounded-2xl w-full h-full block' loading='lazy' />
            <div className="z-10 absolute bottom-32 left-1/2 -translate-x-1/2 justify-between items-center
            gap-44 md:gap-72 hidden sm:flex">
                <HiOutlineChevronLeft size={40} className="cursor-pointer text-white/80 hover:text-white
                transition-colors" />
                <HiOutlineChevronRight size={40} className="cursor-pointer text-white/80 hover:text-white
                transition-colors" />
            </div>
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