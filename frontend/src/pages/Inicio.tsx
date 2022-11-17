import { Nav, Filtros, Recomendados, SwipperCard } from '../components/';

function Inicio() {
    return (
        <div className="Home grid grid-cols-12 h-screen relative">

            {/* xl:row-start-1 lg:row-start-1 md:row-start-1 sm:row-start-1 row-start-3 */}
            {/* xl:row-start-2 lg:row-start-2 md:row-start-2 sm:row-start-2 row-start-2*/}
            {/* xl:row-start-3 lg:row-start-3 md:row-start-3 sm:row-start-3 row-start-1*/}
            <div className="nav items-center justify-center xl:col-span-1 border-r-2 border-solid border-[#000] lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-12  bg-[#FFF3F3] xl:relative lg:relative md:relative sm:relative absolute left-0 bottom-0">

                <Nav />
            </div>
            <div className="xl:col-span-9 lg:col-span-7 md:col-span-7 sm:col-span-7 col-span-12 bg-[#ffeaea] h-full">
                <Filtros />
                <SwipperCard />
            </div>
            <div className="recomendados xl:col-span-2 lg:col-span-3 md:col-span-3 sm:col-span-3 border-l-2 border-solid border-[#000] col-span-12 bg-[#FFF3F3] xl:relative lg:relative md:relative sm:relative absolute left-0 top-0">

                <Recomendados />
            </div>

        </div>
    )
}

export default Inicio;