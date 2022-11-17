import { NavBar, SwiperCard, SwiperFilters, Recommended } from './../components/';

function Feed() {
    return (
    <div className="flex min-h-screen w-screen bg-[#ffcbcb]">
        <NavBar />
        <div className="flex flex-col items-center justify-around py-4 w-[65%]">
            <SwiperFilters />
            <SwiperCard />
        </div>
        <Recommended />
    </div>
    )
}

export default Feed;