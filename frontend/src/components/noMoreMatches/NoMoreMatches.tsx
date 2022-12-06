import logo from '../../assets/logoNoMoreMatches.svg';

const NoMoreMatches = () => {  
    return (
        <div className='absolute flex flex-col items-center justify-center gap-4 md:gap-6 md:-top-[17.5rem]
        bg-[#FFEAEA] w-[18.25rem] md:w-[22rem] aspect-[4/5] cardShadow rounded-2xl px-12'>
                <p className='text-center font-Inter font-semibold'>
                    ¡Ups! parece que por el momento no quedan más usuarios que coincidan con tus intereses.
                </p>
                <div className='w-28 md:w-32'>
                    <img src={logo} alt="iconos de mensajes con puntos suspensivos" className='block w-full' />
                </div>
                <p className='text-[#ed3434] text-center font-Inter font-extrabold text-xl textShadowSm'>
                    ¡Regresa más tarde<br />para buscar a tu<br />MATCH PERFECTO!
                </p>
        </div>
    )
}

export default NoMoreMatches;
