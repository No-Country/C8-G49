import { FaHeart, FaCommentAlt } from "react-icons/fa";

const MatchesAndChats = () => {
    return (
    <>
    <div className="relative h-fit w-full">
        <div className="flex items-center justify-around px-6 mt-7 w-full">
            <div className="flex flex-col justify-center items-center cursor-pointer">
                <FaHeart className="text-[#ed3434] text-[2rem]"/>
                <p className="text-[#ed3434] text-sm textShadowSm font-semibold tracking-wide">
                    Matches
                </p>
            </div>
            <div className="flex flex-col justify-center items-center cursor-pointer">
                <FaCommentAlt className="text-[#FF929D] text-[2rem]"/>
                <p className="text-neutral-700 text-sm font-semibold tracking-wide">
                    Mensajes
                </p>
            </div>
        </div>
        <div className="absolute -bottom-4 rounded-full h-[3px] w-[99.5%] bg-[#ed3434]/60" />
    </div>
    <div className="flex flex-col w-full gap-4 items-start justify-start bg-white h-[20.5rem]
    border-[3px] border-[#ed3434]/60 mt-8 rounded-lg overflow-y-auto overflow-x-hidden">
    </div>
    </>
    )
}

export default MatchesAndChats;