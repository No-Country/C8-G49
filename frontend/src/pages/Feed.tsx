import { SideBar,
    SwiperCard,
    SwiperCard2,
    SwiperCard3,
    NoMoreMatches,
    Recommended,
    MobileNav,
    MobileFooter,
    FullScreenLoader
} from './../components/';
import { useState, useEffect } from "react"

const Feed = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [showCard1, setShowCard1] = useState<boolean>(true)
    const [showCard2, setShowCard2] = useState<boolean>(true)
    const [showCard3, setShowCard3] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    })

    return (
        <>
        {isLoading ? <FullScreenLoader />
        : <div className='xlContainer'>
            <div className="pageGradientBg flex flex-col-reverse md:flex md:flex-row items-center justify-center
            h-screen w-full relative">
                <div className="sideBarContainer md:block hidden">
                    <SideBar />
                </div>
                <div className='md:hidden block'>
                    <MobileFooter />
                </div>
                <div className="swiperContainer flex flex-col items-center justify-center relative transition-all duration-1000">
                    <NoMoreMatches />
                    <SwiperCard cardState={showCard1} setCardState={setShowCard1} />
                    <SwiperCard2 cardState={showCard2} setCardState={setShowCard2} />
                    <SwiperCard3 cardState={showCard3} setCardState={setShowCard3} />
                </div>
                <div className="sideBarContainer md:block bg-[#FF929D] hidden">
                    <Recommended />
                </div>
                <div className='md:hidden block absolute top-0 w-screen'>
                    <MobileNav />
                </div>
            </div>
        </div>}
        </>
    )
}

export default Feed;
