import logo from '../../assets/logoRegister.svg';

const FullScreenLoader = () => {
    return (
        <div className='gradientBg h-screen w-screen flex flex-col items-center justify-center'>
            <img src={logo} alt="Matcher logo" className='w-64 block loadingLogo' />
        </div>
    )
}

export default FullScreenLoader;