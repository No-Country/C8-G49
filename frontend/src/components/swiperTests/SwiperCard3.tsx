import { SwiperMatcher, SwiperDescription } from '../';
import { useState } from 'react';

const SwiperCard3 = () => {
    const [showCard, setShowCard] = useState<boolean>(true)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [, setShowUi] = useState<boolean>(true)
        
    return (
        <>
        {showCard ?
        <div className='swiperCard'>
            <div className="relative flex flex-col items-center justify-center">
                <SwiperMatcher setCardState={setShowCard} />
            </div>
            <div className="w-[22rem] h-[104px] bg-[#FFEAEA] rounded-lg hidden md:flex justify-between
            items-end gap-2 p-3 shadow-sm hover:shadow-md">
                <p className='text-sm font-medium flex self-start'>
                    Roman Riquelme
                </p>
                <button type='button' className='text-[#ed3434] textShadowSm font-bold px-4 py-1
                rounded-2xl min-w-max gradientBg shadow-md shadow-black/10 btnTransition btnShadow'
                onClick={() => setShowModal(true)}>
                    Ver más
                </button>
            </div>
            <SwiperDescription modalState={showModal} setModalState={setShowModal} setUiState={setShowUi} />
        </div>
        : null }
        </>
    )
}

export default SwiperCard3;
