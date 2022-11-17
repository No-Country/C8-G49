import image from '../../assets/card-profile.png';
import { MdPlace } from 'react-icons/md';
import { RiCloseCircleLine } from 'react-icons/ri';
import { IoHeartCircleOutline } from 'react-icons/io5';

function SwiperCard() {
    return (
        <div className='flex flex-col items-center justify-center gap-6'>
            <div className="relative w-[70%] flex flex-col items-center justify-center">
                <img src={image} alt="imagen subida a Matcher" className='h-[25rem] object-cover rounded-2xl
                swiperCardImg' />
                <div className="absolute top-2 left-[45%] -translate-x-1/2 text-white">
                    <div className="flex flex-col items-start gap-1">
                        <h1 className='swiperCardTextShadow font-extrabold text-[1.75rem]'>Ayelen Vargas</h1>
                        <h3 className='swiperCardTextShadow font-extrabold text-2xl'>24 años</h3>
                        <div className="flex gap-1 items-center justify-center">
                            <MdPlace className='swiperCardIconShadow' size={25} />
                            <p className='swiperCardTextShadow font-semibold text-xl'>San Antonio</p>
                        </div>
                        <p className='swiperCardTextShadow font-medium'>Estudiante de Turismo</p>
                    </div>
                </div>
                <div className="absolute bottom-4">
                    <div className="flex gap-20 justify-center items-center">
                        <button>
                            <RiCloseCircleLine color='#FFEAEA' size={90} className="swiperCardIconShadow" />
                        </button>
                        <button>
                            <IoHeartCircleOutline color='#ed3434' size={90} className="swiperCardIconShadow" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-[70%] bg-[#FFEAEA] rounded-md flex justify-center items-end gap-2 p-4">
                <p className='text-sm font-medium'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, non deleniti 
                    expedita laudantium officia corrupti, eveniet inventore odio velit possimus deserunt, 
                    ad harum veniam. Delectus...
                </p>
                <button className='text-white font-semibold px-4 py-1 rounded-2xl min-w-max bg-[#ed3434]'>
                    Leer más
                </button>
            </div>
        </div>
    )
}

export default SwiperCard;