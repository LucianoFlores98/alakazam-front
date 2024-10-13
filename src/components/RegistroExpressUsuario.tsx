import { Button, Card, Dialog, Typography } from "@material-tailwind/react"
import React from "react";
import { useEffect, useState } from "react"
import RegisterSuccess from "./RegisterSuccess";

interface Data {
    title: string;
    secondaryText: string;
    buttonText: string;
}

function RegistroExpressUsuario() {
    const [date, setDate] = useState('')
    const [inputValueDoc, setInputValueDoc] = useState('');
    const [inputValueTel, setInputValueTel] = useState('');
    const [inputValuePostal, setInputValuePostal] = useState('');
    const [inputValuePiso, setInputValuePiso] = useState('');
    const [inputValueAuth, setInputValueAuth] = useState('');
    const [currentStep, setCurrentStep] = useState(1);
    const [secondsRemaining, setSecondsRemaining] = useState(300);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    const data: Data = { title: '¡Tu cuenta a sido creada con éxito!', secondaryText: '¡Bienvenido Nicolás!', buttonText: 'Finalizar'  };

    useEffect(() => {
        if (secondsRemaining <= 0) return;

        const intervalId = setInterval(() => {
            setSecondsRemaining((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [secondsRemaining]);

    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    const resetTimer = () => {
        setSecondsRemaining(300);
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDate(e.target.value)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setValue: React.Dispatch<React.SetStateAction<string>>, maxLength: number) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setValue(value.slice(0, maxLength));
    };

    const handleContinue = () => {
        if (currentStep < 3) {
          setCurrentStep(currentStep + 1);
          resetTimer();
        }
        
    };

    return (
        
        <Card className="m-5">
            <Button 
                onClick={handleOpen} 
                color="deep-orange"
                variant="text"
                className="p-0 font-bold hover:bg-transparent"
            >
                Registrate
            </Button>
            <Dialog open={open} handler={handleOpen}>
            {currentStep === 1 && (
                <>
                <div className="flex place-content-between ml-5 my-2">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1168D9" className="size-6">
                            <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                        <Typography variant='h4' className="mr-2 ml-1 my-2">
                            Completa tus datos
                        </Typography>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1168D9" className="size-6 rotate-45">
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                    </div>
                    <Button variant="text" onClick={handleOpen}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>
                    </Button>
                </div>
                <div className="mr-5 ml-5 mt-2 my-2">
                    <Typography variant='h6' className="my-1">
                        Correo electrónico
                    </Typography>
                    <input placeholder="ejemplo@tumail.com" className="rounded-md w-8/12 bg-transparent placeholder:text-slate-600 text-slate-700 text-sm border border-gray-400 focus:border-gray-600 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-900 shadow-sm focus:shadow" />
                    <Typography variant='h6' className="my-1">
                        Nombre
                    </Typography>
                    <input placeholder="Ingresa tu nombre" className="rounded-md w-8/12 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-400 focus:border-gray-600 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-900 shadow-sm focus:shadow" />
                    <Typography variant='h6' className="my-1">
                        Apellido
                    </Typography>
                    <input placeholder="Ingresa tu apellido" className="rounded-md w-8/12 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-400 focus:border-gray-600 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-900 shadow-sm focus:shadow" /> 
                </div>
                <div className="mr-5 ml-5 mt-2 my-1">
                    <div className="flex">

                        <div className="mr-2 my-1">
                            <Typography variant='h6'>
                                Fecha de nacimiento:
                            </Typography>
                            <input
                                id="dob"
                                type="date"
                                className="mt-1 block pl-3 py-2 text-base bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-400 focus:border-gray-600 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-900 shadow-sm focus:shadow"
                                value={date}
                                onChange={handleDateChange}
                                
                                placeholder="Fecha"                           
                                />
                        </div>
                        <div className="mr-2 ml-2 my-1">
                            <Typography variant="h6">Género</Typography>
                            <select
                                placeholder="Género"
                                className="block h-10 px-4 py-2 mr-3 my-1 text-sm text-gray-700 bg-white border border-gray-400 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:outline-none appearance-none"
                            >
                                <option>Selecciona tu género</option>
                                <option>Hombre</option>
                                <option>Mujer</option>
                                <option>Otro</option>
                            </select>
                        </div>
                    </div>
                </div>



                <div className="mr-5 ml-5 mt-1 w-7/12">
                    <Typography variant="h6" className="mt-2">
                        Nro. de Documento
                    </Typography>
                    <div className="flex">

                        <select
                            className="block w-3/12 h-10 px-4 py-2 mr-3 text-sm text-gray-700 bg-white border border-gray-400 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:outline-none appearance-none"
                        >
                            <option value="" disabled selected hidden>Tipo</option>
                            <option>DNI</option>
                            <option>Pasaporte</option>
                            <option>Otro</option>
                        </select>
                        <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            className="font-mono tracking-[0.5em] text-center bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-400 focus:border-gray-600 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-900 shadow-sm focus:shadow"
                            maxLength={8} 
                            value={inputValueDoc}
                            onChange={(e) => handleInputChange(e, setInputValueDoc, 8)}
                            />

                    </div>

                    <Typography variant="h6" className="mt-3">
                        Nro. de Teléfono
                    </Typography>
                    <div className="flex mb-5">

                        <select
                            className="block w-3/12 h-10 px-4 py-2 mr-3 text-sm text-gray-700 bg-white border border-gray-400 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:outline-none appearance-none"
                        >
                            <option value="" disabled selected hidden>Cod.</option>
                            <option>+54</option>
                            <option>+55</option>
                            <option>+56</option>
                        </select>
                        <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            className="font-mono tracking-[0.5em] text-center bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-400 focus:border-gray-600 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-900 shadow-sm focus:shadow"
                            maxLength={13}
                            value={inputValueTel}
                            onChange={(e) => handleInputChange(e, setInputValueTel, 10)}
                            />
                    </div>
                </div>

                <div className="mx-5 text-center">
                    <Button className="w-1/2 m-auto mb-5 bg-primary_2 rounded-lg" onClick={handleContinue}>Continuar</Button>
                </div>
                </>
            )}
            {currentStep === 2 && (
                <>
                    <div className="flex place-content-between ml-5 my-2">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1168D9" className="size-6">
                                <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                            </svg>
                            <Typography variant='h4' className="mr-2 ml-1 my-2">
                                ¡Falta poquito!
                            </Typography>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1168D9" className="size-6 rotate-45">
                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>
                        </div>
                        <Button variant="text" onClick={handleOpen}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                        </Button>
                    </div>
                    <div className="flex">
                        <div className="mr-2 ml-5 my-2">
                            <Typography variant="h6">Ciudad</Typography>
                            <select
                                placeholder="Seleccione su ciudad"
                                className="block h-10 px-4 py-2 mr-3 text-sm text-gray-700 bg-white border border-gray-400 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:outline-none appearance-none"
                            >
                                <option selected>Jardín América</option>
                                <option>Puerto Rico</option>
                                <option>No se, no conozco tanto</option>
                            </select>
                        </div>
                        <div className="mr-2 ml-5 my-2">
                            <Typography variant="h6">Provincia/Estado</Typography>
                            <select
                                placeholder="Selecciona su provincia"
                                className="block h-10 px-4 py-2 mr-3 text-sm text-gray-700 bg-white border border-gray-400 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:outline-none appearance-none"
                            >
                                <option>Misiones</option>
                                <option>Cordoba</option>
                                <option>Me mataste</option>
                                <option>No se, no conozco tanto</option>
                            </select>
                        </div>
                    </div>
    
                    <div className="mr-2 ml-5 my-2"> 
                        <Typography variant="h6">
                            Domicilio:
                        </Typography>
                        <input placeholder="Domicilio" className="mt-1 w-8/12 block pl-3 py-2 text-base bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-400 focus:border-gray-600 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-900 shadow-sm focus:shadow"></input>
                    </div>
                    <div className="mr-2 ml-5 my-2"> 
                        <Typography variant="h6">
                            Nro. de Dirección:
                        </Typography>
                        <input placeholder="Calle" className="mt-1 w-6/12 block pl-3 py-2 text-base bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-400 focus:border-gray-600 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-900 shadow-sm focus:shadow"></input>
                    </div>
                    <div className="mr-2 ml-5 my-2">
                        <Typography variant="h6">
                            Piso
                        </Typography>
                        <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            className="font-mono tracking-[0.5em] w-2/12 text-center bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-400 focus:border-gray-600 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-900 shadow-sm focus:shadow"
                            maxLength={3}
                            value={inputValuePiso}
                            onChange={(e) => handleInputChange(e, setInputValuePiso, 3)}
                            placeholder="123"
                            />
                    </div>
                    <div className="mr-2 ml-5 my-2">
                        <Typography variant="h6">
                            Depto.
                        </Typography>
                        <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            className="uppercase font-mono tracking-[0.5em] w-2/12 text-center bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-400 focus:border-gray-600 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-900 shadow-sm focus:shadow"
                            maxLength={4}
                            placeholder="ABCD"
                            />
                    </div>
                    <div className="mr-2 ml-5 my-2">
                        <Typography variant="h6">
                            Cod. Postal
                        </Typography>
                        <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            className="font-mono tracking-[0.5em] w-4/12 text-center bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-400 focus:border-gray-600 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-900 shadow-sm focus:shadow"
                            maxLength={8}
                            value={inputValuePostal}
                            onChange={(e) => handleInputChange(e, setInputValuePostal, 8)}
                            placeholder="________"
                            />
                    </div>
                    <div className="mx-5 text-center">
                        <Button className="w-1/2 m-auto my-3 mb-5 bg-primary_2 rounded-lg" onClick={handleContinue}>Continuar</Button>
                    </div>
                </>
            )}
            { currentStep === 3 && (
                <>
                    <div className="flex justify-end ml-5 my-2">
                        <Button variant="text" onClick={handleOpen}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                        </Button>
                    </div>
                    <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#eb4d4b" className="size-6 rotate-45 my-3">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#eb4d4b" className="size-6 rotate-45">
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                        <Typography variant="h4">
                            ¡Ya casi!
                        </Typography>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#eb4d4b" className="size-6 rotate-45">
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#eb4d4b" className="size-6 rotate-45 my-3">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="w-full my-5 self-center text-center">
                        <Typography variant="h6">
                            Verificación de número:
                        </Typography>
                        <Typography className="my-1">
                            Para verificar que es usted por favor introduzca el codigo
                            que le enviamos mediante mensaje de texto.
                        </Typography>
                        <Button className="bg-success my-5 m-auto" disabled={secondsRemaining !== 0}
                            onClick={resetTimer}>Reenviar código</Button>
                        <Typography variant="h6" className="mt-5">
                            Ingresa el código
                        </Typography>
                        <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            className="font-mono tracking-[0.5em] w-10/12 text-center bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-400 focus:border-gray-600 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-900 shadow-sm focus:shadow"
                            maxLength={8}
                            value={inputValueAuth}
                            onChange={(e) => handleInputChange(e, setInputValueAuth, 8)}
                            placeholder="________"
                            />
                        <Typography className="mt-5">
                            ¿No recibiste el código de verificación?
                            <br />
                            Reenviar código en {minutes.toString().padStart(2, '0')}:
                            {seconds.toString().padStart(2, '0')}
                            
                        </Typography>
                        
                        <RegisterSuccess data={data}></RegisterSuccess>
                    </div>
                    
                </>

            )}
            </Dialog>
        </Card>
    )
}

export default RegistroExpressUsuario