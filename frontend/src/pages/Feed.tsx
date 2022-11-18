import { SideBar, SwiperCard, SwiperFilters, Recommended } from './../components/';

function Feed() {
    return (
    <div className="flex h-screen w-screen bg-[#ffcbcb]">
        <SideBar />
        <div className="swiperContainer flex flex-col items-center justify-center">
            <SwiperFilters />
            <SwiperCard />
        </div>
        <Recommended />
    </div>
    )
}

export default Feed;