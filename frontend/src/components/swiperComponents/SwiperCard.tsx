import { SwiperMatcher } from '../';

function SwiperCard() {
    return (
        <div className='flex flex-col items-center justify-center gap-4 z-10'>
            <div className="relative flex flex-col items-center justify-center">
                <SwiperMatcher />
            </div>
            <div className="w-[25.5rem] bg-[#FFEAEA] rounded-md hidden md:flex justify-center items-end gap-2 p-3">
                <p className='text-sm font-medium'>
                    Lorem ipsum dolor sit amet consectet ura, adipisicing elit. Perspiasd deleniti 
                    expedita laudantium...
                </p>
                <button className='text-white font-semibold px-4 py-1 rounded-2xl min-w-max bg-[#ed3434]
                hover:bg-[#1F9AFF] transition-colors'>
                    Leer más
                </button>
            </div>
        </div>
    )
}

export default SwiperCard;