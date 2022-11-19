import { SideBar, SwiperCard, SwiperFilters, Recommended, MobileNav, MobileFooter } from './../components/';

function Feed() {
    return (
        <div className='feedContainer'>
            <div className="flex flex-col-reverse md:flex md:flex-row h-screen w-full bg-[#ffcbcb] relative">
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
                <div className="recommendedContainer md:block bg-[#FFEAEA] hidden">
                    <Recommended />
                </div>
                <div className='md:hidden block absolute top-0 w-screen'>
                    <MobileNav/>
                </div>
            </div>
        </div>
    )
}

export default Feed;