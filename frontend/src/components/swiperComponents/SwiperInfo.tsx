import { MdPlace } from 'react-icons/md';

const SwiperInfo = () => {

    return (
        <div className="swiperInfoContainer flex flex-col items-start gap-1">
            <h1 className='textShadow font-extrabold text-2xl md:text-[1.75rem] mt-1'>Ayelen Vargas</h1>
            <h3 className='textShadow font-extrabold text-xl md:text-2xl mt-1'>24 años</h3>
            <div className="flex gap-1 items-center justify-center">
                <MdPlace className='iconShadow' size={25} />
                <p className='textShadow font-semibold text-lg md:text-xl'>San Antonio</p>
            </div>
            <p className='textShadow font-medium md:text-base'>Estudiante de Turismo</p>
        </div>
    )
}

export default SwiperInfo;