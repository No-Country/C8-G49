import { SideBar,
    SwiperCard,
    SwiperFilters,
    Recommended,
    MobileNav,
    MobileFooter,
    FullScreenLoader
} from './../components/';
import { useState, useEffect } from "react"

const Feed = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    })

    return (
        <>
        {isLoading ? <FullScreenLoader/>
        : <div className='feedContainer'>
            <div className="gradientBg flex flex-col-reverse md:flex md:flex-row h-screen w-full relative">
                <div className="sideBarContainer md:block hidden">
                    <SideBar />
                </div>
                <div className='md:hidden block'>
                    <MobileFooter/>
                </div>
                <div className="swiperContainer flex flex-col items-center justify-center gap-3 relative">
                    <SwiperFilters />
                    <SwiperCard />
                </div>
                <div className="recommendedContainer md:block bg-[#FF929D] hidden">
                    <Recommended />
                </div>
                <div className='md:hidden block absolute top-0 w-screen'>
                    <MobileNav/>
                </div>
            </div>
        </div>}
        </>
    )
}

export default Feed;