import profile from '../../assets/sidebar-profile.png';

function SwiperFilters() {
    return (
        <div className="flex justify-around items-center bg-[#FFEAEA] w-[25.5rem] rounded-md shadow-lg">
            <div className='py-2 grid grid-cols-3 gap-2'>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                    <img src={profile} alt="foto de perfil" className='w-14 block' loading='lazy' />
                    <p className='font-semibold text-sm'>Nuevas personas</p>
                </div>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                    <img src={profile} alt="foto de perfil" className='w-14 block' loading='lazy' />
                    <p className='font-semibold text-sm'>En Linea</p>
                </div>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                    <img src={profile} alt="foto de perfil" className='w-14 block' loading='lazy' />
                    <p className='font-semibold text-sm'>% de match</p>
                </div>
            </div>
        </div>
    )
}

export default SwiperFilters;