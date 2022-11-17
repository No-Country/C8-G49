import { Outlet, ScrollRestoration } from 'react-router-dom';

const Root = () => {
    return (
        <div className='overflow-x-hidden'>
            <Outlet/>
            <ScrollRestoration />
        </div>
    )
}

export default Root;