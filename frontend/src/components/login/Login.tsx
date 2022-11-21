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
        alert(`Form submit: ${JSON.stringify(values)}`)
        navigate("/feed")
        reset()
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
        <div className='formModalXl w-full h-full fixed top-0 left-0 bg-black/50 flex flex-col
        items-center justify-center'>
            <div className={activeClass ? "formModal formModalXl fadeInModal active"
            : "formModal formModalXl fadeInModal"}>
                <button type='button' className='btnNewUserFormClose absolute text-[#2346e3] iconShadowSm
                transition-all hover:scale-105' onClick={() => handleClose()}>
                    <FaTimesCircle className="text-[1.75rem] md:text-[2.5rem]" />
                </button>
                <form onSubmit={onSubmit}>
                    <div className='newUserFormEmailPassword'>
                        <div className='flex flex-col items-start justify-center mt-1'>
                            <label htmlFor="email" className='text-sm font-bold text-[#ed3434]'>
                                Correo electrónico
                            </label>
                            <input {...register('email')} placeholder="Tu email"
                            id="email" type="email" className='mt-2 bg-white/90 rounded-md p-2 shadow-sm
                            w-[205px] text-sm'/>
                        </div>
                        <div className='flex flex-col items-start justify-center mt-1'>
                            <label htmlFor="password" className='text-sm font-bold text-[#ed3434]'>
                                Contraseña
                            </label>
                            <input {...register('password')} placeholder="Tu contraseña"
                            id="password" type="password" className='mt-2 bg-white/90 rounded-md p-2
                            shadow-sm w-[205px] text-sm'/>
                        </div>
                    </div>
                </form>
                <button type="submit" className='btnSubmit textShadowSm btnRegister btnRecommended shadow-md
                font-bold tracking-wider absolute text-[#FFEAEA] rounded-full px-6 py-2'>
                    Submit
                </button>
            </div>
        </div>
        </>
        : null }
        </>
    )
}

export default Login;