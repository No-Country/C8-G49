import profile from '../../assets/sidebar-profile.png';

const SwiperFilters = () => {
    return (
        <div className="flex justify-around items-center bg-[#FFEAEA] md:w-[25.5rem] rounded-md
        shadow-md md:shadow-sm transition-shadow md:hover:shadow-md">
            <div className='py-2 grid grid-cols-3 gap-8 px-5 md:gap-14'>
                <div className="flex flex-col items-center justify-center gap-1 md:gap-0 cursor-pointer
                transition-colors hover:text-[#ed3434]">
                    <img src={profile} alt="foto de perfil" className='w-12 md:w-14 block' loading='lazy' />
                    <p className='font-bold text-xs md:font-semibold md:text-sm'>En línea</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 md:gap-0 cursor-pointer
                transition-colors hover:text-[#ed3434]">
                    <img src={profile} alt="foto de perfil" className='w-12 md:w-14 block' loading='lazy' />
                    <p className='font-bold text-xs md:font-semibold md:text-sm'>Populares</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 md:gap-0 cursor-pointer
                transition-colors hover:text-[#ed3434]">
                    <img src={profile} alt="foto de perfil" className='w-12 md:w-14 block' loading='lazy' />
                    <p className='font-bold text-xs md:font-semibold md:text-sm'>Les gustas</p>
                </div>
            </div>
        </div>
    )
}

export default SwiperFilters;