import { Outlet, ScrollRestoration } from 'react-router-dom';

const Root = () => {
    return (
        <div className='h-screen'>
            <Outlet/>
            <ScrollRestoration />
        </div>
    )
}

export default Root;