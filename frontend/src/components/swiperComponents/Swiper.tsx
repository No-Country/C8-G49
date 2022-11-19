import image from '../../assets/card-profile.png';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const Swiper = () => {
    return (
        <>
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
        </>
    )
}

export default Swiper;