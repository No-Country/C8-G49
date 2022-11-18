import profile from '../../assets/sidebar-profile.png';

function SwiperFilters() {
    return (
        <div className="flex justify-around items-center md:bg-[#FFEAEA] md:w-[25.5rem] md:rounded-md
        md:shadow-lg mt-2 md:mt-0">
            <div className='py-2 grid grid-cols-3 gap-8 md:gap-14'>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                    <img src={profile} alt="foto de perfil" className='w-14 block' loading='lazy' />
                    <p className='font-semibold text-sm'>En Línea</p>
                </div>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                    <img src={profile} alt="foto de perfil" className='w-14 block' loading='lazy' />
                    <p className='font-semibold text-sm'>Populares</p>
                </div>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                    <img src={profile} alt="foto de perfil" className='w-14 block' loading='lazy' />
                    <p className='font-semibold text-sm'>Les gustas</p>
                </div>
            </div>
        </div>
    )
}

export default SwiperFilters;