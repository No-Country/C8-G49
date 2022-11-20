import { useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { MdPlace } from 'react-icons/md';

interface Props {
    swiperSlides: Array<{url: string}>
}

const Swiper = ({swiperSlides}: Props) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [sliderBtnPressed, setSliderBtnPressed] = useState<boolean>(false)

    const prevSlide = () => {
        const firstSlide = currentIndex === 0
        const newIndex = firstSlide ? swiperSlides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
        newIndex === 0 ? setSliderBtnPressed(false) : setSliderBtnPressed(true)
    }

    const nextSlide = () => {
        const lastSlide = currentIndex === swiperSlides.length - 1
        const newIndex = lastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
        newIndex === 0 ? setSliderBtnPressed(false) : setSliderBtnPressed(true)
    }

    return (
        <>
            <div className="z-10 relative top-[0.9rem] left-1/2 -translate-x-1/2 flex justify-between
            items-center px-4 md:px-6">
                <div className={currentIndex === 0 ? "sliderCounter bg-white imgShadow"
                : "sliderCounter bg-white/70 shadow-md"} />
                <div className={currentIndex === 1 ? "sliderCounter bg-white imgShadow"
                : "sliderCounter bg-white/70 shadow-md"} />
                <div className={currentIndex === 2 ? "sliderCounter bg-white imgShadow"
                : "sliderCounter bg-white/70 shadow-md"} />
                <div className={currentIndex === 3 ? "sliderCounter bg-white imgShadow"
                : "sliderCounter bg-white/70 shadow-md"} />
            </div>
            <div style={{backgroundImage: `url(${swiperSlides[currentIndex].url})`}}
            className="bg-cover bg-center bg-repeat absolute top-0 left-0 h-full w-full rounded-2xl" />
            <div className="z-10 absolute bottom-32 left-1/2 -translate-x-1/2 justify-between items-center
            gap-48 md:gap-[18.5rem] flex">
                <HiOutlineChevronLeft size={40} className="cursor-pointer text-white/70 hover:text-white
                transition-colors noSelect" onClick={prevSlide} />
                <HiOutlineChevronRight size={40} className="cursor-pointer text-white/70 hover:text-white
                transition-colors noSelect" onClick={nextSlide} />
            </div>
            {!sliderBtnPressed ? (
                (<div className="absolute top-6 left-[33.5%] md:left-[28.5%] -translate-x-1/2 text-white">
                    <div className="swiperInfoContainer flex flex-col items-start gap-[0.15rem] md:gap-1 noSelect">
                        <h1 className='textShadow font-extrabold text-xl md:text-2xl'>Ayelen Vargas</h1>
                        <h3 className='textShadow font-extrabold text-lg md:text-xl'>24 años</h3>
                        <div className="flex gap-1 items-center justify-center">
                            <MdPlace className='iconShadow' size={20} />
                            <p className='textShadow font-semibold text-base md:text-lg'>San Antonio</p>
                        </div>
                        <p className='textShadow font-medium text-sm'>Estudiante de Turismo</p>
                    </div>
                </div>))
            : null}
        </>
    )
}

export default Swiper;