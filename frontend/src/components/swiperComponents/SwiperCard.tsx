import { SwiperMatcher } from '../';

const SwiperCard = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-4 z-10'>
            <div className="relative flex flex-col items-center justify-center">
                <SwiperMatcher />
            </div>
            <div className="w-[25.5rem] bg-[#FFEAEA] rounded-md hidden md:flex justify-center items-end
            gap-2 p-3 shadow-sm hover:shadow-md">
                <p className='text-sm font-medium'>
                    Lorem ipsum dolor sit amet consectet ura, adipisicing elit. Perspiasd deleniti 
                    expedita laudantium...
                </p>
                <button type='button' className='text-black/80 font-bold px-4 py-1 rounded-2xl min-w-max
                gradientBg shadow-md shadow-black/10 btnRegister btnRecommended'>
                    Leer más
                </button>
            </div>
        </div>
    )
}

export default SwiperCard;