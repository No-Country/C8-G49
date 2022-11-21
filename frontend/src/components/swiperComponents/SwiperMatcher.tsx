import { Swiper } from '../';
import { RiCloseCircleLine } from 'react-icons/ri';
import { IoHeartCircleOutline } from 'react-icons/io5';

const SwiperMatcher = () => {
    const swiperSlides = [
        {url: "https://i.ibb.co/k1F61YG/card-profile.png"},
        {url: "https://i.ibb.co/pZrkmwQ/sina-rezakhani-XES0z8w0-Ugc-unsplash.jpg"},
        {url: "https://i.ibb.co/cTcGd7Y/artsiom-kavaliou-u5-WQ-i-ML1-R8-unsplash.jpg"},
        {url: "https://i.ibb.co/ysb1CKd/jonathan-mendoza-Klcw-ZJgv-MC8-unsplash.jpg"},
    ]

    return (
    <>
        <div className='relative w-72 h-[22rem] md:h-[23rem] md:w-[25.5rem] cardShadow'>
            <Swiper swiperSlides={swiperSlides} />
        </div>
        <div className="absolute bottom-2 md:bottom-4">
            <div className="flex gap-20 md:gap-32 justify-center items-center">
                <button type='button' className='iconShadow text-[#FFEAEA] hover:text-[#1F9AFF]
                hover:scale-110 transition-all duration-200 ease-linear noSelect'>
                    <RiCloseCircleLine size={80} />
                </button>
                <button type='button' className='iconShadow text-[#ed3434] hover:text-[#72E52D]
                hover:scale-110 transition-all duration-200 ease-linear noSelect'>
                    <IoHeartCircleOutline size={80} />
                </button>
            </div>
        </div>
    </>
    )
}

export default SwiperMatcher;