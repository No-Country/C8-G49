import { useForm } from 'react-hook-form';
import { FaTimesCircle } from 'react-icons/fa';
import { ChangeEvent, useState } from 'react';
import { OnBoardingSuccess } from '../';
import { useEffect } from 'react';

type Props = {
    modalState: boolean
    setModalState: React.Dispatch<React.SetStateAction<boolean>>
}

type FormData = {
    name: string
    age: number
    gender: string
    genderInterest: string
    email: string
    password: string
    confirmPassword: string
    img1: File
    img2: File
    img3: File
    img4: File
    description: string
}

const OnBoarding = ({ modalState, setModalState }: Props) => {
    const { register, handleSubmit, getValues, reset } = useForm<FormData>()
    const [activeClass, SetActiveClass] = useState<boolean>(false)
    const [showModalSuccess, setShowModalSuccess] = useState<boolean>(false)

    const uploadImg = async (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        const file: File = (target.files as FileList)[0]
        console.log(file)
        const base64 = await convertImg(file)
        console.log(base64)
    }

    const convertImg = (file: File) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            
            fileReader.onload = () => {
                resolve(fileReader.result)
            }

            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

/*     const uploadImgs = (e: ChangeEvent<HTMLInputElement>) => {
        const formData = new FormData()
        const target = e.target as HTMLInputElement
        const file: File = (target.files as FileList)[0]
        formData.append("file", file)
        console.log(formData)
    } */
 
    const onSubmit = (data: any) => {
        alert(`Form submit: ${JSON.stringify(data)}`)
        reset()
        setShowModalSuccess(true)
    }

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
                <form onSubmit={handleSubmit(onSubmit)} className="newUserForm">
                    <div className='newUserFormContainer1'>
                        <div className='newUserFormData'>
                            <div className='flex flex-col items-start justify-center'>
                                <label htmlFor="name" className='text-sm font-bold text-[#ed3434]'>
                                    Nombre Completo
                                </label>
                                <input {...register('name')} required placeholder="Tu nombre" id="name" type="text"
                                className='mt-2 bg-white/90 rounded-md p-2 shadow-sm w-[205px] text-sm'/>
                            </div>
                            <div className='flex flex-col items-start justify-center'>
                                <label htmlFor="age" className='text-sm font-bold text-[#ed3434]'>
                                    Edad
                                </label>
                                <input {...register('age')} required placeholder="18" id="age" type="number"
                                min="18" max="99" className='mt-2 bg-white/90 rounded-md p-2 shadow-sm
                                w-10 text-sm'/>
                            </div>
                        </div>
                        <div className='newUserFormGender'>
                            <div className='flex flex-col items-start justify-center'>
                                <label htmlFor="gender" className='text-sm font-bold text-[#ed3434]'>
                                    Género
                                </label>
                                <select {...register('gender')} required id="gender" className='mt-2 bg-white/90
                                rounded-md p-2 shadow-sm w-[205px] text-sm' defaultValue="default">
                                    <option value="default" disabled>Opciones</option>
                                    <option value="man">Hombre</option>
                                    <option value="woman">Mujer</option>
                                    <option value="notSpecified">Prefiero no aclararlo</option>
                                </select>
                            </div>
                            <div className='flex flex-col items-start justify-center'>
                                <label htmlFor="genderInterest" className='text-sm font-bold text-[#ed3434]'>
                                    Me interesan
                                </label>
                                <select {...register('genderInterest')} required id="genderInterest"
                                className='mt-2 bg-white/90 rounded-md p-2 shadow-sm w-[205px] text-sm'
                                defaultValue="default">
                                    <option value="default" disabled>Opciones</option>
                                    <option value="man">Hombres</option>
                                    <option value="woman">Mujeres</option>
                                    <option value="everyone">Cualquier género</option>
                                </select>
                            </div>
                        </div>
                        <div className='newUserFormEmailPassword'>
                            <div className='flex flex-col items-start justify-center mt-1'>
                                <label htmlFor="email" className='text-sm font-bold text-[#ed3434]'>
                                    Correo electrónico
                                </label>
                                <input {...register('email')} required placeholder="Tu email" id="email"
                                type="email" className='mt-2 bg-white/90 rounded-md p-2 shadow-sm
                                w-[205px] text-sm'/>
                            </div>
                            <div className='flex flex-col items-start justify-center mt-1'>
                                <label htmlFor="password" className='text-sm font-bold text-[#ed3434]'>
                                    Contraseña
                                </label>
                                <input {...register('password')} required placeholder="Tu contraseña" id="password"
                                type="password" className='mt-2 bg-white/90 rounded-md p-2
                                shadow-sm w-[205px] text-sm'/>
                            </div>
                            <div className='flex flex-col items-start justify-center'>
                                <label htmlFor="confirmPassword" className='text-sm font-bold text-[#ed3434]'>
                                    Confimar contraseña
                                </label>
                                <input {...register('confirmPassword',
                                {validate: (value) => value === getValues('password')})} required
                                placeholder="Confirma tu contraseña" id="confirmPassword" type="password"
                                className='mt-2 bg-white/90 rounded-md p-2 shadow-sm w-[205px] text-sm'/>
                            </div>
                        </div>
                    </div>
                    <div className="newUserFormContainer2">
                        <p className="text-sm font-bold text-[#ed3434]">Fotos del perfil</p>
                        <div className="newUserFormImages">
                            <label htmlFor="img1" className='relative aspect-[4/5] bg-[#e0d4d4] w-24
                            rounded-lg cursor-pointer border-2 border-[#E87C7C] border-dashed'>
                                <FaTimesCircle size={18} className="bg-[#FFEAEA] text-[#ed3434]
                                rotate-45 rounded-full absolute -bottom-1 -right-1" />
                            </label>
                            <input {...register('img1')} required type="file" id="img1" accept=".png, .jpg, .jpeg"
                            className="hidden" onChange={(e) => uploadImg(e)}/>
                            <label htmlFor="img2" className='relative aspect-[4/5] bg-[#e0d4d4] w-24
                            rounded-lg cursor-pointer border-2 border-[#E87C7C] border-dashed'>
                                <FaTimesCircle size={18} className="bg-[#FFEAEA] text-[#ed3434]
                                rotate-45 rounded-full absolute -bottom-1 -right-1" />
                            </label>
                            <input {...register('img2')} required type="file" id="img2" accept=".png, .jpg, .jpeg"
                            className="hidden" onChange={(e) => uploadImg(e)}/>
                            <label htmlFor="img3" className='relative aspect-[4/5] bg-[#e0d4d4] w-24
                            rounded-lg cursor-pointer border-2 border-[#E87C7C] border-dashed'>
                                <FaTimesCircle size={18} className="bg-[#FFEAEA] text-[#ed3434]
                                rotate-45 rounded-full absolute -bottom-1 -right-1" />
                            </label>
                            <input {...register('img3')} required type="file" id="img3" accept=".png, .jpg, .jpeg"
                            className="hidden" onChange={(e) => uploadImg(e)}/>
                            <label htmlFor="img4" className='relative aspect-[4/5] bg-[#e0d4d4] w-24
                            rounded-lg cursor-pointer border-2 border-[#E87C7C] border-dashed'>
                                <FaTimesCircle size={18} className="bg-[#FFEAEA] text-[#ed3434]
                                rotate-45 rounded-full absolute -bottom-1 -right-1" />
                            </label>
                            <input {...register('img4')} required type="file" id="img4" accept=".png, .jpg, .jpeg"
                            className="hidden" onChange={(e) => uploadImg(e)}/>
                        </div>
                        <small className='mt-2'>Se requieren 4 imágenes para crear el perfil.</small>
                        <div className='newUserFormDesc'>
                            <label htmlFor="description" className='text-sm font-bold text-[#ed3434] mt-2'>
                                Descripción
                            </label>
                            <textarea {...register('description')} required maxLength={500}
                            placeholder="Cuéntanos un poco sobre tí" id="description"
                            className='mt-2 bg-white/90 rounded-md p-2 w-72 sm:w-80 h-36 shadow-sm text-sm'/>
                        </div>
                    </div>
                    <button type="submit" className='btnSubmit btnSubmitGradient textShadowSm btnTransition
                    btnShadow shadow-md font-bold tracking-wider absolute text-[#FFEAEA] rounded-full px-6 py-2'>
                        Continuar
                    </button>
                </form>
            </div>
        </div>
        <OnBoardingSuccess modalState={modalState} setModalState={setModalState}
        modalSuccess={showModalSuccess} setModalSuccess={setShowModalSuccess} />
        </>
        : null}
        </>
    )
}

export default OnBoarding;