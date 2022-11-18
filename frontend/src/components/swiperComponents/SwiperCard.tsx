import image from '../../assets/card-profile.png';
import { MdPlace } from 'react-icons/md';
import { RiCloseCircleLine } from 'react-icons/ri';
import { IoHeartCircleOutline } from 'react-icons/io5';

function SwiperCard() {
    return (
        <div className='flex flex-col items-center justify-center gap-4 mt-4 z-10'>
            <div className="relative flex flex-col items-center justify-center">
                <img src={image} alt="imagen subida a Matcher" className='h-[23rem] w-[25.5rem] object-cover rounded-2xl
                cardShadow block' loading='lazy' />
                <div className="absolute top-3 left-[31%] -translate-x-1/2 text-white">
                    <div className="flex flex-col items-start gap-1">
                        <h1 className='textShadow font-extrabold text-[1.75rem]'>Ayelen Vargas</h1>
                        <h3 className='textShadow font-extrabold text-2xl'>24 años</h3>
                        <div className="flex gap-1 items-center justify-center">
                            <MdPlace className='iconShadow' size={25} />
                            <p className='textShadow font-semibold text-xl'>San Antonio</p>
                        </div>
                        <p className='textShadow font-medium'>Estudiante de Turismo</p>
                    </div>
                </div>
                <div className="absolute bottom-4">
                    <div className="flex gap-32 justify-center items-center">
                        <button>
                            <RiCloseCircleLine color='#FFEAEA' size={90} className="iconShadow" />
                        </button>
                        <button>
                            <IoHeartCircleOutline color='#ed3434' size={90} className="iconShadow" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-[25.5rem] bg-[#FFEAEA] rounded-md flex justify-center items-end gap-2 p-3">
                <p className='text-sm font-medium'>
                    Lorem ipsum dolor sit amet consectet ura, adipisicing elit. Perspiasd deleniti 
                    expedita laudantium...
                </p>
                <button className='text-white font-semibold px-4 py-1 rounded-2xl min-w-max bg-[#ed3434]'>
                    Leer más
                </button>
            </div>
        </div>
    )
}

export default SwiperCard;