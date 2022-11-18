import horacio from '../assets/horacio.png';
import { BsFillSuitHeartFill } from 'react-icons/bs';

function Recommended() {
    return (
        <div className='recommendedContainer bg-[#FFEAEA] flex flex-col items-center justify-center'>
            <div className="flex flex-col justify-center items-center px-4 py-2 rounded-full bg-[#ed3434]">
                <BsFillSuitHeartFill color="#fff" size={13} />
                <h2 className='text-white font-semibold text-sm'>Recomendados</h2>
            </div>
            <div className="recommendedImgContainer flex flex-col items-center justify-center">
                <div className='flex flex-col items-center justify-center'>
                    <img src={horacio} alt="el buen Horacito" className='block rounded-full aspect-square
                    object-cover imgShadow recommendedImg' loading='lazy' />
                    <div className="flex flex-col items-center justify-center">
                        <h3 className='font-semibold textShadowRed leading-7'>Horacio Quiroga</h3>
                        <p className='font-medium text-sm'>84 años</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={horacio} alt="el buen Horacito" className='block rounded-full aspect-square
                    object-cover imgShadow recommendedImg' loading='lazy' />
                    <div className="flex flex-col items-center justify-center">
                        <h3 className='font-semibold textShadowRed leading-7'>Horacio Quiroga</h3>
                        <p className='font-medium text-sm'>84 años</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={horacio} alt="el buen Horacito" className='block rounded-full aspect-square
                    object-cover imgShadow recommendedImg' loading='lazy' />
                    <div className="flex flex-col items-center justify-center">
                        <h3 className='font-semibold textShadowRed leading-7'>Horacio Quiroga</h3>
                        <p className='font-medium text-sm'>84 años</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommended;