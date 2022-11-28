import { UserSideBar, UserSwiperCard, FullScreenLoader } from '../components';
import { useState, useEffect } from "react"

const UserPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    })

    return (
        <>
        {isLoading ? <FullScreenLoader/>
        : <div className='xlContainer'>
            <div className="pageGradientBg flex h-screen w-full items-center justify-center relative">
                <div className="md:block hidden">
                    <UserSideBar />
                </div>
                <UserSwiperCard />
            </div>
        </div>}
        </>
    )
}

export default UserPage;