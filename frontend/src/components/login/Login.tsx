import { useForm } from 'react-hook-form';
import { FaTimesCircle } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
    modalState: boolean
    setModalState: React.Dispatch<React.SetStateAction<boolean>>
}

type FormData = {
    email: string
    password: string
}

const Login = ({ modalState, setModalState }: Props) => {
    const { register, handleSubmit, reset } = useForm<FormData>()
    const [activeClass, SetActiveClass] = useState<boolean>(false)
    const navigate = useNavigate()

    const onSubmit = handleSubmit((values) => {
        console.log(`Form submit: ${JSON.stringify(values)}`)
        reset()
        navigate("/feed")
    })

    const handleClose = () => {
        SetActiveClass(true)
        setTimeout(() => {
            setModalState(false)
        }, 300)
        setTimeout(() => {
            SetActiveClass(false)
        }, 350)
    }

    return (
        <>
        {modalState ?
        <>
        <div className='w-full h-full fixed top-0 left-0 bg-black/50 flex flex-col
        items-center justify-center'>
            <div className={activeClass ? "loginModal fadeInModal active"
            : "loginModal fadeInModal"}>
                <button type='button' className='top-4 right-4 absolute text-[#2346e3] iconShadowSm
                transition-all hover:scale-105' onClick={() => handleClose()}>
                    <FaTimesCircle className="text-[2.15rem]" />
                </button>
                <form onSubmit={onSubmit} className="grid place-items-center gap-8">
                    <div className='grid place-items-center gap-6 mt-5'>
                        <div className='flex flex-col items-center justify-center'>
                            <label htmlFor="email" className='font-bold text-[#ed3434]'>
                                Correo electrónico
                            </label>
                            <input {...register('email', {required: true})} placeholder="Tu email"
                            id="email" type="email" className='mt-2 bg-white/90 rounded-md p-3 shadow-sm
                            w-[205px]'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <label htmlFor="password" className='font-bold text-[#ed3434]'>
                                Contraseña
                            </label>
                            <input {...register('password', {required: true})} placeholder="Tu contraseña"
                            id="password" type="password" className='mt-2 bg-white/90 rounded-md p-3
                            shadow-sm w-[205px]'/>
                        </div>
                    </div>
                    <button type="submit" className='btnSubmitGradient textShadowSm btnRegister btnRecommended
                    shadow-md font-bold tracking-wider text-lg text-[#FFEAEA] rounded-full mt-6 px-6 py-2'>
                        Continuar
                    </button>
                </form>
            </div>
        </div>
        </>
        : null }
        </>
    )
}

export default Login;