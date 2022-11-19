import { useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

interface Props {
    swiperSlides: Array<{url: string}>
}

const Swiper = ({swiperSlides}: Props) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const prevSlide = () => {
        const firstSlide = currentIndex === 0
        const newIndex = firstSlide ? swiperSlides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const lastSlide = currentIndex === swiperSlides.length - 1
        const newIndex = lastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <>
            <div className="z-10 relative top-[0.9rem] left-1/2 -translate-x-1/2 flex justify-between items-center
            px-4 md:px-6">
                <div className={currentIndex === 0 ? "sliderCounter bg-white imgShadow"
                : "sliderCounter bg-white/80 shadow-md" }/>
                <div className={currentIndex === 1 ? "sliderCounter bg-white imgShadow"
                : "sliderCounter bg-white/80 shadow-md" }/>
                <div className={currentIndex === 2 ? "sliderCounter bg-white imgShadow"
                : "sliderCounter bg-white/80 shadow-md" }/>
                <div className={currentIndex === 3 ? "sliderCounter bg-white imgShadow"
                : "sliderCounter bg-white/80 shadow-md" }/>
            </div>
            <div style={{backgroundImage: `url(${swiperSlides[currentIndex].url})`}}
            className="bg-cover bg-center bg-repeat absolute top-0 left-0 h-full w-full rounded-2xl" />
            <div className="z-10 absolute bottom-32 left-1/2 -translate-x-1/2 justify-between items-center
            gap-48 md:gap-[18.5rem] flex">
                <HiOutlineChevronLeft size={40} className="cursor-pointer text-white/70 hover:text-white
                transition-colors" onClick={prevSlide} />
                <HiOutlineChevronRight size={40} className="cursor-pointer text-white/70 hover:text-white
                transition-colors" onClick={nextSlide} />
            </div>
        </>
    )
}

export default Swiper;